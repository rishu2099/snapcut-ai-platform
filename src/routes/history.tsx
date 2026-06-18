import { createFileRoute, Link, redirect } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getImage } from "@/lib/db";
import { supabase } from "@/lib/supabase";
import { Edit2, Download as DownloadIcon } from "lucide-react";

export const Route = createFileRoute("/history")({
  head: () => ({ meta: [{ title: "History — SnapCut AI" }] }),
  beforeLoad: async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      throw redirect({
        to: "/login",
      });
    }
  },
  component: HistoryPage,
});

interface ImageHistoryItem {
  id?: string;
  originalUrl?: string;
  processedUrl?: string;
  timestamp: string;
  originalImageId?: string;
  processedImageId?: string;
  fileName?: string;
  downloadCount?: number;
}

function HistoryItemComponent({ item, index }: { item: ImageHistoryItem, index: number }) {
  const [imageUrl, setImageUrl] = useState<string | undefined>(item.processedUrl);
  const [fileName, setFileName] = useState(item.fileName || `processed_image_${index}.png`);
  const [isEditing, setIsEditing] = useState(false);
  const [downloadCount, setDownloadCount] = useState(item.downloadCount || 0);

  useEffect(() => {
    if (item.processedImageId && !item.processedUrl) {
      getImage(item.processedImageId).then(blob => {
        if (blob) setImageUrl(URL.createObjectURL(blob));
      }).catch(console.error);
    }
  }, [item]);

  const handleRename = async () => {
    if (!isEditing) return;
    setIsEditing(false);
    if (item.id && fileName !== item.fileName) {
      try {
        const { error } = await supabase.from('image_history').update({ file_name: fileName }).eq('id', item.id);
        if (error) {
          console.error("Rename error:", error);
          toast.error("Failed to rename file");
          setFileName(item.fileName || "");
        } else {
          toast.success("File renamed");
        }
      } catch (err) {
        console.error("Unexpected error during rename:", err);
      }
    }
  };

  return (
    <div className="glass rounded-3xl p-3">
      <Link to="/result" search={{ originalImageUrl: item.originalUrl, originalImageId: item.originalImageId, imageUrl: item.processedUrl, processedImageId: item.processedImageId }}>
        {imageUrl ? (
          <img src={imageUrl} alt={`Processed image from ${new Date(item.timestamp).toLocaleString()}`} className="w-full h-48 object-cover rounded-2xl" />
        ) : (
          <div className="w-full h-48 bg-gray-700 rounded-2xl flex items-center justify-center text-muted-foreground">Image Unavailable</div>
        )}
      </Link>
      <div className="mt-3 flex items-center justify-between">
        {isEditing ? (
           <input 
             type="text"
             value={fileName}
             onChange={(e) => setFileName(e.target.value)}
             onBlur={handleRename}
             onKeyDown={(e) => {
               if (e.key === 'Enter') {
                 e.preventDefault();
                 handleRename();
               }
             }}
             className="bg-transparent border-b border-cyan-500 text-sm font-medium text-white focus:outline-none w-full mr-2"
             autoFocus
           />
        ) : (
           <div className="flex items-center gap-2 overflow-hidden mr-2">
             <p className="text-sm font-medium text-white truncate">{fileName}</p>
             <button onClick={() => setIsEditing(true)} className="text-muted-foreground hover:text-cyan-400 flex-shrink-0">
               <Edit2 className="w-4 h-4" />
             </button>
           </div>
        )}
      </div>
      <div className="mt-1 flex items-center justify-between text-xs text-muted-foreground">
        <p>{new Date(item.timestamp).toLocaleString()}</p>
        <p>{downloadCount} downloads</p>
      </div>

      <button onClick={async () => {
        try {
          if (!imageUrl) return;
          const response = await fetch(imageUrl);
          const blob = await response.blob();
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = fileName;
          document.body.appendChild(a);
          a.click();
          a.remove();
          
          if (item.id) {
            await supabase.rpc('increment_download_count', { row_id: item.id }).catch(() => {
              const newCount = downloadCount + 1;
              supabase.from('image_history').update({ download_count: newCount }).eq('id', item.id).then();
            });
            setDownloadCount(prev => prev + 1);
          }
          window.URL.revokeObjectURL(url);
        } catch (error) {
          console.error("Error downloading image:", error);
          alert("Failed to download image. Please try again.");
        }
      }} className="mt-4 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#1a1d24] hover:bg-cyan-500/20 hover:text-cyan-400 px-4 py-2 text-sm font-medium text-white transition-colors">
        <DownloadIcon className="w-4 h-4" />
        Download
      </button>
    </div>
  );
}

function HistoryPage() {
  const [imageHistory, setImageHistory] = useState<ImageHistoryItem[]>([]);

  useEffect(() => {
    const fetchHistory = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (session?.user) {
        const { data, error } = await supabase.from('image_history')
          .select('*')
          .order('created_at', { ascending: false });
          
        if (!error && data && data.length > 0) {
          const formattedHistory = data.map((item: any) => ({
            id: item.id,
            processedUrl: item.processed_url,
            originalUrl: item.original_url,
            timestamp: item.created_at,
            fileName: item.file_name,
            downloadCount: item.download_count
          }));
          setImageHistory(formattedHistory);
          return;
        }
      }
      
      // Fallback to local storage if not logged in or DB empty
      const storedHistory = localStorage.getItem("imageHistory");
      if (storedHistory) {
        setImageHistory(JSON.parse(storedHistory));
      }
    };

    fetchHistory();
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Your <span className="text-gradient">History</span></h1>
        <p className="mt-3 text-muted-foreground">View your previously processed images.</p>

        {imageHistory.length === 0 ? (
          <p className="mt-8 text-center text-muted-foreground">No images in history yet. Upload one to get started!</p>
        ) : (
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {imageHistory.map((item, index) => (
              <HistoryItemComponent key={index} item={item} index={index} />
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

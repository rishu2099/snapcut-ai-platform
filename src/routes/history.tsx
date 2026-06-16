import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getImage } from "@/lib/db";

export const Route = createFileRoute("/history")({
  head: () => ({ meta: [{ title: "History — SnapCut AI" }] }),
  component: HistoryPage,
});

interface ImageHistoryItem {
  originalUrl?: string;
  processedUrl?: string;
  timestamp: string;
  originalImageId?: string;
  processedImageId?: string;
}

function HistoryItemComponent({ item, index }: { item: ImageHistoryItem, index: number }) {
  const [imageUrl, setImageUrl] = useState<string | undefined>(item.processedUrl);

  useEffect(() => {
    if (item.processedImageId && !item.processedUrl) {
      getImage(item.processedImageId).then(blob => {
        if (blob) setImageUrl(URL.createObjectURL(blob));
      }).catch(console.error);
    }
  }, [item]);

  return (
    <div className="glass rounded-3xl p-3">
      <Link to="/result" search={{ originalImageUrl: item.originalUrl, originalImageId: item.originalImageId, imageUrl: item.processedUrl, processedImageId: item.processedImageId }}>
        {imageUrl ? (
          <img src={imageUrl} alt={`Processed image from ${new Date(item.timestamp).toLocaleString()}`} className="w-full h-48 object-cover rounded-2xl" />
        ) : (
          <div className="w-full h-48 bg-gray-700 rounded-2xl flex items-center justify-center text-muted-foreground">Image Unavailable</div>
        )}
      </Link>
      <p className="mt-2 text-sm text-muted-foreground">{new Date(item.timestamp).toLocaleString()}</p>
      <button onClick={async () => {
        try {
          if (!imageUrl) return;
          const response = await fetch(imageUrl);
          const blob = await response.blob();
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = `processed_image_${index}.png`;
          document.body.appendChild(a);
          a.click();
          a.remove();
          window.URL.revokeObjectURL(url);
        } catch (error) {
          console.error("Error downloading image:", error);
          alert("Failed to download image. Please try again.");
        }
      }} className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brand px-4 py-2 text-sm font-medium text-white shadow-glow">
        Download
      </button>
    </div>
  );
}

function HistoryPage() {
  const [imageHistory, setImageHistory] = useState<ImageHistoryItem[]>([]);

  useEffect(() => {
    const storedHistory = localStorage.getItem("imageHistory");
    if (storedHistory) {
      setImageHistory(JSON.parse(storedHistory));
    }
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

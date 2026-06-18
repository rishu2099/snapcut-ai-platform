import { createFileRoute, Link, useNavigate, redirect } from "@tanstack/react-router";
import { SidebarLayout } from "@/components/SidebarLayout";
import { supabase } from "@/lib/supabase";
import { 
  Upload, 
  Image as ImageIcon, 
  Sparkles, 
  TrendingUp, 
  Clock,
  History,
  Key,
  Download
} from "lucide-react";
import { useState, useEffect } from "react";
import { getImage } from "@/lib/db";
import { formatDistanceToNow } from "date-fns";

export const Route = createFileRoute("/dashboard")({
  head: () => ({ meta: [{ title: "Dashboard — SnapCut AI" }] }),
  beforeLoad: async () => {
    if (typeof window !== 'undefined') {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        throw redirect({
          to: "/login",
        });
      }
    }
  },
  component: Dashboard,
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
  generationTimeMs?: number;
}

function RecentImageRow({ item, index }: { item: ImageHistoryItem; index: number }) {
  const navigate = useNavigate();
  const date = formatDistanceToNow(new Date(item.timestamp), { addSuffix: true });
  const name = item.fileName || `image_${new Date(item.timestamp).getTime().toString().slice(-6)}.png`;
  const [localDownloadCount, setLocalDownloadCount] = useState(item.downloadCount || 0);

  const handleRowClick = () => {
    navigate({
      to: "/result",
      search: {
        originalImageUrl: item.originalUrl,
        originalImageId: item.originalImageId,
        imageUrl: item.processedUrl,
        processedImageId: item.processedImageId
      }
    });
  };

  const handleDownload = async (e: React.MouseEvent) => {
    e.stopPropagation(); // prevent row click
    try {
      let urlToDownload = item.processedUrl;
      
      // If we have an ID but no URL, fetch from DB first
      if (item.processedImageId && !urlToDownload) {
        const blob = await getImage(item.processedImageId);
        if (blob) {
          urlToDownload = URL.createObjectURL(blob);
        }
      }

      if (!urlToDownload) {
        alert("Image not found");
        return;
      }

      const response = await fetch(urlToDownload);
      const blob = await response.blob();
      const tempUrl = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = tempUrl;
      a.download = name;
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(tempUrl);

      // Increment download count in Supabase
      if (item.id) {
        setLocalDownloadCount(prev => prev + 1);
        await supabase.rpc('increment_download_count', { row_id: item.id }).catch(() => {
          // If RPC fails, try standard update (if RLS allows)
          const newCount = localDownloadCount + 1;
          supabase.from('image_history').update({ download_count: newCount }).eq('id', item.id).then();
        });
      }
      window.URL.revokeObjectURL(tempUrl);
    } catch (error) {
      console.error("Error downloading image:", error);
      alert("Failed to download image. Please try again.");
    }
  };

  return (
    <tr 
      onClick={handleRowClick}
      className="hover:bg-white/5 transition-colors cursor-pointer group"
    >
      <td className="px-6 py-4">
        <div className="flex items-center gap-3">
          <ImageIcon className="h-5 w-5 text-muted-foreground group-hover:text-cyan-400 transition-colors" />
          <span className="text-white font-medium">{name}</span>
        </div>
      </td>
      <td className="px-6 py-4 text-muted-foreground">{date}</td>
      <td className="px-6 py-4">
        <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-400">
          completed
        </span>
      </td>
      <td className="px-6 py-4 text-muted-foreground">
        {localDownloadCount}
      </td>
      <td className="px-6 py-4 text-right">
        <button 
          onClick={handleDownload}
          className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-cyan-400 font-medium transition-colors"
        >
          <Download className="h-4 w-4" />
          Download
        </button>
      </td>
    </tr>
  );
}

function Dashboard() {
  const [history, setHistory] = useState<ImageHistoryItem[]>([]);
  const [statsData, setStatsData] = useState({ credits: 0, avgTime: '0s', total: 0, thisMonth: 0 });

  useEffect(() => {
    const fetchHistoryAndStats = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (session?.user) {
        // Fetch History
        const { data: histData, error: histError } = await supabase.from('image_history')
          .select('*')
          .order('created_at', { ascending: false });
          
        let historyList: ImageHistoryItem[] = [];
        if (!histError && histData) {
          historyList = histData.map((item: any) => ({
            id: item.id,
            processedUrl: item.processed_url,
            originalUrl: item.original_url,
            timestamp: item.created_at,
            fileName: item.file_name,
            downloadCount: item.download_count,
            generationTimeMs: item.generation_time_ms
          }));
          setHistory(historyList);
        }

        // Fetch Credits
        const { data: profile } = await supabase.from('profiles').select('credits').eq('id', session.user.id).single();
        const credits = profile ? profile.credits : 0;

        // Calc Stats
        const total = historyList.length;
        let sumMs = 0;
        let validTimeCount = 0;
        let thisMonth = 0;
        const now = new Date();

        historyList.forEach((item: any) => {
           if (item.generationTimeMs) {
             sumMs += item.generationTimeMs;
             validTimeCount++;
           }
           const d = new Date(item.timestamp);
           if (d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear()) {
             thisMonth++;
           }
        });

        let avgTimeStr = '0s';
        if (validTimeCount > 0) {
           avgTimeStr = (sumMs / validTimeCount / 1000).toFixed(1) + 's';
        }

        setStatsData({ credits, avgTime: avgTimeStr, total, thisMonth });
      }
    };

    fetchHistoryAndStats();
  }, []);

  const stats = [
    { 
      label: "Images Processed", 
      value: statsData.total.toString(), 
      icon: ImageIcon, 
    },
    { 
      label: "Credits Remaining", 
      value: statsData.credits.toString(), 
      icon: Sparkles 
    },
    { 
      label: "This Month", 
      value: statsData.thisMonth.toString(), 
      icon: TrendingUp, 
    },
    { 
      label: "Avg. Time", 
      value: statsData.avgTime, 
      icon: Clock, 
    },
  ];

  return (
    <SidebarLayout>
      <div className="px-8 py-8 max-w-7xl mx-auto">
        {/* Top Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold text-white">Dashboard</h1>
          <Link
            to="/upload"
            className="flex items-center gap-2 rounded-xl bg-cyan-500 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-cyan-400"
          >
            <Upload className="h-4 w-4" />
            New Upload
          </Link>
        </div>

        {/* Stats Row */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-10">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col justify-between rounded-2xl border border-border/40 bg-[#12141a] p-5">
              <div className="flex items-start justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                  <s.icon className="h-5 w-5" />
                </div>
                {s.badge && (
                  <span className={`rounded-md px-2 py-1 text-xs font-medium ${s.badgeColor}`}>
                    {s.badge}
                  </span>
                )}
              </div>
              <div className="mt-4">
                <div className="text-3xl font-bold text-white">{s.value}</div>
                <div className="text-sm font-medium text-muted-foreground mt-1">{s.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mb-10">
          <h2 className="text-lg font-semibold text-white mb-4">Quick Actions</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            <Link to="/upload" className="group rounded-2xl border border-border/40 bg-[#12141a] p-6 transition-colors hover:bg-[#1a1d24]">
              <Upload className="h-6 w-6 text-cyan-400 mb-4" />
              <h3 className="font-semibold text-white mb-1">Upload Image</h3>
              <p className="text-sm text-muted-foreground">Remove background from a new image</p>
            </Link>
            <a href="#history" className="group rounded-2xl border border-border/40 bg-[#12141a] p-6 transition-colors hover:bg-[#1a1d24]">
              <History className="h-6 w-6 text-cyan-400 mb-4" />
              <h3 className="font-semibold text-white mb-1">View History</h3>
              <p className="text-sm text-muted-foreground">Access your recent processed images</p>
            </a>
            <Link to="/api" className="group rounded-2xl border border-border/40 bg-[#12141a] p-6 transition-colors hover:bg-[#1a1d24]">
              <Key className="h-6 w-6 text-purple-400 mb-4" />
              <h3 className="font-semibold text-white mb-1">API Access</h3>
              <p className="text-sm text-muted-foreground">Generate API keys for integration</p>
            </Link>
          </div>
        </div>

        {/* Recent Images Table */}
        <div id="history" className="scroll-mt-24">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-white">Processed Images History</h2>
          </div>
          <div className="rounded-2xl border border-border/40 bg-[#12141a] overflow-hidden">
            {history.length === 0 ? (
              <div className="p-8 text-center">
                <ImageIcon className="h-10 w-10 text-muted-foreground/30 mx-auto mb-3" />
                <p className="text-muted-foreground">No images processed yet.</p>
                <Link to="/upload" className="text-cyan-400 hover:underline text-sm font-medium mt-2 inline-block">Upload your first image</Link>
              </div>
            ) : (
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-muted-foreground border-b border-border/40">
                  <tr>
                    <th className="px-6 py-4 font-medium">Image</th>
                    <th className="px-6 py-4 font-medium">Date</th>
                    <th className="px-6 py-4 font-medium">Status</th>
                    <th className="px-6 py-4 font-medium">Downloads</th>
                    <th className="px-6 py-4 font-medium text-right"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/40">
                  {history.map((img, i) => (
                    <RecentImageRow key={img.timestamp + i} item={img} index={i} />
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </SidebarLayout>
  );
}

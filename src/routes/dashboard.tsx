import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Download, ImageIcon, TrendingUp, Zap } from "lucide-react";

export const Route = createFileRoute("/dashboard")({
  head: () => ({ meta: [{ title: "Dashboard — SnapCut AI" }] }),
  component: Dashboard,
});

function Dashboard() {
  const stats = [
    { label: "Plan", value: "Pro", icon: Zap },
    { label: "Credits left", value: "∞", icon: TrendingUp },
    { label: "Images processed", value: "247", icon: ImageIcon },
    { label: "Downloads", value: "192", icon: Download },
  ];
  return (
    <div className="min-h-screen">
      <Header />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="h-14 w-14 rounded-full bg-gradient-brand" />
            <div>
              <h1 className="text-2xl font-bold">Welcome back, Alex</h1>
              <p className="text-sm text-muted-foreground">alex@snapcut.ai</p>
            </div>
          </div>
          <Link to="/upload" className="rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-medium text-white shadow-glow">New Image</Link>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="glass rounded-2xl p-5">
              <div className="flex items-center justify-between text-muted-foreground">
                <span className="text-xs uppercase tracking-wider">{s.label}</span>
                <s.icon className="h-4 w-4" />
              </div>
              <div className="mt-2 text-3xl font-bold">{s.value}</div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <h2 className="mb-4 text-xl font-semibold">Recent images</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="glass aspect-square overflow-hidden rounded-xl">
                <div className="h-full w-full bg-gradient-brand opacity-30" style={{ filter: `hue-rotate(${i * 25}deg)` }} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

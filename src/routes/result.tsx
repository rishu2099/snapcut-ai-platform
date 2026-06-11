import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BeforeAfter } from "@/components/BeforeAfter";
import { Download, Upload, Sparkles } from "lucide-react";

export const Route = createFileRoute("/result")({
  head: () => ({ meta: [{ title: "Result — SnapCut AI" }] }),
  component: ResultPage,
});

const DEMO = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900&q=80";

function ResultPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground"><Sparkles className="h-3 w-3 text-cyan" /> Done in 2.4s</span>
            <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">Your <span className="text-gradient">cutout</span> is ready</h1>
          </div>
        </div>

        <div className="glass rounded-3xl p-3">
          <BeforeAfter before={DEMO} after={DEMO} />
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          <button className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brand px-6 py-3.5 font-medium text-white shadow-glow">
            <Download className="h-4 w-4" /> Download PNG
          </button>
          <Link to="/upload" className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 font-medium">
            <Upload className="h-4 w-4" /> New Image
          </Link>
          <Link to="/pricing" className="inline-flex items-center justify-center gap-2 rounded-full border border-cyan/40 bg-card/60 px-6 py-3.5 font-medium text-cyan">
            Upgrade for HD
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

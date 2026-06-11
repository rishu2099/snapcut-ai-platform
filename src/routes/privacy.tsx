import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/privacy")({
  head: () => ({ meta: [{ title: "Privacy Policy — SnapCut AI" }] }),
  component: () => <Legal title="Privacy Policy" />,
});

export function Legal({ title }: { title: string }) {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{title}</h1>
        <div className="prose prose-invert mt-8 max-w-none text-muted-foreground">
          <p>Last updated: June 11, 2026</p>
          <p>This page describes how SnapCut AI handles your data, your rights, and our responsibilities. All uploads are encrypted in transit and auto-deleted within 24 hours for free-tier users.</p>
          <p>For inquiries, contact privacy@snapcut.ai.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

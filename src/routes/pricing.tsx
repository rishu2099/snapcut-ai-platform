import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Check } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/pricing")({
  head: () => ({ meta: [{ title: "Pricing — SnapCut AI" }] }),
  component: PricingPage,
});

const PLANS = (yearly: boolean) => [
  { name: "Free", price: 0, desc: "Perfect for trying out SnapCut AI.", features: ["5 images per day", "Standard quality output", "Basic formats (PNG, JPG)", "Email support"], cta: "Get Started", highlight: false },
  { name: "Pro", price: yearly ? 499 * 12 : 499, desc: "For professionals and creators", features: ["Unlimited images", "HD quality output", "All formats (PNG, JPG, WEBP)", "Batch processing", "Priority processing", "API access (1,000 calls/mo)"], cta: "Start Pro Trial", highlight: true },
  { name: "Enterprise", price: "Custom", desc: "For teams and large scale usage", features: ["Everything in Pro", "Unlimited API calls", "Custom integrations", "Dedicated support", "SLA guarantee", "Custom contracts"], cta: "Contact Sales", highlight: false },
];

function PricingPage() {
  const [yearly, setYearly] = useState(false);
  return (
    <div className="min-h-screen">
      <Header />
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">Plans for <span className="text-gradient">every creator</span></h1>
          <p className="mt-4 text-muted-foreground">Cancel anytime. Powered by Razorpay.</p>
          <div className="mt-8 inline-flex rounded-full border border-border bg-card/60 p-1 text-sm">
            <button onClick={() => setYearly(false)} className={`rounded-full px-5 py-2 ${!yearly ? "bg-gradient-brand text-white" : "text-muted-foreground"}`}>Monthly</button>
            <button onClick={() => setYearly(true)} className={`rounded-full px-5 py-2 ${yearly ? "bg-gradient-brand text-white" : "text-muted-foreground"}`}>Yearly · save 25%</button>
          </div>
        </div>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {PLANS(yearly).map((p) => (
            <div key={p.name} className={`relative rounded-3xl p-8 ${p.highlight ? "bg-gradient-brand text-white shadow-glow" : "glass"}`}>
              {p.highlight && <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-brand px-3 py-1 text-xs font-medium text-white">Most Popular</span>}
              <div className={`text-sm font-medium ${p.highlight ? "text-white/80" : "text-muted-foreground"}`}>{p.name}</div>
              <div className="mt-3 flex items-baseline gap-1">
                {p.name === "Free" ? (
                  <span className="text-5xl font-bold">₹{p.price} <span className="text-xl font-normal">forever</span></span>
                ) : typeof p.price === "number" ? (
                  <>
                    <span className="text-5xl font-bold">₹{p.price}</span>
                    <span className={`text-sm ${p.highlight ? "text-white/70" : "text-muted-foreground"}`}>/month</span>
                  </>
                ) : (
                  <span className="text-4xl font-bold">{p.price}</span>
                )}
              </div>
              <p className={`mt-1 text-sm ${p.highlight ? "text-white/80" : "text-muted-foreground"}`}>{p.desc}</p>
              <ul className="mt-6 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm"><Check className={`h-4 w-4 ${p.highlight ? "text-white" : "text-cyan"}`} /> {f}</li>
                ))}
              </ul>
              <Link to="/signup" className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-medium ${p.highlight ? "bg-white text-foreground" : "border border-border bg-card hover:bg-secondary"}`}>{p.cta}</Link>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

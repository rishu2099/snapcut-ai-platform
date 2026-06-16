import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Upload, Sparkles, Download, Shield, Zap, Image as ImageIcon, Wand2, Check, Star } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BeforeAfter } from "@/components/BeforeAfter";
import { Section } from "@/components/Section";
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SnapCut AI — Remove Backgrounds. Instantly." },
      { name: "description", content: "One-click AI background removal. Get pro transparent PNGs in seconds." },
    ],
  }),
  component: HomePage,
});

const BEFORE = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900&q=80&auto=format&fit=crop";
const AFTER = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900&q=80&auto=format&fit=crop&bg=transparent";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Logos />
      <Features />
      <HowItWorks />
      <Showcase />
      <Testimonials />
      <PricingPreview />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40 z-0" />
      <div className="absolute left-1/2 top-0 -z-10 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-brand opacity-20 blur-3xl" />
      <div className="mx-auto grid max-w-7xl gap-12 px-4 pb-20 pt-16 sm:px-6 sm:pt-24 lg:grid-cols-2 lg:gap-8 lg:pb-32">
        <motion.div {...fadeUp} className="relative z-10 flex flex-col justify-center">
          <span className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-border/60 bg-card/60 px-3 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-cyan" />
            AI-powered background removal
          </span>
          <h1 className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Remove backgrounds <br />
            in <span className="text-gradient">one click.</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg text-muted-foreground">
            AI-powered background removal that delivers professional transparent images in seconds. Built for creators, sellers, and teams.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/upload" className="group inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3.5 font-medium text-white shadow-glow transition-transform hover:scale-[1.03]">
              <Upload className="h-4 w-4" />
              Upload Image
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link to="/pricing" className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-6 py-3.5 font-medium text-foreground backdrop-blur transition-colors hover:bg-card">
              Try Free
            </Link>
          </div>
          <div className="mt-8 flex items-center gap-4 text-xs text-muted-foreground">
            <div className="flex -space-x-2">
              {[1,2,3,4].map(i=>(<div key={i} className="h-7 w-7 rounded-full border-2 border-background bg-gradient-brand" style={{filter:`hue-rotate(${i*30}deg)`}} />))}
            </div>
            Loved by 12,000+ creators
          </div>
        </motion.div>
        <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.15 }} className="relative">
          <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-brand opacity-30 blur-2xl" />
          <div className="glass rounded-3xl p-3 animate-float">
            <BeforeAfter before={BEFORE} after={AFTER} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Logos() {
  const items = ["Shopify", "Notion", "Vercel", "Linear", "Framer", "Stripe"];
  return (
    <div className="border-y border-border/40 bg-card/20 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <p className="mb-6 text-center text-xs uppercase tracking-widest text-muted-foreground">Trusted by teams at</p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4 opacity-70">
          {items.map((l) => (
            <span key={l} className="font-display text-lg font-semibold text-muted-foreground">{l}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

const FEATURES = [
  { icon: Wand2, title: "One-Click Removal", desc: "Drop an image. Background gone. No settings, no learning curve." },
  { icon: Sparkles, title: "AI-Powered Processing", desc: "State-of-the-art models trained on millions of images." },
  { icon: ImageIcon, title: "Transparent PNG Export", desc: "Pixel-perfect cutouts ready for any background." },
  { icon: Shield, title: "Secure Uploads", desc: "Encrypted in transit and auto-deleted within 24 hours." },
  { icon: Zap, title: "Lightning Fast", desc: "Average processing under 3 seconds per image." },
  { icon: Star, title: "High Quality Results", desc: "Refined edges, accurate hair, professional output." },
];

function Features() {
  return (
    <Section eyebrow="Features" title={<>Everything you need. <span className="text-gradient">Nothing you don't.</span></>} subtitle="A focused tool designed to do one thing exceptionally well.">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((f, i) => (
          <motion.div key={f.title} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.05 }} className="glass group relative overflow-hidden rounded-2xl p-6 transition-transform hover:-translate-y-1">
            <div className="mb-4 inline-grid h-11 w-11 place-items-center rounded-xl bg-gradient-brand shadow-glow">
              <f.icon className="h-5 w-5 text-white" />
            </div>
            <h3 className="text-lg font-semibold">{f.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
            <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-brand opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-20" />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function HowItWorks() {
  const steps = [
    { n: "01", title: "Upload Image", desc: "Drag & drop PNG, JPG, or WEBP — up to 20MB." , icon: Upload},
    { n: "02", title: "AI Removes Background", desc: "Our model isolates the subject with surgical precision." , icon: Wand2},
    { n: "03", title: "Download Result", desc: "Get a clean transparent PNG ready to use anywhere." , icon: Download},
  ];
  return (
    <Section eyebrow="How it works" title={<>Three steps. <span className="text-gradient">Zero friction.</span></>}>
      <div className="grid gap-5 md:grid-cols-3">
        {steps.map((s, i) => (
          <motion.div key={s.n} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.08 }} className="glass relative rounded-2xl p-7">
            <div className="font-display text-5xl font-bold text-gradient">{s.n}</div>
            <s.icon className="absolute right-6 top-6 h-6 w-6 text-muted-foreground" />
            <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function Showcase() {
  const samples = [
    ["https://images.unsplash.com/photo-1545996124-0501ebae84d0?w=800&q=80", "https://images.unsplash.com/photo-1545996124-0501ebae84d0?w=800&q=80"],
    ["https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&q=80", "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&q=80"],
  ];
  const [idx, setIdx] = useState(0);
  return (
    <Section eyebrow="Before / After" title={<>See it <span className="text-gradient">in action.</span></>} subtitle="Drag the slider to compare original and result.">
      <div className="mx-auto max-w-4xl">
        <div className="glass rounded-3xl p-3">
          <BeforeAfter before={samples[idx][0]} after={samples[idx][1]} />
        </div>
        <div className="mt-5 flex justify-center gap-2">
          {samples.map((_, i) => (
            <button key={i} onClick={() => setIdx(i)} className={`h-2 rounded-full transition-all ${i === idx ? "w-8 bg-gradient-brand" : "w-2 bg-border"}`} aria-label={`Sample ${i+1}`} />
          ))}
        </div>
      </div>
    </Section>
  );
}

const TESTIMONIALS = [
  { name: "Ava Chen", role: "Founder, Studio Loop", quote: "SnapCut replaced our entire retouching workflow. What took an hour now takes 3 seconds." },
  { name: "Marcus Patel", role: "Shopify seller", quote: "I process 200+ product photos a week. SnapCut pays for itself before lunch." },
  { name: "Lina Vásquez", role: "Content creator", quote: "Edges are razor sharp — even on curly hair. This is the cleanest tool I've used." },
];

function Testimonials() {
  return (
    <Section eyebrow="Testimonials" title={<>Loved by <span className="text-gradient">12,000+ creators.</span></>}>
      <div className="grid gap-5 md:grid-cols-3">
        {TESTIMONIALS.map((t, i) => (
          <motion.div key={t.name} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.06 }} className="glass rounded-2xl p-6">
            <div className="mb-3 flex gap-1">{Array.from({length:5}).map((_,j)=>(<Star key={j} className="h-4 w-4 fill-cyan text-cyan" />))}</div>
            <p className="text-sm leading-relaxed text-foreground/90">"{t.quote}"</p>
            <div className="mt-5 flex items-center gap-3">
              <div className="h-9 w-9 rounded-full bg-gradient-brand" />
              <div>
                <div className="text-sm font-semibold">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

const PLANS = [
  { name: "Free", price: 0, desc: "Perfect for trying out SnapCut AI.", features: ["5 images per day", "Standard quality output", "Watermarked downloads"], cta: "Get Started", highlight: false },
  { name: "Pro", price: 499, desc: "For professionals and creators", features: ["Unlimited images", "HD quality output", "No watermark", "Faster processing"], cta: "Start Pro Trial", highlight: true },
  { name: "Enterprise", price: "Custom", desc: "For teams and large scale usage", features: ["Bulk processing", "API access", "Priority support", "Team seats"], cta: "Contact Sales", highlight: false },
];

function PricingPreview() {
  return (
    <Section id="pricing" eyebrow="Pricing" title={<>Simple, <span className="text-gradient">transparent</span> pricing.</>} subtitle="Start free. Upgrade when you need more.">
      <div className="grid gap-5 lg:grid-cols-3">
        {PLANS.map((p) => (
          <div key={p.name} className={`relative rounded-3xl p-7 ${p.highlight ? "bg-gradient-brand text-white shadow-glow" : "glass"}`}>
            {p.highlight && <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-background px-3 py-1 text-xs font-medium text-foreground">Most Popular</span>}
            <div className={`text-sm font-medium ${p.highlight ? "text-white/80" : "text-muted-foreground"}`}>{p.name}</div>
            <div className="mt-2 flex items-baseline gap-1">
              {p.name === "Free" ? (
                <span className="text-5xl font-bold tracking-tight">₹{p.price} <span className="text-xl font-normal">forever</span></span>
              ) : typeof p.price === "number" ? (
                <>
                  <span className="text-5xl font-bold tracking-tight">₹{p.price}</span>
                  <span className={`text-sm ${p.highlight ? "text-white/70" : "text-muted-foreground"}`}>/month</span>
                </>
              ) : (
                <span className="text-4xl font-bold tracking-tight">{p.price}</span>
              )}
            </div>
            <p className={`mt-1 text-sm ${p.highlight ? "text-white/80" : "text-muted-foreground"}`}>{p.desc}</p>
            <ul className="mt-6 space-y-3">
              {p.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm">
                  <Check className={`h-4 w-4 ${p.highlight ? "text-white" : "text-cyan"}`} />
                  {f}
                </li>
              ))}
            </ul>
            <Link to="/pricing" className={`mt-7 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition ${p.highlight ? "bg-white text-black hover:scale-[1.02]" : "border border-border bg-card hover:bg-secondary"}`}>{p.cta}</Link>
          </div>
        ))}
      </div>
    </Section>
  );
}

const FAQS = [
  ["How accurate is the AI?", "Our model handles complex edges — hair, fur, transparent objects — with industry-leading precision."],
  ["What file formats are supported?", "Upload PNG, JPG, JPEG, or WEBP up to 20MB. Downloads are always transparent PNGs."],
  ["Is my data safe?", "All uploads are encrypted in transit. Free-tier images auto-delete after 24 hours."],
  ["Can I cancel anytime?", "Yes — cancel from your dashboard. No questions, no fees."],
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section eyebrow="FAQ" title={<>Questions, <span className="text-gradient">answered.</span></>}>
      <div className="mx-auto max-w-2xl space-y-3">
        {FAQS.map(([q, a], i) => (
          <div key={q} className="glass overflow-hidden rounded-xl">
            <button onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left">
              <span className="font-medium">{q}</span>
              <span className={`text-xl text-muted-foreground transition-transform ${open === i ? "rotate-45" : ""}`}>+</span>
            </button>
            {open === i && <div className="px-5 pb-5 text-sm text-muted-foreground">{a}</div>}
          </div>
        ))}
      </div>
    </Section>
  );
}

function CTA() {
  return (
    <Section>
      <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-card/40 p-10 text-center sm:p-16">
        <div className="absolute inset-0 -z-10 grid-bg opacity-30" />
        <div className="absolute left-1/2 top-1/2 -z-10 h-72 w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-brand opacity-20 blur-3xl" />
        <h2 className="text-3xl font-bold sm:text-5xl">Ready to <span className="text-gradient">cut to the chase?</span></h2>
        <p className="mx-auto mt-4 max-w-md text-muted-foreground">Upload your first image — no signup needed.</p>
        <Link to="/upload" className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-7 py-4 font-medium text-white shadow-glow transition-transform hover:scale-[1.03]">
          <Upload className="h-4 w-4" /> Try SnapCut AI free
        </Link>
      </div>
    </Section>
  );
}

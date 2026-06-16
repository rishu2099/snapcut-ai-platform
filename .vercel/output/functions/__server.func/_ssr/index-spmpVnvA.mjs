import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { H as Header, F as Footer } from "./router-CnolwB0_.mjs";
import { B as BeforeAfter } from "./BeforeAfter-DjInZ1_-.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { S as Sparkles, U as Upload, A as ArrowRight, W as WandSparkles, I as Image, a as Shield, Z as Zap, b as Star, D as Download, C as Check } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function Section({ id, eyebrow, title, subtitle, children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id, className: "mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28", children: [
    (eyebrow || title || subtitle) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto mb-14 max-w-2xl text-center", children: [
      eyebrow && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex rounded-full border border-border/60 bg-card/40 px-3 py-1 text-xs font-medium text-muted-foreground", children: eyebrow }),
      title && /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-3xl font-bold tracking-tight sm:text-5xl", children: title }),
      subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-base text-muted-foreground sm:text-lg", children: subtitle })
    ] }),
    children
  ] });
}
const BEFORE = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900&q=80&auto=format&fit=crop";
const AFTER = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900&q=80&auto=format&fit=crop&bg=transparent";
const fadeUp = {
  initial: {
    opacity: 0,
    y: 24
  },
  whileInView: {
    opacity: 1,
    y: 0
  },
  viewport: {
    once: true,
    margin: "-80px"
  },
  transition: {
    duration: 0.6,
    ease: [0.22, 1, 0.36, 1]
  }
};
function HomePage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Logos, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Features, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(HowItWorks, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Showcase, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Testimonials, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PricingPreview, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FAQ, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CTA, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
function Hero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-bg opacity-40 z-0" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-1/2 top-0 -z-10 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-brand opacity-20 blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid max-w-7xl gap-12 px-4 pb-20 pt-16 sm:px-6 sm:pt-24 lg:grid-cols-2 lg:gap-8 lg:pb-32", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { ...fadeUp, className: "relative z-10 flex flex-col justify-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-border/60 bg-card/60 px-3 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5 text-cyan" }),
          "AI-powered background removal"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl", children: [
          "Remove backgrounds ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "in ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "one click." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-lg text-lg text-muted-foreground", children: "AI-powered background removal that delivers professional transparent images in seconds. Built for creators, sellers, and teams." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/upload", className: "group inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3.5 font-medium text-white shadow-glow transition-transform hover:scale-[1.03]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "h-4 w-4" }),
            "Upload Image",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/pricing", className: "inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-6 py-3.5 font-medium text-foreground backdrop-blur transition-colors hover:bg-card", children: "Try Free" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex items-center gap-4 text-xs text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex -space-x-2", children: [1, 2, 3, 4].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-7 w-7 rounded-full border-2 border-background bg-gradient-brand", style: {
            filter: `hue-rotate(${i * 30}deg)`
          } }, i)) }),
          "Loved by 12,000+ creators"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { ...fadeUp, transition: {
        ...fadeUp.transition,
        delay: 0.15
      }, className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-4 -z-10 rounded-3xl bg-gradient-brand opacity-30 blur-2xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glass rounded-3xl p-3 animate-float", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BeforeAfter, { before: BEFORE, after: AFTER }) })
      ] })
    ] })
  ] });
}
function Logos() {
  const items = ["Shopify", "Notion", "Vercel", "Linear", "Framer", "Stripe"];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-y border-border/40 bg-card/20 py-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-6 text-center text-xs uppercase tracking-widest text-muted-foreground", children: "Trusted by teams at" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap items-center justify-center gap-x-12 gap-y-4 opacity-70", children: items.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-lg font-semibold text-muted-foreground", children: l }, l)) })
  ] }) });
}
const FEATURES = [{
  icon: WandSparkles,
  title: "One-Click Removal",
  desc: "Drop an image. Background gone. No settings, no learning curve."
}, {
  icon: Sparkles,
  title: "AI-Powered Processing",
  desc: "State-of-the-art models trained on millions of images."
}, {
  icon: Image,
  title: "Transparent PNG Export",
  desc: "Pixel-perfect cutouts ready for any background."
}, {
  icon: Shield,
  title: "Secure Uploads",
  desc: "Encrypted in transit and auto-deleted within 24 hours."
}, {
  icon: Zap,
  title: "Lightning Fast",
  desc: "Average processing under 3 seconds per image."
}, {
  icon: Star,
  title: "High Quality Results",
  desc: "Refined edges, accurate hair, professional output."
}];
function Features() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { eyebrow: "Features", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    "Everything you need. ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "Nothing you don't." })
  ] }), subtitle: "A focused tool designed to do one thing exceptionally well.", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3", children: FEATURES.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { ...fadeUp, transition: {
    ...fadeUp.transition,
    delay: i * 0.05
  }, className: "glass group relative overflow-hidden rounded-2xl p-6 transition-transform hover:-translate-y-1", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4 inline-grid h-11 w-11 place-items-center rounded-xl bg-gradient-brand shadow-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(f.icon, { className: "h-5 w-5 text-white" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold", children: f.title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: f.desc }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-brand opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-20" })
  ] }, f.title)) }) });
}
function HowItWorks() {
  const steps = [{
    n: "01",
    title: "Upload Image",
    desc: "Drag & drop PNG, JPG, or WEBP — up to 20MB.",
    icon: Upload
  }, {
    n: "02",
    title: "AI Removes Background",
    desc: "Our model isolates the subject with surgical precision.",
    icon: WandSparkles
  }, {
    n: "03",
    title: "Download Result",
    desc: "Get a clean transparent PNG ready to use anywhere.",
    icon: Download
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { eyebrow: "How it works", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    "Three steps. ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "Zero friction." })
  ] }), children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-5 md:grid-cols-3", children: steps.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { ...fadeUp, transition: {
    ...fadeUp.transition,
    delay: i * 0.08
  }, className: "glass relative rounded-2xl p-7", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-5xl font-bold text-gradient", children: s.n }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "absolute right-6 top-6 h-6 w-6 text-muted-foreground" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 text-xl font-semibold", children: s.title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: s.desc })
  ] }, s.n)) }) });
}
function Showcase() {
  const samples = [["https://images.unsplash.com/photo-1545996124-0501ebae84d0?w=800&q=80", "https://images.unsplash.com/photo-1545996124-0501ebae84d0?w=800&q=80"], ["https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&q=80", "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&q=80"]];
  const [idx, setIdx] = reactExports.useState(0);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { eyebrow: "Before / After", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    "See it ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "in action." })
  ] }), subtitle: "Drag the slider to compare original and result.", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glass rounded-3xl p-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BeforeAfter, { before: samples[idx][0], after: samples[idx][1] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 flex justify-center gap-2", children: samples.map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setIdx(i), className: `h-2 rounded-full transition-all ${i === idx ? "w-8 bg-gradient-brand" : "w-2 bg-border"}`, "aria-label": `Sample ${i + 1}` }, i)) })
  ] }) });
}
const TESTIMONIALS = [{
  name: "Ava Chen",
  role: "Founder, Studio Loop",
  quote: "SnapCut replaced our entire retouching workflow. What took an hour now takes 3 seconds."
}, {
  name: "Marcus Patel",
  role: "Shopify seller",
  quote: "I process 200+ product photos a week. SnapCut pays for itself before lunch."
}, {
  name: "Lina Vásquez",
  role: "Content creator",
  quote: "Edges are razor sharp — even on curly hair. This is the cleanest tool I've used."
}];
function Testimonials() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { eyebrow: "Testimonials", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    "Loved by ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "12,000+ creators." })
  ] }), children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-5 md:grid-cols-3", children: TESTIMONIALS.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { ...fadeUp, transition: {
    ...fadeUp.transition,
    delay: i * 0.06
  }, className: "glass rounded-2xl p-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-3 flex gap-1", children: Array.from({
      length: 5
    }).map((_, j) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-4 w-4 fill-cyan text-cyan" }, j)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm leading-relaxed text-foreground/90", children: [
      '"',
      t.quote,
      '"'
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-9 w-9 rounded-full bg-gradient-brand" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold", children: t.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: t.role })
      ] })
    ] })
  ] }, t.name)) }) });
}
const PLANS = [{
  name: "Free",
  price: "$0",
  desc: "Try it out",
  features: ["5 removals / day", "Standard quality", "Watermarked download"],
  cta: "Start free",
  highlight: false
}, {
  name: "Pro",
  price: "$12",
  desc: "For creators",
  features: ["Unlimited removals", "HD downloads", "No watermark", "Faster processing"],
  cta: "Go Pro",
  highlight: true
}, {
  name: "Business",
  price: "$49",
  desc: "For teams",
  features: ["Bulk processing", "API access", "Priority support", "Team seats"],
  cta: "Contact sales",
  highlight: false
}];
function PricingPreview() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { id: "pricing", eyebrow: "Pricing", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    "Simple, ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "transparent" }),
    " pricing."
  ] }), subtitle: "Start free. Upgrade when you need more.", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-5 lg:grid-cols-3", children: PLANS.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `relative rounded-3xl p-7 ${p.highlight ? "bg-gradient-brand text-white shadow-glow" : "glass"}`, children: [
    p.highlight && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-background px-3 py-1 text-xs font-medium text-foreground", children: "Most Popular" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `text-sm font-medium ${p.highlight ? "text-white/80" : "text-muted-foreground"}`, children: p.name }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex items-baseline gap-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-5xl font-bold tracking-tight", children: p.price }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-sm ${p.highlight ? "text-white/70" : "text-muted-foreground"}`, children: "/mo" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `mt-1 text-sm ${p.highlight ? "text-white/80" : "text-muted-foreground"}`, children: p.desc }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 space-y-3", children: p.features.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2 text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: `h-4 w-4 ${p.highlight ? "text-white" : "text-cyan"}` }),
      f
    ] }, f)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/pricing", className: `mt-7 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition ${p.highlight ? "bg-white text-foreground hover:scale-[1.02]" : "border border-border bg-card hover:bg-secondary"}`, children: p.cta })
  ] }, p.name)) }) });
}
const FAQS = [["How accurate is the AI?", "Our model handles complex edges — hair, fur, transparent objects — with industry-leading precision."], ["What file formats are supported?", "Upload PNG, JPG, JPEG, or WEBP up to 20MB. Downloads are always transparent PNGs."], ["Is my data safe?", "All uploads are encrypted in transit. Free-tier images auto-delete after 24 hours."], ["Can I cancel anytime?", "Yes — cancel from your dashboard. No questions, no fees."]];
function FAQ() {
  const [open, setOpen] = reactExports.useState(0);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { eyebrow: "FAQ", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    "Questions, ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "answered." })
  ] }), children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-2xl space-y-3", children: FAQS.map(([q, a], i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass overflow-hidden rounded-xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setOpen(open === i ? null : i), className: "flex w-full items-center justify-between gap-4 px-5 py-4 text-left", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: q }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-xl text-muted-foreground transition-transform ${open === i ? "rotate-45" : ""}`, children: "+" })
    ] }),
    open === i && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-5 pb-5 text-sm text-muted-foreground", children: a })
  ] }, q)) }) });
}
function CTA() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-3xl border border-border/60 bg-card/40 p-10 text-center sm:p-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 -z-10 grid-bg opacity-30" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-1/2 top-1/2 -z-10 h-72 w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-brand opacity-20 blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-3xl font-bold sm:text-5xl", children: [
      "Ready to ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "cut to the chase?" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-4 max-w-md text-muted-foreground", children: "Upload your first image — no signup needed." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/upload", className: "mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-7 py-4 font-medium text-white shadow-glow transition-transform hover:scale-[1.03]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "h-4 w-4" }),
      " Try SnapCut AI free"
    ] })
  ] }) });
}
export {
  HomePage as component
};

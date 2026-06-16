import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { H as Header, F as Footer } from "./router-CnolwB0_.mjs";
import { C as Check } from "../_libs/lucide-react.mjs";
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
const PLANS = (yearly) => [{
  name: "Free",
  price: 0,
  desc: "Try it out",
  features: ["5 removals / day", "Standard quality", "Watermarked downloads"],
  cta: "Get started",
  highlight: false
}, {
  name: "Pro",
  price: yearly ? 9 : 12,
  desc: "For creators",
  features: ["Unlimited removals", "HD downloads", "No watermark", "Faster processing", "Priority queue"],
  cta: "Go Pro",
  highlight: true
}, {
  name: "Business",
  price: yearly ? 39 : 49,
  desc: "For teams",
  features: ["Bulk processing", "API access", "Priority support", "Team seats", "SLA"],
  cta: "Contact sales",
  highlight: false
}];
function PricingPage() {
  const [yearly, setYearly] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-4 py-20 sm:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-4xl font-bold tracking-tight sm:text-6xl", children: [
          "Plans for ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "every creator" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "Cancel anytime. Powered by Razorpay." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 inline-flex rounded-full border border-border bg-card/60 p-1 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setYearly(false), className: `rounded-full px-5 py-2 ${!yearly ? "bg-gradient-brand text-white" : "text-muted-foreground"}`, children: "Monthly" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setYearly(true), className: `rounded-full px-5 py-2 ${yearly ? "bg-gradient-brand text-white" : "text-muted-foreground"}`, children: "Yearly · save 25%" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid gap-5 lg:grid-cols-3", children: PLANS(yearly).map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `relative rounded-3xl p-8 ${p.highlight ? "bg-gradient-brand text-white shadow-glow" : "glass"}`, children: [
        p.highlight && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-background px-3 py-1 text-xs font-medium text-foreground", children: "Most Popular" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `text-sm font-medium ${p.highlight ? "text-white/80" : "text-muted-foreground"}`, children: p.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex items-baseline gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-5xl font-bold", children: [
            "$",
            p.price
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-sm ${p.highlight ? "text-white/70" : "text-muted-foreground"}`, children: "/mo" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `mt-1 text-sm ${p.highlight ? "text-white/80" : "text-muted-foreground"}`, children: p.desc }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 space-y-3", children: p.features.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: `h-4 w-4 ${p.highlight ? "text-white" : "text-cyan"}` }),
          " ",
          f
        ] }, f)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/signup", className: `mt-8 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-medium ${p.highlight ? "bg-white text-foreground" : "border border-border bg-card hover:bg-secondary"}`, children: p.cta })
      ] }, p.name)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  PricingPage as component
};

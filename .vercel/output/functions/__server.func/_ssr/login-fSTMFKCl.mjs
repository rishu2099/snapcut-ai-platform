import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { H as Header, a as Logo, F as Footer } from "./router-CnolwB0_.mjs";
import { S as Sparkles } from "../_libs/lucide-react.mjs";
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
function Login() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto flex max-w-md flex-col items-center px-4 py-20 sm:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass w-full rounded-3xl p-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Logo, { withText: false, size: 48 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-4 text-2xl font-bold", children: "Welcome back" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Sign in to your SnapCut AI account" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "mt-8 flex w-full items-center justify-center gap-3 rounded-full border border-border bg-card px-5 py-3 text-sm font-medium hover:bg-secondary", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "h-4 w-4", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { fill: "#fff", d: "M21.35 11.1H12v3.2h5.35c-.23 1.5-1.6 4.4-5.35 4.4-3.22 0-5.85-2.67-5.85-5.95 0-3.28 2.63-5.95 5.85-5.95 1.83 0 3.06.78 3.76 1.45l2.57-2.47C16.78 4.3 14.6 3.4 12 3.4 6.92 3.4 2.8 7.5 2.8 12.55s4.12 9.15 9.2 9.15c5.3 0 8.82-3.72 8.82-8.97 0-.6-.06-1.06-.17-1.63z" }) }),
        "Continue with Google"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "my-5 flex items-center gap-3 text-xs text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px flex-1 bg-border" }),
        " OR ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px flex-1 bg-border" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "space-y-3", onSubmit: (e) => e.preventDefault(), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", placeholder: "you@email.com", className: "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-cyan" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "password", placeholder: "Password", className: "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-cyan" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "w-full rounded-full bg-gradient-brand px-5 py-3 text-sm font-medium text-white shadow-glow", children: "Sign in" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "mt-3 flex w-full items-center justify-center gap-2 text-sm text-muted-foreground hover:text-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5" }),
        " Send magic link"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-6 text-center text-sm text-muted-foreground", children: [
        "New here? ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/signup", className: "text-cyan hover:underline", children: "Create account" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  Login as component
};

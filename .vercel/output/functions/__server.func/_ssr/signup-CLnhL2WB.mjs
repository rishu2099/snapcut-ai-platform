import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { H as Header, a as Logo, F as Footer } from "./router-CnolwB0_.mjs";
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
import "../_libs/lucide-react.mjs";
function Signup() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto flex max-w-md flex-col items-center px-4 py-20 sm:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass w-full rounded-3xl p-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Logo, { withText: false, size: 48 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-4 text-2xl font-bold", children: "Create your account" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Start removing backgrounds free" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "mt-8 space-y-3", onSubmit: (e) => e.preventDefault(), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { placeholder: "Full name", className: "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-cyan" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", placeholder: "you@email.com", className: "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-cyan" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "password", placeholder: "Create password", className: "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-cyan" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "w-full rounded-full bg-gradient-brand px-5 py-3 text-sm font-medium text-white shadow-glow", children: "Create account" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-6 text-center text-sm text-muted-foreground", children: [
        "Have an account? ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/login", className: "text-cyan hover:underline", children: "Sign in" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  Signup as component
};

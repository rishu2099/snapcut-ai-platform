import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { H as Header, F as Footer } from "./router-CnolwB0_.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tanstack__react-router.mjs";
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
import "../_libs/lucide-react.mjs";
function Legal({
  title
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl px-4 py-20 sm:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl font-bold tracking-tight sm:text-5xl", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "prose prose-invert mt-8 max-w-none text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Last updated: June 11, 2026" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "This page describes how SnapCut AI handles your data, your rights, and our responsibilities. All uploads are encrypted in transit and auto-deleted within 24 hours for free-tier users." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "For inquiries, contact privacy@snapcut.ai." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
const SplitComponent = () => /* @__PURE__ */ jsxRuntimeExports.jsx(Legal, { title: "Privacy Policy" });
export {
  Legal,
  SplitComponent as component
};

import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { b as Route$7, H as Header, F as Footer } from "./router-CnolwB0_.mjs";
import { B as BeforeAfter } from "./BeforeAfter-DjInZ1_-.mjs";
import { l as loadResultSession } from "./result-session-b5zxEERT.mjs";
import { S as Sparkles, D as Download, U as Upload } from "../_libs/lucide-react.mjs";
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
function ResultPage() {
  const {
    imageUrl,
    originalImageUrl: searchOriginal
  } = Route$7.useSearch();
  const [originalImageUrl, setOriginalImageUrl] = reactExports.useState(searchOriginal ?? imageUrl);
  reactExports.useEffect(() => {
    if (searchOriginal) return;
    const stored = loadResultSession();
    if (stored?.originalImageUrl) {
      setOriginalImageUrl(stored.originalImageUrl);
    }
  }, [searchOriginal]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-8 flex items-center justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3 w-3 text-cyan" }),
          " Done in 2.4s"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-3 text-4xl font-bold tracking-tight sm:text-5xl", children: [
          "Your ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "cutout" }),
          " is ready"
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glass rounded-3xl p-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BeforeAfter, { before: originalImageUrl, after: imageUrl }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 grid gap-3 sm:grid-cols-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: async () => {
          try {
            const response = await fetch(imageUrl);
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = "processed_image.png";
            document.body.appendChild(a);
            a.click();
            a.remove();
            window.URL.revokeObjectURL(url);
          } catch (error) {
            console.error("Error downloading image:", error);
            alert("Failed to download image. Please try again.");
          }
        }, className: "inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brand px-6 py-3.5 font-medium text-white shadow-glow", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "h-4 w-4" }),
          " Download PNG"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/upload", className: "inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 font-medium", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "h-4 w-4" }),
          " New Image"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/pricing", className: "inline-flex items-center justify-center gap-2 rounded-full border border-cyan/40 bg-card/60 px-6 py-3.5 font-medium text-cyan", children: "Upgrade for HD" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  ResultPage as component
};

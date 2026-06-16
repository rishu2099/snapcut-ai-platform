import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { R as Route$a, H as Header, F as Footer } from "./router-CnolwB0_.mjs";
import { s as saveResultSession } from "./result-session-b5zxEERT.mjs";
import { U as Upload, L as LoaderCircle, I as Image } from "../_libs/lucide-react.mjs";
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
function UploadPage() {
  const [file, setFile] = reactExports.useState(null);
  const [preview, setPreview] = reactExports.useState(null);
  const [processing, setProcessing] = reactExports.useState(false);
  const [drag, setDrag] = reactExports.useState(false);
  const navigate = Route$a.useNavigate();
  const handleFile = reactExports.useCallback((f) => {
    if (!/^image\/(png|jpe?g|webp)$/.test(f.type)) return alert("Use PNG, JPG, or WEBP");
    if (f.size > 20 * 1024 * 1024) return alert("Max 20MB");
    setFile(f);
    setPreview(URL.createObjectURL(f));
  }, []);
  const process = async () => {
    if (!file) return;
    setProcessing(true);
    const formData = new FormData();
    formData.append("image", file);
    try {
      const response = await fetch("https://rishupvt22.app.n8n.cloud/webhook/remove-backgroung", {
        method: "POST",
        body: formData
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      const imageUrl = result.url;
      if (!imageUrl) {
        throw new Error("Webhook response did not contain an image URL.");
      }
      saveResultSession({
        imageUrl,
        originalImageUrl: preview ?? void 0
      });
      const history = JSON.parse(localStorage.getItem("imageHistory") || "[]");
      history.push({
        processedUrl: imageUrl,
        timestamp: (/* @__PURE__ */ new Date()).toISOString()
      });
      localStorage.setItem("imageHistory", JSON.stringify(history));
      navigate({
        to: "/result",
        search: {
          imageUrl
        }
      });
    } catch (error) {
      console.error("Error sending image to webhook:", error);
      alert("Failed to process image. Please try again.");
      setProcessing(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen", onPaste: (e) => {
    e.preventDefault();
    const items = e.clipboardData?.items;
    if (items) {
      for (let i = 0; i < items.length; i++) {
        if (items[i].type.indexOf("image") !== -1) {
          const file2 = items[i].getAsFile();
          if (file2) {
            handleFile(file2);
            break;
          }
        }
      }
    }
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-4xl font-bold tracking-tight sm:text-5xl", children: [
        "Upload your ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "image" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: "PNG, JPG, or WEBP. Up to 20MB." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { onDragOver: (e) => {
        e.preventDefault();
        setDrag(true);
      }, onDragLeave: () => setDrag(false), onDrop: (e) => {
        e.preventDefault();
        setDrag(false);
        const f = e.dataTransfer.files[0];
        if (f) handleFile(f);
      }, className: `mt-8 block cursor-pointer rounded-3xl border-2 border-dashed p-10 text-center transition-all ${drag ? "border-cyan bg-card/60" : "border-border bg-card/30 hover:border-cyan/60"}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "file", accept: "image/png,image/jpeg,image/webp", className: "hidden", onChange: (e) => e.target.files?.[0] && handleFile(e.target.files[0]) }),
        preview ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: preview, alt: "Preview", className: "mx-auto max-h-80 rounded-xl" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: file?.name })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-gradient-brand shadow-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "h-7 w-7 text-white" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold", children: "Drag & drop, or click to browse" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "PNG, JPG, WEBP · max 20MB" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { disabled: !file || processing, onClick: process, className: "inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-brand px-6 py-3.5 font-medium text-white shadow-glow disabled:opacity-50", children: processing ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 animate-spin" }),
          " Processing…"
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Image, { className: "h-4 w-4" }),
          " Remove Background"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "rounded-full border border-border bg-card px-6 py-3.5 font-medium", children: "Cancel" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  UploadPage as component
};

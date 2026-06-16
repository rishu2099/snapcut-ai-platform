import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { H as Header, F as Footer } from "./router-CnolwB0_.mjs";
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
function HistoryPage() {
  const [imageHistory, setImageHistory] = reactExports.useState([]);
  reactExports.useEffect(() => {
    const storedHistory = localStorage.getItem("imageHistory");
    if (storedHistory) {
      setImageHistory(JSON.parse(storedHistory));
    }
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-4xl font-bold tracking-tight sm:text-5xl", children: [
        "Your ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "History" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: "View your previously processed images." }),
      imageHistory.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 text-center text-muted-foreground", children: "No images in history yet. Upload one to get started!" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3", children: imageHistory.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-3xl p-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/result", search: {
          imageUrl: item.processedUrl
        }, children: item.processedUrl ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: item.processedUrl, alt: `Processed image from ${new Date(item.timestamp).toLocaleString()}`, className: "w-full h-48 object-cover rounded-2xl" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-48 bg-gray-700 rounded-2xl flex items-center justify-center text-muted-foreground", children: "Image Unavailable" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: new Date(item.timestamp).toLocaleString() }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: async () => {
          try {
            const response = await fetch(item.processedUrl);
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = `processed_image_${index}.png`;
            document.body.appendChild(a);
            a.click();
            a.remove();
            window.URL.revokeObjectURL(url);
          } catch (error) {
            console.error("Error downloading image:", error);
            alert("Failed to download image. Please try again.");
          }
        }, className: "mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brand px-4 py-2 text-sm font-medium text-white shadow-glow", children: "Download" })
      ] }, index)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  HistoryPage as component
};

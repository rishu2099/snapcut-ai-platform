import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { Q as redirect } from "../_libs/tanstack__router-core.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { X, M as Menu } from "../_libs/lucide-react.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
const appCss = "/assets/styles-xxLHAvPF.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$b = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "SnapCut AI — Remove Backgrounds. Instantly." },
      { name: "description", content: "AI-powered background removal that delivers professional transparent PNGs in seconds." },
      { name: "author", content: "SnapCut AI" },
      { property: "og:title", content: "SnapCut AI — Remove Backgrounds. Instantly." },
      { property: "og:description", content: "AI-powered background removal that delivers professional transparent PNGs in seconds." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" }
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$b.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) });
}
const $$splitComponentImporter$a = () => import("./upload-CKWpvMy_.mjs");
const Route$a = createFileRoute("/upload")({
  head: () => ({
    meta: [{
      title: "Upload — SnapCut AI"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$a, "component")
});
const $$splitComponentImporter$9 = () => import("./terms-CIquqzMp.mjs");
const Route$9 = createFileRoute("/terms")({
  head: () => ({
    meta: [{
      title: "Terms of Service — SnapCut AI"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const $$splitComponentImporter$8 = () => import("./signup-CLnhL2WB.mjs");
const Route$8 = createFileRoute("/signup")({
  head: () => ({
    meta: [{
      title: "Sign up — SnapCut AI"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./result-CAt0PkWp.mjs");
const Route$7 = createFileRoute("/result")({
  head: () => ({
    meta: [{
      title: "Result — SnapCut AI"
    }]
  }),
  validateSearch: (search) => ({
    imageUrl: typeof search.imageUrl === "string" ? search.imageUrl : void 0,
    originalImageUrl: typeof search.originalImageUrl === "string" && !search.originalImageUrl.startsWith("blob:") ? search.originalImageUrl : void 0
  }),
  beforeLoad: ({
    search
  }) => {
    if (!search.imageUrl) {
      throw redirect({
        to: "/upload"
      });
    }
  },
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const logoUrl = "/snapcut-logo.png";
function Logo({ withText = true, size = 32 }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: logoUrl,
        alt: "SnapCut AI",
        width: size,
        height: size,
        className: "rounded-lg",
        style: { width: size, height: size }
      }
    ),
    withText && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display text-lg font-bold tracking-tight", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "SnapCut" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: " AI" })
    ] })
  ] });
}
const nav = [
  { to: "/", label: "Home" },
  { to: "/upload", label: "Upload" },
  { to: "/pricing", label: "Pricing" },
  { to: "/dashboard", label: "Dashboard" },
  { to: "/history", label: "History" }
];
function Header() {
  const [open, setOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "sticky top-0 z-[999] border-b border-border/60 bg-background/70 backdrop-blur-xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Logo, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden items-center gap-8 md:flex", children: nav.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: n.to, className: "text-sm text-muted-foreground transition-colors hover:text-foreground", activeProps: { className: "text-foreground" }, children: n.label }, n.to)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden items-center gap-2 md:flex", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/login", className: "rounded-full px-4 py-2 text-sm text-muted-foreground hover:text-foreground", children: "Sign in" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/upload", className: "rounded-full bg-gradient-brand px-4 py-2 text-sm font-medium text-white shadow-glow transition-transform hover:scale-[1.03]", children: "Try Free" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "md:hidden", onClick: () => setOpen(!open), "aria-label": "Menu", children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-6 w-6" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-6 w-6" }) })
    ] }),
    open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-border/60 bg-background/95 px-4 py-4 md:hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3", children: [
      nav.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: n.to, onClick: () => setOpen(false), className: "text-sm text-muted-foreground", children: n.label }, n.to)),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/login", onClick: () => setOpen(false), className: "text-sm text-muted-foreground", children: "Sign in" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/upload", onClick: () => setOpen(false), className: "mt-2 rounded-full bg-gradient-brand px-4 py-2 text-center text-sm font-medium text-white", children: "Try Free" })
    ] }) })
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "mt-32 border-t border-border/60", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Logo, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm text-muted-foreground", children: "Remove backgrounds. Instantly. Powered by AI." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FooterCol, { title: "Product", links: [["Upload", "/upload"], ["Pricing", "/pricing"], ["Dashboard", "/dashboard"]] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FooterCol, { title: "Account", links: [["Sign in", "/login"], ["Sign up", "/signup"]] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FooterCol, { title: "Legal", links: [["Privacy", "/privacy"], ["Terms", "/terms"], ["Cookies", "/cookies"]] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border/60 px-4 py-6 text-center text-xs text-muted-foreground sm:px-6", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " SnapCut AI. All rights reserved."
    ] })
  ] });
}
function FooterCol({ title, links }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "mb-3 text-sm font-semibold", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: links.map(([label, to]) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to, className: "text-sm text-muted-foreground hover:text-foreground", children: label }) }, to)) })
  ] });
}
const $$splitComponentImporter$6 = () => import("./privacy-D2xEPKcc.mjs");
const Route$6 = createFileRoute("/privacy")({
  head: () => ({
    meta: [{
      title: "Privacy Policy — SnapCut AI"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
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
const $$splitComponentImporter$5 = () => import("./pricing-BooJMdC-.mjs");
const Route$5 = createFileRoute("/pricing")({
  head: () => ({
    meta: [{
      title: "Pricing — SnapCut AI"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./login-fSTMFKCl.mjs");
const Route$4 = createFileRoute("/login")({
  head: () => ({
    meta: [{
      title: "Sign in — SnapCut AI"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./history-DHJ1QtGX.mjs");
const Route$3 = createFileRoute("/history")({
  head: () => ({
    meta: [{
      title: "History — SnapCut AI"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./dashboard-BWiRORcx.mjs");
const Route$2 = createFileRoute("/dashboard")({
  head: () => ({
    meta: [{
      title: "Dashboard — SnapCut AI"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./cookies-KSGzHYdc.mjs");
const Route$1 = createFileRoute("/cookies")({
  head: () => ({
    meta: [{
      title: "Cookie Policy — SnapCut AI"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-spmpVnvA.mjs");
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "SnapCut AI — Remove Backgrounds. Instantly."
    }, {
      name: "description",
      content: "One-click AI background removal. Get pro transparent PNGs in seconds."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const UploadRoute = Route$a.update({
  id: "/upload",
  path: "/upload",
  getParentRoute: () => Route$b
});
const TermsRoute = Route$9.update({
  id: "/terms",
  path: "/terms",
  getParentRoute: () => Route$b
});
const SignupRoute = Route$8.update({
  id: "/signup",
  path: "/signup",
  getParentRoute: () => Route$b
});
const ResultRoute = Route$7.update({
  id: "/result",
  path: "/result",
  getParentRoute: () => Route$b
});
const PrivacyRoute = Route$6.update({
  id: "/privacy",
  path: "/privacy",
  getParentRoute: () => Route$b
});
const PricingRoute = Route$5.update({
  id: "/pricing",
  path: "/pricing",
  getParentRoute: () => Route$b
});
const LoginRoute = Route$4.update({
  id: "/login",
  path: "/login",
  getParentRoute: () => Route$b
});
const HistoryRoute = Route$3.update({
  id: "/history",
  path: "/history",
  getParentRoute: () => Route$b
});
const DashboardRoute = Route$2.update({
  id: "/dashboard",
  path: "/dashboard",
  getParentRoute: () => Route$b
});
const CookiesRoute = Route$1.update({
  id: "/cookies",
  path: "/cookies",
  getParentRoute: () => Route$b
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$b
});
const rootRouteChildren = {
  IndexRoute,
  CookiesRoute,
  DashboardRoute,
  HistoryRoute,
  LoginRoute,
  PricingRoute,
  PrivacyRoute,
  ResultRoute,
  SignupRoute,
  TermsRoute,
  UploadRoute
};
const routeTree = Route$b._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Footer as F,
  Header as H,
  Legal as L,
  Route$a as R,
  Logo as a,
  Route$7 as b,
  router as r
};

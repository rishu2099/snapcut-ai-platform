import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/upload", label: "Upload" },
  { to: "/pricing", label: "Pricing" },
  { to: "/dashboard", label: "Dashboard" },
  { to: "/history", label: "History" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-[999] border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="shrink-0"><Logo /></Link>
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} className="text-sm text-muted-foreground transition-colors hover:text-foreground" activeProps={{ className: "text-foreground" }}>
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          <Link to="/login" className="rounded-full px-4 py-2 text-sm text-muted-foreground hover:text-foreground">Sign in</Link>
          <Link to="/upload" className="rounded-full bg-gradient-brand px-4 py-2 text-sm font-medium text-white shadow-glow transition-transform hover:scale-[1.03]">
            Try Free
          </Link>
        </div>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border/60 bg-background/95 px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="text-sm text-muted-foreground">{n.label}</Link>
            ))}
            <Link to="/login" onClick={() => setOpen(false)} className="text-sm text-muted-foreground">Sign in</Link>
            <Link to="/upload" onClick={() => setOpen(false)} className="mt-2 rounded-full bg-gradient-brand px-4 py-2 text-center text-sm font-medium text-white">Try Free</Link>
          </div>
        </div>
      )}
    </header>
  );
}

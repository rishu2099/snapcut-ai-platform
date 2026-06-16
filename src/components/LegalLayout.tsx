import { Link, useLocation } from "@tanstack/react-router";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { FileText, Shield, Undo2, Truck, Phone } from "lucide-react";
import { ReactNode } from "react";

const SIDEBAR_LINKS = [
  { name: "Privacy Policy", path: "/privacy", icon: Shield },
  { name: "Terms of Service", path: "/terms", icon: FileText },
  { name: "Refund & Cancellation", path: "/refund", icon: Undo2 },
  { name: "Shipping & Delivery", path: "/shipping", icon: Truck },
  { name: "Contact Us", path: "/contact", icon: Phone },
];

export function LegalLayout({ title, children, lastUpdated }: { title: string; children: ReactNode; lastUpdated?: string }) {
  const location = useLocation();

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[280px_1fr]">
          {/* Sidebar */}
          <aside className="space-y-1">
            <h3 className="mb-6 px-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Legal & Support</h3>
            <nav className="flex flex-col space-y-1">
              {SIDEBAR_LINKS.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-gradient-brand text-white shadow-glow"
                        : "text-muted-foreground hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <link.icon className="h-4 w-4" />
                    {link.name}
                  </Link>
                );
              })}
            </nav>
          </aside>

          {/* Main Content */}
          <main>
            <div className="glass rounded-3xl p-8 sm:p-12">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl text-white">{title}</h1>
              {lastUpdated && (
                <p className="mt-2 text-sm text-muted-foreground">Last updated: {lastUpdated}</p>
              )}
              
              <div className="prose prose-invert mt-10 max-w-none text-muted-foreground prose-headings:text-white prose-a:text-cyan hover:prose-a:text-cyan/80 prose-strong:text-white">
                {children}
              </div>
            </div>
          </main>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

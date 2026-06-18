import { Link, useLocation } from "@tanstack/react-router";
import { ReactNode } from "react";
import { useAuth } from "@/hooks/use-auth";
import { 
  LayoutDashboard, 
  Upload, 
  History, 
  CreditCard, 
  Key, 
  Settings,
  Sparkles
} from "lucide-react";

const SIDEBAR_LINKS = [
  { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
  { name: "Upload", path: "/upload", icon: Upload },
  { name: "History", path: "/history", icon: History },
  { name: "Billing", path: "/pricing", icon: CreditCard },
  { name: "API Keys", path: "/api", icon: Key },
  { name: "Settings", path: "/settings", icon: Settings },
];

export function SidebarLayout({ children }: { children: ReactNode }) {
  const location = useLocation();
  const { user } = useAuth();


  return (
    <div className="flex min-h-screen bg-[#0a0c10] text-foreground font-sans">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 z-40 flex h-screen w-64 flex-col border-r border-border/40 bg-[#0a0c10] px-4 py-6">
        {/* Logo */}
        <div className="flex items-center gap-3 px-2 mb-8">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-brand">
            <Sparkles className="h-4 w-4 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">
            SnapCut <span className="text-gradient">AI</span>
          </span>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1">
          {SIDEBAR_LINKS.map((link) => {
            const isActive = location.pathname === link.path || location.pathname.startsWith(`${link.path}/`);
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-[#1a1d24] text-white shadow-sm"
                    : "text-muted-foreground hover:bg-[#1a1d24]/50 hover:text-white"
                }`}
              >
                <link.icon className={`h-4 w-4 ${isActive ? "text-cyan" : ""}`} />
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* User Profile / Plan Widget */}
        {user ? (
          <Link to="/settings" className="mt-auto block rounded-2xl border border-border/40 bg-[#12141a] p-4 transition-colors hover:bg-[#1a1d24]">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 font-bold">
                {user.user_metadata?.full_name?.charAt(0)?.toUpperCase() || user.email?.charAt(0)?.toUpperCase() || 'U'}
              </div>
              <div className="overflow-hidden">
                <div className="text-sm font-semibold text-white truncate">{user.user_metadata?.full_name || 'User'}</div>
                <div className="text-xs text-muted-foreground truncate">{user.email}</div>
              </div>
            </div>
          </Link>
        ) : (
          <div className="mt-auto rounded-2xl border border-border/40 bg-[#12141a] p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                <Sparkles className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-semibold text-white">Free Plan</div>
                <div className="text-xs text-muted-foreground">3 credits left</div>
              </div>
            </div>
            <Link
              to="/pricing"
              className="flex w-full items-center justify-center rounded-xl bg-gradient-brand px-4 py-2.5 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-[1.02]"
            >
              Upgrade to Pro
            </Link>
          </div>
        )}
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 pl-64">
        {children}
      </main>
    </div>
  );
}

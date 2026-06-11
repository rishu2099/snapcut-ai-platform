import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-border/60">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-1">
          <Logo />
          <p className="mt-4 text-sm text-muted-foreground">Remove backgrounds. Instantly. Powered by AI.</p>
        </div>
        <FooterCol title="Product" links={[["Upload", "/upload"], ["Pricing", "/pricing"], ["Dashboard", "/dashboard"]]} />
        <FooterCol title="Account" links={[["Sign in", "/login"], ["Sign up", "/signup"]]} />
        <FooterCol title="Legal" links={[["Privacy", "/privacy"], ["Terms", "/terms"], ["Cookies", "/cookies"]]} />
      </div>
      <div className="border-t border-border/60 px-4 py-6 text-center text-xs text-muted-foreground sm:px-6">
        © {new Date().getFullYear()} SnapCut AI. All rights reserved.
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div>
      <h4 className="mb-3 text-sm font-semibold">{title}</h4>
      <ul className="space-y-2">
        {links.map(([label, to]) => (
          <li key={to}><Link to={to} className="text-sm text-muted-foreground hover:text-foreground">{label}</Link></li>
        ))}
      </ul>
    </div>
  );
}

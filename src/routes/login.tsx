import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Logo } from "@/components/Logo";
import { Mail, Sparkles } from "lucide-react";

export const Route = createFileRoute("/login")({
  head: () => ({ meta: [{ title: "Sign in — SnapCut AI" }] }),
  component: Login,
});

function Login() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="mx-auto flex max-w-md flex-col items-center px-4 py-20 sm:px-6">
        <div className="glass w-full rounded-3xl p-8">
          <div className="flex flex-col items-center text-center">
            <Logo withText={false} size={48} />
            <h1 className="mt-4 text-2xl font-bold">Welcome back</h1>
            <p className="mt-1 text-sm text-muted-foreground">Sign in to your SnapCut AI account</p>
          </div>
          <button className="mt-8 flex w-full items-center justify-center gap-3 rounded-full border border-border bg-card px-5 py-3 text-sm font-medium hover:bg-secondary">
            <svg className="h-4 w-4" viewBox="0 0 24 24"><path fill="#fff" d="M21.35 11.1H12v3.2h5.35c-.23 1.5-1.6 4.4-5.35 4.4-3.22 0-5.85-2.67-5.85-5.95 0-3.28 2.63-5.95 5.85-5.95 1.83 0 3.06.78 3.76 1.45l2.57-2.47C16.78 4.3 14.6 3.4 12 3.4 6.92 3.4 2.8 7.5 2.8 12.55s4.12 9.15 9.2 9.15c5.3 0 8.82-3.72 8.82-8.97 0-.6-.06-1.06-.17-1.63z"/></svg>
            Continue with Google
          </button>
          <div className="my-5 flex items-center gap-3 text-xs text-muted-foreground"><div className="h-px flex-1 bg-border" /> OR <div className="h-px flex-1 bg-border" /></div>
          <form className="space-y-3" onSubmit={(e)=>e.preventDefault()}>
            <input type="email" placeholder="you@email.com" className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-cyan" />
            <input type="password" placeholder="Password" className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-cyan" />
            <button className="w-full rounded-full bg-gradient-brand px-5 py-3 text-sm font-medium text-white shadow-glow">Sign in</button>
          </form>
          <button className="mt-3 flex w-full items-center justify-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            <Sparkles className="h-3.5 w-3.5" /> Send magic link
          </button>
          <p className="mt-6 text-center text-sm text-muted-foreground">
            New here? <Link to="/signup" className="text-cyan hover:underline">Create account</Link>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

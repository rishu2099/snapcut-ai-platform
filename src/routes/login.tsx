import { createFileRoute, Link, useNavigate, redirect } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Logo } from "@/components/Logo";
import { Mail, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";

export const Route = createFileRoute("/login")({
  head: () => ({ meta: [{ title: "Sign in — SnapCut AI" }] }),
  beforeLoad: async () => {
    if (typeof window !== 'undefined') {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        throw redirect({
          to: "/dashboard",
        });
      }
    }
  },
  component: Login,
});

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash && hash.includes("error_description")) {
      const params = new URLSearchParams(hash.substring(1));
      toast.error(params.get("error_description")?.replace(/\+/g, ' '));
    }
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        toast.error(error.message);
        return;
      }

      if (data.session) {
        toast.success("Logged in successfully!");
        navigate({ to: "/dashboard" });
      }
    } catch (err: any) {
      toast.error(err.message || "An error occurred during sign in.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleMagicLink = async () => {
    if (!email) {
      toast.error("Please enter your email first to send a magic link");
      return;
    }
    setIsLoading(true);
    try {
      const { error } = await supabase.auth.signInWithOtp({
        email,
        options: {
          emailRedirectTo: `${window.location.origin}/dashboard`,
        }
      });
      if (error) {
        toast.error(error.message);
        return;
      }
      toast.success("Magic link sent! Please check your inbox.");
    } catch (err: any) {
      toast.error(err.message || "Failed to send magic link.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/dashboard`,
        }
      });
      if (error) toast.error(error.message);
    } catch (err: any) {
      toast.error(err.message || "An error occurred with Google sign in.");
    }
  };

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
          <button 
            onClick={handleGoogleLogin}
            type="button"
            className="mt-8 flex w-full items-center justify-center gap-3 rounded-full border border-border bg-card px-5 py-3 text-sm font-medium hover:bg-secondary transition-colors"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24"><path fill="#fff" d="M21.35 11.1H12v3.2h5.35c-.23 1.5-1.6 4.4-5.35 4.4-3.22 0-5.85-2.67-5.85-5.95 0-3.28 2.63-5.95 5.85-5.95 1.83 0 3.06.78 3.76 1.45l2.57-2.47C16.78 4.3 14.6 3.4 12 3.4 6.92 3.4 2.8 7.5 2.8 12.55s4.12 9.15 9.2 9.15c5.3 0 8.82-3.72 8.82-8.97 0-.6-.06-1.06-.17-1.63z"/></svg>
            Continue with Google
          </button>
          <div className="my-5 flex items-center gap-3 text-xs text-muted-foreground"><div className="h-px flex-1 bg-border" /> OR <div className="h-px flex-1 bg-border" /></div>
          <form className="space-y-3" onSubmit={handleLogin}>
            <input 
              type="email" 
              placeholder="you@email.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-cyan" 
            />
            <input 
              type="password" 
              placeholder="Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-cyan" 
            />
            <button 
              disabled={isLoading}
              className="w-full rounded-full bg-gradient-brand px-5 py-3 text-sm font-medium text-white shadow-glow disabled:opacity-50"
            >
              {isLoading ? "Signing in..." : "Sign in"}
            </button>
          </form>
          <button 
            type="button" 
            onClick={handleMagicLink}
            disabled={isLoading}
            className="mt-3 flex w-full items-center justify-center gap-2 text-sm text-muted-foreground hover:text-foreground disabled:opacity-50"
          >
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

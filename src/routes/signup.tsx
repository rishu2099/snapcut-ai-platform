import { createFileRoute, Link, useNavigate, redirect } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Logo } from "@/components/Logo";
import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";

export const Route = createFileRoute("/signup")({
  head: () => ({ meta: [{ title: "Sign up — SnapCut AI" }] }),
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
  component: Signup,
});

function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: name,
          },
          emailRedirectTo: `${window.location.origin}/dashboard`,
        },
      });

      if (error) {
        toast.error(error.message);
        return;
      }

      if (data.user && data.session) {
        toast.success("Account created successfully!");
        navigate({ to: "/dashboard" });
      } else if (data.user) {
        toast.success("Account created! Please check your email to verify.");
        navigate({ to: "/login" });
      }
    } catch (err: any) {
      toast.error(err.message || "An error occurred during sign up.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <div className="mx-auto flex max-w-md flex-col items-center px-4 py-20 sm:px-6">
        <div className="glass w-full rounded-3xl p-8">
          <div className="flex flex-col items-center text-center">
            <Logo withText={false} size={48} />
            <h1 className="mt-4 text-2xl font-bold">Create your account</h1>
            <p className="mt-1 text-sm text-muted-foreground">Start removing backgrounds free</p>
          </div>
          <form className="mt-8 space-y-3" onSubmit={handleSignup}>
            <input 
              placeholder="Full name" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-cyan" 
            />
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
              placeholder="Create password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-cyan" 
            />
            <button 
              disabled={isLoading}
              className="w-full rounded-full bg-gradient-brand px-5 py-3 text-sm font-medium text-white shadow-glow disabled:opacity-50"
            >
              {isLoading ? "Creating account..." : "Create account"}
            </button>
          </form>
          <p className="mt-6 text-center text-sm text-muted-foreground">
            Have an account? <Link to="/login" className="text-cyan hover:underline">Sign in</Link>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

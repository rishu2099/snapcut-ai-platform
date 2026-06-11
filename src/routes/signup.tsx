import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Logo } from "@/components/Logo";

export const Route = createFileRoute("/signup")({
  head: () => ({ meta: [{ title: "Sign up — SnapCut AI" }] }),
  component: Signup,
});

function Signup() {
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
          <form className="mt-8 space-y-3" onSubmit={(e)=>e.preventDefault()}>
            <input placeholder="Full name" className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-cyan" />
            <input type="email" placeholder="you@email.com" className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-cyan" />
            <input type="password" placeholder="Create password" className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-cyan" />
            <button className="w-full rounded-full bg-gradient-brand px-5 py-3 text-sm font-medium text-white shadow-glow">Create account</button>
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

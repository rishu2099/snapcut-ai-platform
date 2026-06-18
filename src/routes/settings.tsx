import { createFileRoute, redirect, useNavigate } from "@tanstack/react-router";
import { SidebarLayout } from "@/components/SidebarLayout";
import { supabase } from "@/lib/supabase";
import { useState, useEffect } from "react";
import { useAuth } from "@/hooks/use-auth";
import { User, Mail, Lock, AlertTriangle, Save, Loader2, Trash2 } from "lucide-react";

export const Route = createFileRoute("/settings")({
  head: () => ({ meta: [{ title: "Settings — SnapCut AI" }] }),
  beforeLoad: async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      throw redirect({
        to: "/login",
      });
    }
  },
  component: SettingsPage,
});

function SettingsPage() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const [loadingProfile, setLoadingProfile] = useState(false);
  const [loadingEmail, setLoadingEmail] = useState(false);
  const [loadingPassword, setLoadingPassword] = useState(false);
  const [loadingDelete, setLoadingDelete] = useState(false);
  
  const [deleteConfirm, setDeleteConfirm] = useState("");
  const [message, setMessage] = useState({ text: "", type: "" });

  useEffect(() => {
    if (user) {
      setName(user.user_metadata?.full_name || "");
      setEmail(user.email || "");
    }
  }, [user]);

  const showMessage = (text: string, type: "success" | "error") => {
    setMessage({ text, type });
    setTimeout(() => setMessage({ text: "", type: "" }), 5000);
  };

  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoadingProfile(true);
    const { error } = await supabase.auth.updateUser({
      data: { full_name: name }
    });
    setLoadingProfile(false);
    if (error) showMessage(error.message, "error");
    else {
      showMessage("Profile updated successfully", "success");
      window.location.reload(); // Quick refresh to update the sidebar state
    }
  };

  const handleUpdateEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoadingEmail(true);
    const { error } = await supabase.auth.updateUser({ email });
    setLoadingEmail(false);
    if (error) showMessage(error.message, "error");
    else showMessage("Check both your old and new email to confirm the change.", "success");
  };

  const handleUpdatePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!password || password.length < 6) {
      showMessage("Password must be at least 6 characters.", "error");
      return;
    }
    setLoadingPassword(true);
    const { error } = await supabase.auth.updateUser({ password });
    setLoadingPassword(false);
    if (error) showMessage(error.message, "error");
    else {
      showMessage("Password updated successfully.", "success");
      setPassword("");
    }
  };

  const handleDeleteAccount = async () => {
    if (deleteConfirm !== "DELETE") {
      showMessage("Please type DELETE to confirm.", "error");
      return;
    }
    
    // Safety check - browser confirm
    if (!window.confirm("Are you absolutely sure you want to permanently delete your account? This action cannot be undone.")) {
      return;
    }

    setLoadingDelete(true);
    const { error } = await supabase.rpc('delete_user');
    setLoadingDelete(false);
    
    if (error) {
      showMessage(error.message, "error");
    } else {
      await supabase.auth.signOut();
      navigate({ to: "/login" });
    }
  };

  return (
    <SidebarLayout>
      <div className="px-8 py-8 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">Account Settings</h1>

        {message.text && (
          <div className={`mb-6 p-4 rounded-xl border ${message.type === 'success' ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' : 'bg-red-500/10 border-red-500/20 text-red-400'}`}>
            {message.text}
          </div>
        )}

        <div className="space-y-8">
          {/* Profile Section */}
          <section className="rounded-2xl border border-border/40 bg-[#12141a] p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                <User className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-white">Public Profile</h2>
                <p className="text-sm text-muted-foreground">Manage your name and display settings.</p>
              </div>
            </div>
            <form onSubmit={handleUpdateProfile} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-white mb-1">Full Name</label>
                <input 
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full max-w-md rounded-xl border border-border/40 bg-[#1a1d24] px-4 py-2.5 text-white focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                  placeholder="Your Name"
                />
              </div>
              <button disabled={loadingProfile} type="submit" className="inline-flex items-center gap-2 rounded-xl bg-white text-black px-4 py-2 text-sm font-medium hover:bg-neutral-200 transition-colors disabled:opacity-50">
                {loadingProfile ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
                Save Changes
              </button>
            </form>
          </section>

          {/* Security Section */}
          <section className="rounded-2xl border border-border/40 bg-[#12141a] p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
                <Lock className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-white">Security & Login</h2>
                <p className="text-sm text-muted-foreground">Update your email address or password.</p>
              </div>
            </div>

            <div className="space-y-8">
              {/* Email Form */}
              <form onSubmit={handleUpdateEmail} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-white mb-1">Email Address</label>
                  <div className="flex items-center gap-3 max-w-md">
                    <input 
                      type="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-xl border border-border/40 bg-[#1a1d24] px-4 py-2.5 text-white focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                    />
                    <button disabled={loadingEmail || email === user?.email} type="submit" className="shrink-0 inline-flex items-center gap-2 rounded-xl border border-border/40 bg-[#1a1d24] text-white px-4 py-2.5 text-sm font-medium hover:bg-white/5 transition-colors disabled:opacity-50">
                      {loadingEmail ? <Loader2 className="h-4 w-4 animate-spin" /> : "Update"}
                    </button>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1 text-purple-400/80">Updating your email will send a confirmation link to both your old and new addresses.</p>
                </div>
              </form>

              <hr className="border-border/40" />

              {/* Password Form */}
              <form onSubmit={handleUpdatePassword} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-white mb-1">New Password</label>
                  <div className="flex items-center gap-3 max-w-md">
                    <input 
                      type="password" 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full rounded-xl border border-border/40 bg-[#1a1d24] px-4 py-2.5 text-white focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                      placeholder="••••••••"
                    />
                    <button disabled={loadingPassword || !password} type="submit" className="shrink-0 inline-flex items-center gap-2 rounded-xl border border-border/40 bg-[#1a1d24] text-white px-4 py-2.5 text-sm font-medium hover:bg-white/5 transition-colors disabled:opacity-50">
                      {loadingPassword ? <Loader2 className="h-4 w-4 animate-spin" /> : "Update"}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </section>

          {/* Danger Zone */}
          <section className="rounded-2xl border border-red-500/20 bg-red-500/5 p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-red-500/20 text-red-500">
                <AlertTriangle className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-white">Danger Zone</h2>
                <p className="text-sm text-red-400">Permanently delete your account and all associated data.</p>
              </div>
            </div>

            <div className="max-w-md">
              <p className="text-sm text-muted-foreground mb-4">
                Once you delete your account, there is no going back. Please be certain. Type <strong>DELETE</strong> below to confirm.
              </p>
              <div className="flex items-center gap-3">
                <input 
                  type="text" 
                  value={deleteConfirm}
                  onChange={(e) => setDeleteConfirm(e.target.value)}
                  className="w-full rounded-xl border border-red-500/30 bg-[#1a1d24] px-4 py-2.5 text-white focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
                  placeholder="Type DELETE"
                />
                <button 
                  onClick={handleDeleteAccount}
                  disabled={loadingDelete || deleteConfirm !== "DELETE"} 
                  className="shrink-0 inline-flex items-center gap-2 rounded-xl bg-red-500 text-white px-4 py-2.5 text-sm font-medium hover:bg-red-600 transition-colors disabled:opacity-50"
                >
                  {loadingDelete ? <Loader2 className="h-4 w-4 animate-spin" /> : <Trash2 className="h-4 w-4" />}
                  Delete Account
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </SidebarLayout>
  );
}

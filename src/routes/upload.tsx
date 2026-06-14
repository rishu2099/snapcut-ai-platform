import { createFileRoute, Link } from "@tanstack/react-router";
import { useCallback, useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Upload as UploadIcon, ImageIcon, Loader2 } from "lucide-react";

export const Route = createFileRoute("/upload")({
  head: () => ({ meta: [{ title: "Upload — SnapCut AI" }] }),
  component: UploadPage,
});

function UploadPage() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [processing, setProcessing] = useState(false);
  const [drag, setDrag] = useState(false);
  const navigate = Route.useNavigate();

  const handleFile = useCallback((f: File) => {
    if (!/^image\/(png|jpe?g|webp)$/.test(f.type)) return alert("Use PNG, JPG, or WEBP");
    if (f.size > 20 * 1024 * 1024) return alert("Max 20MB");
    setFile(f);
    setPreview(URL.createObjectURL(f));
  }, []);

  const process = async () => {
    if (!file) return;

    setProcessing(true);

    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await fetch("https://rishupvt22.app.n8n.cloud/webhook/remove-backgroung", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      const imageUrl = result.url;
      const originalImageUrl = preview; // Use the preview URL as the original image URL

      if (!imageUrl || !originalImageUrl) {
        throw new Error("Webhook response did not contain an image URL or original image URL was missing.");
      }

      // Save to local storage
      const history = JSON.parse(localStorage.getItem("imageHistory") || "[]");
      history.push({ originalUrl: originalImageUrl, processedUrl: imageUrl, timestamp: new Date().toISOString() });
      localStorage.setItem("imageHistory", JSON.stringify(history));

      navigate({ to: "/result", search: { originalImageUrl, imageUrl } });
    } catch (error) {
      console.error("Error sending image to webhook:", error);
      alert("Failed to process image. Please try again.");
      setProcessing(false);
    }
  };

  return (
    <div className="min-h-screen" onPaste={(e) => {
        e.preventDefault(); // Prevent default paste behavior
        const items = e.clipboardData?.items;
        if (items) {
          for (let i = 0; i < items.length; i++) {
            if (items[i].type.indexOf('image') !== -1) {
              const file = items[i].getAsFile();
              if (file) {
                handleFile(file);
                break;
              }
            }
          }
        }
      }}>
      <Header />
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Upload your <span className="text-gradient">image</span></h1>
        <p className="mt-3 text-muted-foreground">PNG, JPG, or WEBP. Up to 20MB.</p>

        <label
          onDragOver={(e) => { e.preventDefault(); setDrag(true); }}
          onDragLeave={() => setDrag(false)}
          onDrop={(e) => { e.preventDefault(); setDrag(false); const f = e.dataTransfer.files[0]; if (f) handleFile(f); }}
          className={`mt-8 block cursor-pointer rounded-3xl border-2 border-dashed p-10 text-center transition-all ${drag ? "border-cyan bg-card/60" : "border-border bg-card/30 hover:border-cyan/60"}`}
        >
          <input type="file" accept="image/png,image/jpeg,image/webp" className="hidden" onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])} />
          {preview ? (
            <div className="space-y-4">
              <img src={preview} alt="Preview" className="mx-auto max-h-80 rounded-xl" />
              <p className="text-sm text-muted-foreground">{file?.name}</p>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-gradient-brand shadow-glow">
                <UploadIcon className="h-7 w-7 text-white" />
              </div>
              <div>
                <p className="font-semibold">Drag & drop, or click to browse</p>
                <p className="mt-1 text-sm text-muted-foreground">PNG, JPG, WEBP · max 20MB</p>
              </div>
            </div>
          )}
        </label>

        <div className="mt-6 flex gap-3">
          <button disabled={!file || processing} onClick={process} className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-brand px-6 py-3.5 font-medium text-white shadow-glow disabled:opacity-50">
            {processing ? <><Loader2 className="h-4 w-4 animate-spin" /> Processing…</> : <><ImageIcon className="h-4 w-4" /> Remove Background</>}
          </button>
          <Link to="/" className="rounded-full border border-border bg-card px-6 py-3.5 font-medium">Cancel</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

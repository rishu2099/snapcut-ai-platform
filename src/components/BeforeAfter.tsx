import { useRef, useState } from "react";

export function BeforeAfter({
  before,
  after,
  className = "",
}: {
  before: string;
  after: string;
  className?: string;
}) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const p = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, p)));
  };

  return (
    <div
      ref={ref}
      className={`relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border/60 select-none ${className}`}
      onMouseMove={(e) => e.buttons === 1 && onMove(e.clientX)}
      onTouchMove={(e) => onMove(e.touches[0].clientX)}
      onMouseDown={(e) => onMove(e.clientX)}
      style={{
        backgroundImage:
          "linear-gradient(45deg, #1a1f2e 25%, transparent 25%), linear-gradient(-45deg, #1a1f2e 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #1a1f2e 75%), linear-gradient(-45deg, transparent 75%, #1a1f2e 75%)",
        backgroundSize: "20px 20px",
        backgroundPosition: "0 0, 0 10px, 10px -10px, -10px 0",
        backgroundColor: "#0b1020",
      }}
    >
      <img src={after} alt="After" className="absolute inset-0 h-full w-full object-contain" draggable={false} />
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
        <img src={before} alt="Before" className="absolute inset-0 h-full w-full object-cover" style={{ width: `${100 / (pos / 100)}%`, maxWidth: "none" }} draggable={false} />
      </div>
      <div className="absolute inset-y-0 z-10 w-0.5 bg-gradient-brand" style={{ left: `${pos}%` }}>
        <div className="absolute top-1/2 left-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-gradient-brand shadow-glow">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><path d="M8 6l-4 6 4 6M16 6l4 6-4 6"/></svg>
        </div>
      </div>
      <span className="absolute left-3 top-3 rounded-full bg-black/60 px-2.5 py-1 text-xs font-medium text-white backdrop-blur">Before</span>
      <span className="absolute right-3 top-3 rounded-full bg-gradient-brand px-2.5 py-1 text-xs font-medium text-white">After</span>
    </div>
  );
}

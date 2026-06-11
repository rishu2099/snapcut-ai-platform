import type { ReactNode } from "react";

export function Section({ id, eyebrow, title, subtitle, children }: { id?: string; eyebrow?: string; title?: ReactNode; subtitle?: ReactNode; children: ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28">
      {(eyebrow || title || subtitle) && (
        <div className="mx-auto mb-14 max-w-2xl text-center">
          {eyebrow && (
            <span className="inline-flex rounded-full border border-border/60 bg-card/40 px-3 py-1 text-xs font-medium text-muted-foreground">{eyebrow}</span>
          )}
          {title && <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">{title}</h2>}
          {subtitle && <p className="mt-4 text-base text-muted-foreground sm:text-lg">{subtitle}</p>}
        </div>
      )}
      {children}
    </section>
  );
}

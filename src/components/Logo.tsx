const logoUrl = "/snapcut-logo.png";

export function Logo({ withText = true, size = 32 }: { withText?: boolean; size?: number }) {
  return (
    <div className="flex items-center gap-2.5">
      <img
        src={logoUrl}
        alt="SnapCut AI"
        width={size}
        height={size}
        className="rounded-lg"
        style={{ width: size, height: size }}
      />
      {withText && (
        <span className="font-display text-lg font-bold tracking-tight">
          <span className="text-gradient">SnapCut</span>
          <span className="text-foreground"> AI</span>
        </span>
      )}
    </div>
  );
}

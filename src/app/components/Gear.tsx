export function Gear({ size = 200, className = "", duration = 40 }: { size?: number; className?: string; duration?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      className={className}
      style={{ animation: `spin ${Math.abs(duration)}s linear infinite ${duration < 0 ? "reverse" : ""}` }}
    >
      <g fill="none" stroke="currentColor" strokeWidth="0.6">
        <circle cx="100" cy="100" r="95" />
        <circle cx="100" cy="100" r="78" />
        <circle cx="100" cy="100" r="60" />
        <circle cx="100" cy="100" r="35" />
        <circle cx="100" cy="100" r="12" />
        {Array.from({ length: 24 }).map((_, i) => {
          const a = (i * Math.PI * 2) / 24;
          const x1 = 100 + Math.cos(a) * 78;
          const y1 = 100 + Math.sin(a) * 78;
          const x2 = 100 + Math.cos(a) * 95;
          const y2 = 100 + Math.sin(a) * 95;
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
        })}
        {Array.from({ length: 12 }).map((_, i) => {
          const a = (i * Math.PI * 2) / 12;
          const x = 100 + Math.cos(a) * 47;
          const y = 100 + Math.sin(a) * 47;
          return <circle key={i} cx={x} cy={y} r="2" fill="currentColor" />;
        })}
      </g>
    </svg>
  );
}

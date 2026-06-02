export function SectionLabel({ index, title }: { index: string; title: string }) {
  return (
    <div className="flex items-center gap-4 mb-12">
      <span className="text-amber-400/80 tracking-[0.3em] text-[12px]">[{index}]</span>
      <span className="text-white/40 tracking-[0.3em] text-[12px] uppercase">{title}</span>
      <div className="flex-1 h-px bg-white/10" />
    </div>
  );
}

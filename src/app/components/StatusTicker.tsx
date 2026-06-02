import { useEffect, useState } from "react";

const messages = [
  "// neural net online",
  "// scanning galactic frequencies",
  "// calibrating SourceMeter",
  "// RAG index: 2,841 docs",
  "// opencv build: ok",
  "// gradient descent stable",
  "// signal/noise: 38.4 dB",
  "// cosmic rays nominal",
  "// telemetry uplink active",
];

export function StatusTicker() {
  const [idx, setIdx] = useState(0);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const a = setInterval(() => setIdx((i) => (i + 1) % messages.length), 2800);
    const b = setInterval(() => setTime(new Date()), 1000);
    return () => {
      clearInterval(a);
      clearInterval(b);
    };
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-white/10 bg-black/60 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-9 flex items-center justify-between text-[10px] tracking-[0.25em] uppercase text-white/50">
        <div className="flex items-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-300 animate-pulse" />
          <span className="text-amber-300/80">system</span>
          <span className="text-white/70 transition-opacity">{messages[idx]}</span>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <span>lat 28.61° n</span>
          <span>lon 77.20° e</span>
          <span className="text-white/70 tabular-nums">{time.toLocaleTimeString("en-GB")} ist</span>
        </div>
      </div>
    </div>
  );
}

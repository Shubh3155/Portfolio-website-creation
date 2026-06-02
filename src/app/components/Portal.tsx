import { useEffect, useState } from "react";
import { Gear } from "./Gear";

export function Portal({ onEnter }: { onEnter: () => void }) {
  const [progress, setProgress] = useState(0);
  const [ready, setReady] = useState(false);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    let p = 0;
    const id = setInterval(() => {
      p += Math.random() * 7 + 2;
      if (p >= 100) {
        p = 100;
        setReady(true);
        clearInterval(id);
      }
      setProgress(p);
    }, 90);
    return () => clearInterval(id);
  }, []);

  const handleEnter = () => {
    if (!ready) return;
    setLeaving(true);
    setTimeout(onEnter, 900);
  };

  return (
    <div
      className={`fixed inset-0 z-[100] bg-[#050505] flex items-center justify-center overflow-hidden transition-all duration-[900ms] ${
        leaving ? "opacity-0 scale-110" : "opacity-100"
      }`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(251,191,36,0.12),transparent_55%)] pointer-events-none" />

      <div className="absolute text-amber-300/20">
        <Gear size={780} duration={90} />
      </div>
      <div className="absolute text-amber-300/30">
        <Gear size={520} duration={-60} />
      </div>
      <div className="absolute text-amber-300/40">
        <Gear size={320} duration={45} />
      </div>

      <div className="relative text-center px-4 sm:px-6 max-w-full w-full">
        <div className="font-mono-tech text-amber-400/80 tracking-[0.4em] text-[9px] sm:text-[11px] mb-4 sm:mb-6">
          &gt; initializing system_v2.6
        </div>

        <h1
          className="font-display text-white uppercase"
          style={{ fontSize: "clamp(32px, 8vw, 120px)", lineHeight: 0.95, fontWeight: 600, letterSpacing: "0.02em" }}
        >
          SHUBHAM<span className="text-amber-300">_</span>KHATRI
        </h1>
        <div className="font-mono-tech text-white/50 tracking-[0.5em] text-[10px] sm:text-[12px] mt-2 sm:mt-4 uppercase">
          // node.0001 — ICE / AI engineer
        </div>

        <div className="mt-8 sm:mt-12 w-full max-w-xs sm:max-w-md mx-auto font-mono-tech px-4 sm:px-0">
          <div className="flex justify-between text-[9px] sm:text-[10px] tracking-[0.3em] text-white/40 mb-2 uppercase">
            <span>boot_seq</span>
            <span>{Math.floor(progress).toString().padStart(3, "0")}%</span>
          </div>
          <div className="h-px bg-white/10 relative overflow-hidden">
            <div
              className="absolute inset-y-0 left-0 bg-amber-300 transition-all duration-100"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="mt-3 text-[10px] sm:text-[11px] text-white/40 tracking-[0.2em] uppercase h-4 line-clamp-1">
            {progress < 30 && "> calibrating instruments..."}
            {progress >= 30 && progress < 60 && "> loading neural pathways..."}
            {progress >= 60 && progress < 90 && "> aligning constellations..."}
            {progress >= 90 && progress < 100 && "> opening uplink..."}
            {progress >= 100 && "> handshake complete"}
          </div>
        </div>

        <button
          onClick={handleEnter}
          disabled={!ready}
          className={`font-mono-tech mt-8 sm:mt-12 group relative px-6 sm:px-10 py-3 sm:py-4 border tracking-[0.3em] text-[11px] sm:text-[12px] uppercase transition-all duration-500 ${
            ready
              ? "border-amber-300 text-amber-300 hover:bg-amber-300 hover:text-black cursor-pointer animate-pulse-soft"
              : "border-white/15 text-white/30 cursor-not-allowed"
          }`}
        >
          <span className="relative z-10">[ initialize_session ]</span>
          {ready && (
            <span className="absolute inset-0 border border-amber-300/40 animate-ping-slow" />
          )}
        </button>
      </div>

      <style>{`
        @keyframes ping-slow {
          0% { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(1.4); opacity: 0; }
        }
        .animate-ping-slow { animation: ping-slow 1.8s cubic-bezier(0,0,0.2,1) infinite; }
        @keyframes pulse-soft {
          0%, 100% { box-shadow: 0 0 0 0 rgba(252, 211, 77, 0.3); }
          50% { box-shadow: 0 0 30px 4px rgba(252, 211, 77, 0.25); }
        }
        .animate-pulse-soft { animation: pulse-soft 2.2s ease-in-out infinite; }
      `}</style>
    </div>
  );
}

import { Gear } from "./Gear";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden pt-16">
      <div className="absolute inset-0 opacity-[0.07] text-amber-300 pointer-events-none">
        <div className="absolute -right-40 top-20">
          <Gear size={700} duration={120} />
        </div>
        <div className="absolute -left-32 bottom-10">
          <Gear size={420} duration={90} />
        </div>
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(251,191,36,0.08),transparent_60%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 w-full">
        <div className="font-mono-tech flex items-center gap-3 mb-8 text-[12px] tracking-[0.3em] text-white/50 uppercase">
          <span className="w-10 h-px bg-amber-400/60" />
          &gt; portfolio_v2.6 / engineering_subsystem
        </div>

        <h1 className="font-display text-white uppercase" style={{ fontSize: "clamp(52px, 10vw, 170px)", lineHeight: 0.92, fontWeight: 700, letterSpacing: "0.01em" }}>
          PARALLEL<br />
          <span className="text-amber-300/90" style={{ fontWeight: 500 }}>UNIVERSE_</span>
        </h1>

        <div className="mt-10 max-w-2xl">
          <p className="text-white/60 text-[15px] leading-relaxed">
            an interactive portfolio of <span className="text-white">Shubham Khatri</span> — instrumentation & control engineer,
            AI/ML researcher, and open-source contributor.
            building systems that sit between the peak of intelligence and the abyss of raw signal.
          </p>
        </div>

        <div className="mt-16 flex flex-wrap items-end justify-between gap-6 border-t border-white/10 pt-6">
          <div className="grid grid-cols-3 gap-10 text-white/70">
            <div>
              <div className="text-[11px] tracking-[0.25em] uppercase text-white/40 mb-2">based in</div>
              <div className="text-white">Delhi, India</div>
            </div>
            <div>
              <div className="text-[11px] tracking-[0.25em] uppercase text-white/40 mb-2">studying</div>
              <div className="text-white">B.Tech ICE @ NSUT</div>
            </div>
            <div>
              <div className="text-[11px] tracking-[0.25em] uppercase text-white/40 mb-2">focus</div>
              <div className="text-white">AI / ML · Full-stack · Research</div>
            </div>
          </div>
          <a href="#projects" className="font-mono-tech group flex items-center gap-3 text-[13px] tracking-[0.25em] uppercase text-white hover:text-amber-300 transition-colors">
            [ traverse_system ]
            <span className="w-12 h-px bg-current group-hover:w-20 transition-all" />
          </a>
        </div>
      </div>
    </section>
  );
}

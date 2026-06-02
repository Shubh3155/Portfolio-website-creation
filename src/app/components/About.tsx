import { SectionLabel } from "./SectionLabel";

export function About() {
  return (
    <section id="about" className="relative py-32 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <SectionLabel index="01" title="about the author" />
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <h2 className="font-display text-white uppercase" style={{ fontSize: "clamp(32px, 4.4vw, 64px)", lineHeight: 1.05, fontWeight: 600, letterSpacing: "0.01em" }}>
              between the<br /><span className="text-amber-300/90">PEAK</span> and the<br /><span className="text-amber-300/90">ABYSS</span>
            </h2>
          </div>
          <div className="md:col-span-7 space-y-6 text-white/70 text-[15px] leading-relaxed">
            <p>
              I'm a B.Tech student in Instrumentation and Control Engineering at NSUT
              with a strong focus on AI/ML and full-stack development. I build RAG systems,
              deep learning models, and scalable applications — measured in actual performance gains,
              not just demos.
            </p>
            <p>
              Recently, I've been bridging two worlds: writing modern software for legacy scientific
              instruments at <span className="text-white">SSPL-DRDO</span>, and contributing to
              the JavaScript bindings of <span className="text-white">OpenCV</span>. Somewhere in
              between, I lead AI/ML workshops at <span className="text-white">IEEE NSUT</span>.
            </p>
            <div className="grid grid-cols-3 pt-6 border-t border-white/10 gap-6">
              <Stat n="6.4" label="cgpa / 10" />
              <Stat n="3rd" label="ML bootcamp" />
              <Stat n="50%" label="latency reduced" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <div className="text-amber-300" style={{ fontSize: "32px", fontWeight: 300 }}>{n}</div>
      <div className="text-[11px] tracking-[0.25em] uppercase text-white/40 mt-1">{label}</div>
    </div>
  );
}

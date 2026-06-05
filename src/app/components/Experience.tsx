import { SectionLabel } from "./SectionLabel";

const items = [
  {
    role: "Research Intern",
    org: "SSPL — DRDO",
    location: "Delhi, India",
    date: "2026",
    body: "Working on modernization of legacy instrumentation software for the Keithley 2601B SourceMeter. Interfacing and migrating legacy GUI workflows to a modern programming environment — improving usability, maintainability, and automated instrument control. Contributing to hardware-software integration, test automation, and electronic measurement system development for research applications.",
    tags: ["Instrumentation", "GUI Modernization", "Test Automation", "Keithley 2601B"],
  },
  {
    role: "Research Consultant",
    org: "WorldQuant Brain",
    location: "Remote",
    date: "May 2026 — Present",
    body: "Designed and tested systematic trading signals (alphas) on the WorldQuant BRAIN platform using quantitative research methodologies. Performed factor analysis, signal optimization, and rigorous backtesting to evaluate predictive performance across global equity markets. Leveraged data analytics and financial modeling techniques to enhance strategy robustness and risk-adjusted returns.",
    tags: ["Quantitative Research", "Algorithmic Trading", "Alpha Development", "Financial Modeling", "Data Analytics"],
  },
  {
    role: "Open Source Contributor",
    org: "OpenCV",
    location: "Remote",
    date: "Dec 2025 — Present",
    body: "Fixing JavaScript bindings for namespaced Ptr<T> factory method return types. Submitting PRs and collaborating with maintainers on debugging, testing, and improving OpenCV JS bindings. Working with CMake, Emscripten and the OpenCV JavaScript build pipeline.",
    tags: ["C++", "JavaScript", "CMake", "Emscripten"],
  },
  {
    role: "Research Intern",
    org: "Delhi Technological University",
    location: "Remote",
    date: "Jun 2025 — Aug 2025",
    body: "Conducted research on image enhancement using deep learning and classical mathematical techniques — LCNet, Zero-DCE, CNNs, and Transformer-based approaches. Contributed to gap analysis, experimentation planning, and study of super-resolution and image restoration methods.",
    tags: ["Deep Learning", "Image Enhancement", "Transformers", "Super-Resolution"],
  },
  {
    role: "Technology Head",
    org: "IEEE NSUT",
    location: "Delhi, India",
    date: "Apr 2024 — Present",
    body: "Leading organization of AI/ML and engineering workshops end-to-end. Coordinating with speakers, sponsors, and cross-functional teams. Managing logistics, registrations, on-ground operations, and outreach to increase community engagement.",
    tags: ["Leadership", "Events", "Outreach"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-32 px-6 md:px-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <SectionLabel index="02" title="experience" />
        <div className="space-y-px">
          {items.map((it, i) => (
            <article key={i} className="group grid md:grid-cols-12 gap-6 py-10 border-t border-white/10 hover:border-amber-400/40 transition-colors">
              <div className="md:col-span-2 text-white/40 text-[12px] tracking-[0.2em] uppercase">
                // {it.date}
              </div>
              <div className="md:col-span-3">
                <div className="text-white text-[20px] group-hover:text-amber-300 transition-colors">{it.org}</div>
                <div className="text-white/50 text-[13px] mt-1">{it.location}</div>
              </div>
              <div className="md:col-span-7">
                <div className="text-white/80 mb-3 text-[15px]">{it.role}</div>
                <p className="text-white/60 text-[14px] leading-relaxed">{it.body}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {it.tags.map((t) => (
                    <span key={t} className="text-[11px] tracking-[0.15em] uppercase text-white/50 border border-white/15 px-3 py-1 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

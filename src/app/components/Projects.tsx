import { SectionLabel } from "./SectionLabel";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Fluentiq",
    sub: "RAG-Powered Document Q&A System",
    date: "// 2025",
    desc: "A retrieval-augmented document Q&A system built with LangChain and FAISS. Efficient chunking + vector search pipeline reduced query latency by 50%.",
    stack: ["Python", "LangChain", "FAISS", "Streamlit", "Gemini API"],
  },
  {
    title: "Gravitational Lens Detection",
    sub: "Deep Learning on Astronomical Imagery",
    date: "// 2025",
    desc: "CNN-based pipeline to detect strong gravitational lenses. Tackled class imbalance with focal loss + augmentation. Evaluated with ROC-AUC, precision-recall, and Grad-CAM interpretability.",
    stack: ["PyTorch", "CNNs", "Grad-CAM", "NumPy"],
  },
  {
    title: "F1 Constructor Predictor",
    sub: "ML Web App for Race Analytics",
    date: "// 2024",
    desc: "Predicts constructor points from historical race data. Engineered 15+ features and achieved R² > 0.85, served through an interactive Streamlit dashboard.",
    stack: ["Scikit-learn", "Pandas", "Plotly", "Streamlit"],
  },
  {
    title: "Keithley 2601B Modernization",
    sub: "Instrumentation Software @ SSPL-DRDO",
    date: "// 2026",
    desc: "Migrating legacy GUI workflows for the Keithley 2601B SourceMeter into a modern programming environment — automated instrument control, hardware integration, and improved maintainability.",
    stack: ["Python", "GUI", "SCPI", "Test Automation"],
  },
  {
    title: "IEEE NSUT Website",
    sub: "Alumni Module — React + Vite",
    date: "// 2024",
    desc: "Built the alumni section of the IEEE NSUT website. Responsive UI components for structured alumni profiles, with smooth navigation across devices.",
    stack: ["React", "Vite", "Tailwind", "JavaScript"],
  },
  {
    title: "OpenCV.js Bindings",
    sub: "Open Source Contribution",
    date: "// 2025 — present",
    desc: "Patched JavaScript bindings for namespaced Ptr<T> factory method return types. Collaborating with maintainers across the CMake / Emscripten build pipeline.",
    stack: ["C++", "JavaScript", "Emscripten"],
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-32 px-6 md:px-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <SectionLabel index="03" title="author's works" />
        <div className="mb-16 max-w-2xl">
          <h2 className="font-display text-white uppercase" style={{ fontSize: "clamp(32px, 4.4vw, 58px)", lineHeight: 1.05, fontWeight: 600, letterSpacing: "0.01em" }}>
            not just<br />
            <span className="text-amber-300/90">PROJECTS_</span> they are<br />
            portals to systems
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-white/10">
          {projects.map((p, i) => (
            <article key={p.title} className="group relative bg-[#0a0a0a] p-8 md:p-10 hover:bg-[#111] transition-colors cursor-pointer">
              <div className="flex items-start justify-between mb-8">
                <span className="text-amber-400/80 tracking-[0.25em] text-[12px]">
                  [{String(i + 1).padStart(2, "0")}]
                </span>
                <span className="text-white/40 text-[12px] tracking-[0.2em]">{p.date}</span>
              </div>

              <h3 className="font-display text-white uppercase group-hover:text-amber-300 transition-colors" style={{ fontSize: "clamp(22px, 2.4vw, 32px)", lineHeight: 1.05, fontWeight: 600, letterSpacing: "0.01em" }}>
                {p.title}
              </h3>
              <div className="text-white/50 mt-2 italic text-[14px]">{p.sub}</div>

              <p className="text-white/60 text-[14px] leading-relaxed mt-6">{p.desc}</p>

              <div className="flex flex-wrap gap-2 mt-6">
                {p.stack.map((s) => (
                  <span key={s} className="text-[11px] tracking-[0.15em] uppercase text-white/50">
                    {s}
                  </span>
                ))}
              </div>

              <ArrowUpRight className="absolute top-8 right-8 w-5 h-5 text-white/30 group-hover:text-amber-300 group-hover:rotate-45 transition-all opacity-0 group-hover:opacity-100" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

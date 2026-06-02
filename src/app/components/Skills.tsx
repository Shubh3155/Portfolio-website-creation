import { SectionLabel } from "./SectionLabel";

const groups = [
  { label: "languages", items: ["Python", "C++", "JavaScript", "TypeScript", "SQL"] },
  { label: "ml / ai", items: ["TensorFlow", "PyTorch", "Scikit-learn", "LangChain", "FAISS", "RAG", "NLP", "Pandas"] },
  { label: "backend & app", items: ["Flask", "REST APIs", "MongoDB", "Docker", "Flutter", "Streamlit"] },
  { label: "tools", items: ["Git", "GitHub", "CMake", "Emscripten"] },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-32 px-6 md:px-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <SectionLabel index="04" title="instruments" />
        <div className="grid md:grid-cols-2 gap-16">
          {groups.map((g, i) => (
            <div key={g.label} className="border-t border-white/10 pt-6">
              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-amber-400/80 text-[12px] tracking-[0.25em]">
                  [{String(i + 1).padStart(2, "0")}]
                </span>
                <h3 className="text-white tracking-[0.2em] uppercase text-[14px]">{g.label}</h3>
              </div>
              <div className="flex flex-wrap gap-x-6 gap-y-3">
                {g.items.map((it) => (
                  <span key={it} className="text-white/70 text-[18px] hover:text-amber-300 transition-colors cursor-default" style={{ fontWeight: 300 }}>
                    {it}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 border-t border-white/10 pt-10">
          <SectionLabel index="05" title="achievements" />
          <ul className="space-y-4 text-white/70">
            <Bullet>Secured <span className="text-amber-300">3rd Place</span> — ML Bootcamp by IEEE NSUT</Bullet>
            <Bullet>Completed <span className="text-white">Machine Learning Specialization</span> by Andrew Ng — Coursera</Bullet>
            <Bullet>Completed <span className="text-white">Data Analytics Virtual Internship</span> — Deloitte Australia (Forage)</Bullet>
          </ul>
        </div>
      </div>
    </section>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-4 items-baseline">
      <span className="text-amber-400/60 text-[12px] tracking-[0.2em]">//</span>
      <span className="text-[15px]">{children}</span>
    </li>
  );
}

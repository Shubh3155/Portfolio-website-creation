import { Gear } from "./Gear";
import { Mail, Phone, Github, Linkedin, Code2 } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="relative py-32 px-6 md:px-10 border-t border-white/5 overflow-hidden">
      <div className="absolute -bottom-40 -right-40 text-amber-300/[0.05] pointer-events-none">
        <Gear size={600} duration={150} />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-amber-400/80 tracking-[0.3em] text-[12px] mb-8">[06] // contact</div>
        <h2 className="font-display text-white uppercase max-w-5xl" style={{ fontSize: "clamp(38px, 6vw, 100px)", lineHeight: 0.95, fontWeight: 600, letterSpacing: "0.01em" }}>
          let's build a<br />
          <span className="text-amber-300/90">PARALLEL</span> system
          <span className="text-amber-300">_</span>
        </h2>

        <div className="mt-16 grid md:grid-cols-2 gap-10">
          <div className="space-y-5">
            <Item icon={<Mail className="w-4 h-4" />} label="email" value="Shubh31055@gmail.com" href="mailto:Shubh31055@gmail.com" />
            <Item icon={<Phone className="w-4 h-4" />} label="phone" value="+91 99995 64016" href="tel:+919999564016" />
          </div>
          <div className="space-y-5">
            <Item icon={<Linkedin className="w-4 h-4" />} label="linkedin" value="Shubham3155" href="https://www.linkedin.com/in/shubham3155" />
            <Item icon={<Github className="w-4 h-4" />} label="github" value="Shubh3155" href="https://github.com/Shubh3155" />
            <Item icon={<Code2 className="w-4 h-4" />} label="leetcode" value="Shubham_kh" href="https://leetcode.com/u/Shubham_khatri/" />
          </div>
        </div>

        <footer className="mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4 text-[12px] tracking-[0.2em] uppercase text-white/40">
          <div>// shubham khatri — {new Date().getFullYear()}</div>
          <div>delhi, india · nsut</div>
        </footer>
      </div>
    </section>
  );
}

function Item({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href: string }) {
  return (
    <a href={href} className="group flex items-center gap-4 border-t border-white/10 pt-5 hover:border-amber-400/40 transition-colors">
      <span className="text-amber-400/60">{icon}</span>
      <div>
        <div className="text-[11px] tracking-[0.25em] uppercase text-white/40 mb-1">{label}</div>
        <div className="text-white text-[18px] group-hover:text-amber-300 transition-colors">{value}</div>
      </div>
    </a>
  );
}

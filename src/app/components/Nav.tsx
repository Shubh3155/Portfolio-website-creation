export function Nav() {
  const links = [
    { label: "about", href: "#about" },
    { label: "experience", href: "#experience" },
    { label: "projects", href: "#projects" },
    { label: "skills", href: "#skills" },
    { label: "contact", href: "#contact" },
  ];
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="font-display tracking-[0.2em] text-white/90 uppercase text-[14px]" style={{ fontWeight: 600 }}>
          SK<span className="text-amber-400">_</span>UNIVERSE
        </a>
        <nav className="hidden md:font-mono-tech flex gap-8 text-[12px] text-white/70">
          {links.map((l, i) => (
            <a key={l.href} href={l.href} className="hover:text-amber-400 transition-colors lowercase flex items-center gap-2">
              <span className="text-amber-400/60 text-[11px]">[{String(i + 1).padStart(2, "0")}]</span>
              {l.label}
            </a>
          ))}
        </nav>
        <a href="mailto:Shubh31055@gmail.com" className="text-[13px] text-white/80 hover:text-amber-400 hidden sm:block">
          +91 99995 64016
        </a>
      </div>
    </header>
  );
}

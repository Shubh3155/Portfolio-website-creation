import { useState } from "react";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { Portal } from "./components/Portal";
import { CosmicBackground } from "./components/CosmicBackground";
import { StatusTicker } from "./components/StatusTicker";
import { SmoothScroll } from "./components/SmoothScroll";

export default function App() {
  const [entered, setEntered] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white antialiased selection:bg-amber-300/30 relative">
      <style>{`
        @keyframes spin { from { transform: rotate(0deg);} to { transform: rotate(360deg);} }
        html, body { overscroll-behavior: none; }
        section[id] { scroll-margin-top: 80px; }
      `}</style>

      {!entered && <Portal onEnter={() => setEntered(true)} />}
      {entered && <SmoothScroll />}

      <CosmicBackground />

      <div className={`relative z-10 transition-opacity duration-700 ${entered ? "opacity-100" : "opacity-0"}`}>
        <Nav />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <StatusTicker />
      </div>
    </div>
  );
}

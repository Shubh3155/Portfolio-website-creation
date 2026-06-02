import { useEffect, useRef } from "react";

type Star = { x: number; y: number; r: number; a: number; va: number; vx: number; vy: number };
type Shooter = { x: number; y: number; vx: number; vy: number; life: number; max: number };

export function CosmicBackground() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d")!;
    let raf = 0;
    let stars: Star[] = [];
    let shooters: Shooter[] = [];
    let mouse = { x: -9999, y: -9999 };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.floor((window.innerWidth * window.innerHeight) / 9000);
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        r: Math.random() * 1.4 + 0.2,
        a: Math.random(),
        va: (Math.random() * 0.02 + 0.005) * (Math.random() < 0.5 ? -1 : 1),
        vx: (Math.random() - 0.5) * 0.05,
        vy: (Math.random() - 0.5) * 0.05,
      }));
    };

    const spawnShooter = () => {
      const fromLeft = Math.random() < 0.5;
      const y = Math.random() * window.innerHeight * 0.6;
      shooters.push({
        x: fromLeft ? -50 : window.innerWidth + 50,
        y,
        vx: (fromLeft ? 1 : -1) * (6 + Math.random() * 5),
        vy: 2 + Math.random() * 2,
        life: 0,
        max: 90,
      });
    };

    const tick = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      for (const s of stars) {
        s.a += s.va;
        if (s.a < 0.1 || s.a > 1) s.va *= -1;
        s.x += s.vx;
        s.y += s.vy;
        if (s.x < 0) s.x = window.innerWidth;
        if (s.x > window.innerWidth) s.x = 0;
        if (s.y < 0) s.y = window.innerHeight;
        if (s.y > window.innerHeight) s.y = 0;

        const dx = s.x - mouse.x;
        const dy = s.y - mouse.y;
        const d2 = dx * dx + dy * dy;
        if (d2 < 14400) {
          const f = (1 - d2 / 14400) * 1.5;
          s.x += (dx / Math.sqrt(d2 + 1)) * f;
          s.y += (dy / Math.sqrt(d2 + 1)) * f;
        }

        ctx.beginPath();
        ctx.fillStyle = `rgba(252, 211, 77, ${s.a * 0.55})`;
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      }

      for (let i = shooters.length - 1; i >= 0; i--) {
        const sh = shooters[i];
        sh.life++;
        sh.x += sh.vx;
        sh.y += sh.vy;
        const alpha = 1 - sh.life / sh.max;
        const grad = ctx.createLinearGradient(sh.x, sh.y, sh.x - sh.vx * 8, sh.y - sh.vy * 8);
        grad.addColorStop(0, `rgba(252, 211, 77, ${alpha})`);
        grad.addColorStop(1, "rgba(252, 211, 77, 0)");
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.4;
        ctx.beginPath();
        ctx.moveTo(sh.x, sh.y);
        ctx.lineTo(sh.x - sh.vx * 8, sh.y - sh.vy * 8);
        ctx.stroke();
        if (sh.life > sh.max) shooters.splice(i, 1);
      }

      raf = requestAnimationFrame(tick);
    };

    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    resize();
    tick();
    const shooterId = setInterval(spawnShooter, 3500);
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      clearInterval(shooterId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden
    />
  );
}

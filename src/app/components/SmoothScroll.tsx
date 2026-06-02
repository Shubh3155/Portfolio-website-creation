import { useEffect } from "react";

export function SmoothScroll() {
  useEffect(() => {
    let current = window.scrollY;
    let target = window.scrollY;
    const ease = 0.085;
    let raf = 0;
    let running = false;
    let lastTouchY = 0;

    const clamp = (v: number) =>
      Math.max(0, Math.min(v, document.documentElement.scrollHeight - window.innerHeight));

    const loop = () => {
      const diff = target - current;
      if (Math.abs(diff) < 0.4) {
        current = target;
        window.scrollTo(0, current);
        running = false;
        return;
      }
      current += diff * ease;
      window.scrollTo(0, current);
      raf = requestAnimationFrame(loop);
    };

    const start = () => {
      if (!running) {
        running = true;
        raf = requestAnimationFrame(loop);
      }
    };

    const onWheel = (e: WheelEvent) => {
      if (e.ctrlKey) return;
      e.preventDefault();
      const delta = e.deltaMode === 1 ? e.deltaY * 18 : e.deltaY;
      target = clamp(target + delta * 1.1);
      start();
    };

    const onTouchStart = (e: TouchEvent) => {
      lastTouchY = e.touches[0].clientY;
    };
    const onTouchMove = (e: TouchEvent) => {
      const y = e.touches[0].clientY;
      const delta = lastTouchY - y;
      lastTouchY = y;
      target = clamp(target + delta * 1.2);
      start();
    };

    const onKey = (e: KeyboardEvent) => {
      const h = window.innerHeight;
      const map: Record<string, number> = {
        ArrowDown: 80,
        ArrowUp: -80,
        PageDown: h * 0.9,
        PageUp: -h * 0.9,
        Space: h * 0.85,
        End: document.documentElement.scrollHeight,
        Home: -document.documentElement.scrollHeight,
      };
      const k = e.code === "Space" ? "Space" : e.key;
      if (k in map) {
        e.preventDefault();
        target = clamp(target + map[k]);
        start();
      }
    };

    const onAnchorClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!a) return;
      const id = a.getAttribute("href")!.slice(1);
      if (!id) return;
      const el = document.getElementById(id);
      if (!el) return;
      e.preventDefault();
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      target = clamp(top);
      start();
    };

    const onResize = () => {
      target = clamp(target);
    };

    document.documentElement.style.scrollBehavior = "auto";
    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("keydown", onKey);
    document.addEventListener("click", onAnchorClick);
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onAnchorClick);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return null;
}

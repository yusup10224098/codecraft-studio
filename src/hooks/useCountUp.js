import { useEffect, useRef, useState } from "react";

/**
 * Animates a numeric value from 0 to the target once it becomes visible.
 * Non-numeric characters (e.g. "+", "/", "K") in the source string are preserved as a suffix.
 */
export function useCountUp(value, duration = 1500) {
  const numericMatch = String(value).match(/[\d.]+/);
  const target = numericMatch ? parseFloat(numericMatch[0]) : null;
  const suffix = numericMatch ? String(value).replace(numericMatch[0], "") : "";
  const prefix = numericMatch ? String(value).slice(0, numericMatch.index) : "";

  const [display, setDisplay] = useState(target === null ? String(value) : "0");
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    if (target === null) return;
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const animate = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplay(Math.round(target * eased).toString());
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [target, duration]);

  return { ref, text: `${prefix}${display}${suffix}` };
}

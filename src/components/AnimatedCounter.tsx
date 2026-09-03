import { useEffect, useRef, useState } from 'react';

interface AnimatedCounterProps {
  value: string;
  duration?: number;
}

const getInitialDisplayValue = (val: string) => {
  if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return val;
  }
  const match = val.match(/^([^0-9]*)([0-9]+(?:\.[0-9]+)?)(.*)$/);
  if (!match) return val;
  return `${match[1]}0${match[3]}`;
};

export default function AnimatedCounter({ value, duration = 1800 }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [displayValue, setDisplayValue] = useState(() => getInitialDisplayValue(value));

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          observer.disconnect();

          const match = value.match(/^([^0-9]*)([0-9]+(?:\.[0-9]+)?)(.*)$/);
          if (!match) {
            setDisplayValue(value);
            return;
          }

          const prefix = match[1];
          const target = parseFloat(match[2]);
          const suffix = match[3];
          const isDecimal = match[2].includes('.');
          const startTime = performance.now();

          const update = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out cubic: smooth deceleration toward target
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            const current = target * easeProgress;

            if (isDecimal) {
              setDisplayValue(`${prefix}${current.toFixed(1)}${suffix}`);
            } else {
              setDisplayValue(`${prefix}${Math.round(current)}${suffix}`);
            }

            if (progress < 1) {
              requestAnimationFrame(update);
            } else {
              setDisplayValue(value);
            }
          };

          requestAnimationFrame(update);
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [value, duration, hasAnimated]);

  return <span ref={ref}>{displayValue}</span>;
}

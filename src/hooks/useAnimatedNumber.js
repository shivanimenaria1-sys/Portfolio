import { useEffect, useState } from "react";

export function useAnimatedNumber(target, decimals = 0, duration = 900) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let frameId = 0;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const nextValue = target * progress;
      setValue(Number(nextValue.toFixed(decimals)));

      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      }
    };

    frameId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frameId);
  }, [decimals, duration, target]);

  return value;
}

import { useEffect, useState } from "react";
import Confetti from "react-confetti";

export function ConfettiCustom() {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (dimensions.width === 0 || dimensions.height === 0) return null; // Evita renderizar en SSR

  return (
    <Confetti
      tweenDuration={3000}
      recycle={false}
      width={dimensions.width}
      height={dimensions.height}
    />
  );
}

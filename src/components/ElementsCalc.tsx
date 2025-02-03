import React, { useState, useEffect, useRef } from "react";

interface ElementsCalcProps {
  text: string;
  separatorClass: string;
  wrapperClass: string;
}

const ElementsCalc: React.FC<ElementsCalcProps> = ({ text, separatorClass, wrapperClass }) => {
  const numberOfElements = 20;
  const duration = 2000; // Animation duration in ms

  const [maxTranslateX, setMaxTranslateX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const animationRef = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Get element width after mount
  useEffect(() => {
    if (containerRef.current) {
      const firstElement = containerRef.current.querySelector<HTMLDivElement>(`.${separatorClass}`);
      if (firstElement) {
        setMaxTranslateX(firstElement.offsetWidth);
      }
    }
  }, [separatorClass]); // Depend on separatorClass in case it changes dynamically

  // Animation loop
  useEffect(() => {
    if (!maxTranslateX) return;

    const step = maxTranslateX / (duration / 16); // Pixels per frame (assuming ~60 FPS)

    const animate = () => {
      setTranslateX((prev) => (prev + step >= maxTranslateX ? 0 : prev + step));
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [maxTranslateX]);

  return (
    <div ref={containerRef} className={wrapperClass} style={{ transform: `translateX(-${translateX}px)` }}>
      {Array.from({ length: numberOfElements }).map((_, index) => (
        <div key={index} className={separatorClass}>
          {text}
        </div>
      ))}
    </div>
  );
};

export default ElementsCalc;

import { useEffect, useState, useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
// App

const useCounter = ({ maxCount = 0 }) => {
  const [counter, setCounter] = useState(0);
  const elementToAnimate = useRef<HTMLHeadingElement>(null);

  const timeLine = useRef(gsap.timeline());

  const handleClick = () => {
    if (counter < maxCount) setCounter((prev) => prev + 1);
  };

  useLayoutEffect(() => {
    if (!elementToAnimate.current) return;

    //timeLine.current.to(elementToAnimate.current, { y: -10, duration: 0.2, ease: "ease.out" });
    //timeLine.current.to(elementToAnimate.current, { y: 0, duration: 1, ease: "bounce.out" });
    //timeLine.current.pause();

    // También puedo ponerlo así:
    timeLine.current
      .to(elementToAnimate.current, { y: -10, duration: 0.2, ease: "ease.out" })
      .to(elementToAnimate.current, { y: 0, duration: 1, ease: "bounce.out" })
      .pause();
  }, []);
  // Este se construye cuando ya se cargaron todos los elementos HTML.
  // Pero, funciona igual que useEffect

  useEffect(() => {
    //if (counter < maxCount) return;
    timeLine.current.play(0);
  }, [counter]);

  return { counter, elementToAnimate, handleClick };
};

export default useCounter;

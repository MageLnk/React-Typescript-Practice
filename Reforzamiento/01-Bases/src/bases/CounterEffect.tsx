import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";

// Interfaces
const MAXIMUN_COUNT = 10;

// App
const CounterEffect = () => {
  const [counter, setCounter] = useState(2);
  const counterElement = useRef<HTMLHeadingElement>(null);

  const handleClick = () => {
    if (counter < MAXIMUN_COUNT) setCounter((prev) => prev + 1);
  };

  useEffect(() => {
    if (counter < 10) return;

    console.log("Se llegó al valor máximo");

    const timeLine = gsap.timeline();
    timeLine.to(counterElement.current, { y: -10, duration: 0.2, ease: "ease.out" });
    timeLine.to(counterElement.current, { y: 0, duration: 1, ease: "bounce.out" });
  }, [counter]);

  return (
    <>
      <h1>CounterEffect: </h1>
      <h2 ref={counterElement}>{counter}</h2>

      <button onClick={handleClick}>+1</button>
    </>
  );
};

export default CounterEffect;

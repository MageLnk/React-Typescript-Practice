import { useEffect, useState } from "react";
import { gsap } from "gsap";

// Interfaces
const MAXIMUN_COUNT = 10;

// App
const CounterEffect = () => {
  const [counter, setCounter] = useState(2);

  const handleClick = () => {
    if (counter < MAXIMUN_COUNT) setCounter((prev) => prev + 1);
  };

  useEffect(() => {
    if (counter < 10) return;

    console.log("Se llegó al valor máximo");

    gsap.to("h2", { y: -10, duration: 0.2, ease: "ease.out" });
  }, [counter]);

  return (
    <>
      <h1>CounterEffect: </h1>
      <h2>{counter}</h2>

      <button onClick={handleClick}>+1</button>
    </>
  );
};

export default CounterEffect;

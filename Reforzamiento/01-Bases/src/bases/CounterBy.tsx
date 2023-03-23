import { useState } from "react";

// Interfaces
interface CounterProps {
  initialValue?: number;
}
// App
const Counter = ({ initialValue = 0 }: CounterProps) => {
  const [counter, setCounter] = useState<number>(initialValue);

  const handleClick = () => {
    setCounter((prev) => prev + 1);
  };

  return (
    <>
      <h1>Counter: {counter}</h1>

      <button onClick={handleClick}>+1</button>
    </>
  );
};

export default Counter;

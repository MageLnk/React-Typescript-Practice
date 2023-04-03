import { useState } from "react";
import FirstApp from "./FirstApp";

// Utils

// App
const CounterApp = () => {
  const [counter, setCounter] = useState(0);
  const newMessage = "Fernando";

  return (
    <>
      <FirstApp title="Ola k ase" /> <span>{newMessage}</span>
      <h1>Contador: {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>+1</button>
      <button onClick={() => setCounter(counter - 1)}>-1</button>
      <button disabled={counter === 0 && true} onClick={() => setCounter(0)}>
        Reset
      </button>
    </>
  );
};

export default CounterApp;

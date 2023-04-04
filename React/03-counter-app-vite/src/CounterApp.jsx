import { useState } from "react";
import PropTypes from "prop-types";
import FirstApp from "./FirstApp";

// Utils

// App
const CounterApp = ({ value = 0 }) => {
  const [counter, setCounter] = useState(value);

  return (
    <>
      <FirstApp title="Hola, soy Gokú" />
      <h1>Contador: </h1>
      <h2>{counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>+1</button>
      <button onClick={() => setCounter(counter - 1)}>-1</button>
      <button aria-label="btn-reset" disabled={counter === 0 && true} onClick={() => setCounter(value)}>
        Reset
      </button>
    </>
  );
};

export default CounterApp;

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};

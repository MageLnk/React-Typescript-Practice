import { useReducer } from "react";
import { CounterState } from "./interfaces/interfaces";
import { counterReducer } from "./state/counterReducer";
import * as CounterActions from "./actions/actions";

// STATE INICIAL

const INITIAL_STATE: CounterState = {
  counter: 0,
  previus: 0,
  changes: 0,
};

// App
const CounterReducerComponent = () => {
  const [counterState, dispatch] = useReducer(counterReducer, INITIAL_STATE);

  const onReset = () => {
    dispatch(CounterActions.doReset());
  };
  const increaseBy = (value: number) => {
    dispatch(CounterActions.doIncreaseBy(value));
  };

  return (
    <>
      <h1>Counter Reducer Segmentado: </h1>
      <pre>{JSON.stringify(counterState, null, 2)}</pre>

      <button onClick={onReset}>Reset</button>
      <button onClick={() => increaseBy(1)}>+1</button>
      <button onClick={() => increaseBy(5)}>+5</button>
      <button onClick={() => increaseBy(10)}>+10</button>
    </>
  );
};

export default CounterReducerComponent;

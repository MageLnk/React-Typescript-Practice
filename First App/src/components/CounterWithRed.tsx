import { useReducer } from "react";

const initialState = {
  count: 0,
};

type CountType = { type: "incrementar" } | { type: "decrementar" } | { type: "custom"; payload: number };

const countReducer = (state: typeof initialState, action: CountType) => {
  switch (action.type) {
    case "incrementar":
      return { ...state, count: state.count + 1 };

    case "decrementar":
      return { ...state, count: state.count - 1 };
    case "custom":
      return { ...state, count: action.payload };

    default:
      return state;
  }
};
// App
const CounterWithRed = () => {
  const [{ count }, dispatch] = useReducer(countReducer, initialState);
  return (
    <>
      <h2>Contador: {count}</h2>
      <button className="btn btn-outline-primary" onClick={() => dispatch({ type: "incrementar" })}>
        +1
      </button>
      <button className="btn btn-outline-primary" onClick={() => dispatch({ type: "decrementar" })}>
        -1
      </button>
      <button className="btn btn-outline-danger" onClick={() => dispatch({ type: "custom", payload: 100 })}>
        100
      </button>
    </>
  );
};

export default CounterWithRed;

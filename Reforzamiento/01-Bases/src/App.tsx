import Counter from "./bases/Counter";
import CounterBy from "./bases/CounterBy";
import CounterEffect from "./bases/CounterEffect";
import CounterHook from "./bases/CounterHook";
import CounterReducerComponent from "./counter-reducer/CounterReducer";

// App
const App = () => {
  return (
    <>
      <Counter initialValue={15} />
      <CounterBy />
      <CounterEffect />
      {/*Otro CounterEffect para el useRef*/}
      <CounterEffect />
      <CounterHook />
      <CounterReducerComponent />
    </>
  );
};

export default App;

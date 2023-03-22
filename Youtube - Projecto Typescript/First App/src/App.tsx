import Counter from "./components/Counter";
import User from "./components/User";

import TimerFather from "./components/TimerFather";
import CounterWithRed from "./components/CounterWithRed";
import Form from "./components/Form";

// App
const App = () => {
  return (
    <>
      <h1>Ola k ase, Typescript o k ase</h1>
      <hr />

      <h2>UseState</h2>
      <Counter />
      <User />

      <h2 className="mt-5">useEffect - useRef</h2>
      <TimerFather />

      <h2 className="mt-5">useReduces</h2>
      <CounterWithRed />

      <h2 className="mt-5">customHooks</h2>
      <Form />
    </>
  );
};

export default App;

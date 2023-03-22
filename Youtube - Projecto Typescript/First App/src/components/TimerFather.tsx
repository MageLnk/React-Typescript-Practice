import { useState } from "react";
import Timer from "./Timer";

//
const TimerFather = () => {
  const [miliSeconds, setMiliSeconds] = useState(1000);
  return (
    <>
      <span>Milisegundos: {miliSeconds}</span>
      <br />

      <button className="btn btn-outline-success" onClick={() => setMiliSeconds(1000)}>
        1000
      </button>
      <button className="btn btn-outline-success" onClick={() => setMiliSeconds(2000)}>
        2000
      </button>
      <button className="btn btn-outline-success" onClick={() => setMiliSeconds(3000)}>
        3000
      </button>

      <Timer miliseconds={miliSeconds} />
    </>
  );
};

export default TimerFather;

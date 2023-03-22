import { useEffect, useRef, useState } from "react";

type TimeArgs = {
  miliseconds: number;
};
// App
const Timer = ({ miliseconds }: TimeArgs) => {
  const [seconds, setSeconds] = useState(0);
  const ref = useRef<NodeJS.Timer>();

  useEffect(() => {
    ref.current && clearInterval(ref.current);
    ref.current = setInterval(() => setSeconds((s) => s + 1), miliseconds);
  }, [miliseconds]);

  return (
    <>
      <h4>
        Time: <small>{seconds}</small>
      </h4>
    </>
  );
};

export default Timer;

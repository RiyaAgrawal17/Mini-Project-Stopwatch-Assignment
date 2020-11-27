import React, { useState } from "react";
import Show from "./Components/Show";
import Btn from "./Components/BtnDisplay";
import "./App.css";

function App() {
  const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });
  const [timer, setTimer] = useState();
  const [status, setStatus] = useState(0);

  const start = () => {
    stopwatch();
    setStatus(1);
    setTimer(setInterval(stopwatch, 10));
  };

  var newMs = time.ms,
    newS = time.s,
    newM = time.m,
    newH = time.h;

  const stopwatch = () => {
    if (newM === 60) {
      newH++;
      newM = 0;
    }
    if (newS === 60) {
      newM++;
      newS = 0;
    }
    if (newMs === 100) {
      newS++;
      newMs = 0;
    }
    newMs++;
    return setTime({ ms: newMs, s: newS, m: newM, h: newH });
  };

  const stop = () => {
    clearInterval(timer);
    setStatus(2);
  };

  const reset = () => {
    clearInterval(timer);
    setStatus(0);
    setTime({ ms: 0, s: 0, m: 0, h: 0 });
  };

  const resume = () => start();
  return (
    <div className="main-section">
      <div className="clock-holder">
        <div className="stopwatch">
          <Show time={time} />
          <Btn
            start={start}
            stop={stop}
            resume={resume}
            status={status}
            reset={reset}
          />
        </div>
      </div>
    </div>
  );
}

export default App;

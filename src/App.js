import React, { useState } from "react";
import Display from "./Components/Show";
import Btn from "./Components/Button";
import "./App.css";

function App() {
  const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });
  const [timer, setTimer] = useState();
  const [status, setStatus] = useState(0);
  // Not started = 0
  // started = 1
  // stopped = 2

  const start = () => {
    run();
    setStatus(1);
    setTimer(setInterval(run, 10));
  };

  var newMs = time.ms,
    newS = time.s,
    newM = time.m,
    newH = time.h;

  const run = () => {
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
          <Display time={time} />
          <Btn
            status={status}
            resume={resume}
            reset={reset}
            stop={stop}
            start={start}
          />
        </div>
      </div>
    </div>
  );
}

export default App;

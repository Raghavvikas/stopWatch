import React, { useEffect, useRef, useState } from "react";

const UseTimer = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [seconds, setSeconds] = useState(0);

  var interval = useRef();

  const handleStart = () => {
    setIsRunning(true);
  };

  const handlePause = () => {
    clearInterval(interval.current);
    setIsRunning(false);
  };

  const handleResume = () => {
    setIsRunning(true);
  };

  const handleReset = () => {
    clearInterval(interval.current);
    setIsRunning(false);
    setSeconds(0);
  };

  const startTimer = () => {
    const hour = Math.floor(seconds / 3600, 10);
    const minute = Math.floor((seconds % 3600) / 60);
    const second = Math.floor(seconds % 60);

    return `${hour.toString().padStart(2, "0")} : ${minute
      .toString()
      .padStart(2, "0")} : ${second.toString().padStart(2, "0")}`;
  };

  useEffect(() => {
    if (isRunning) {
      interval.current = setInterval(() => {
        setSeconds((prevTime) => prevTime + 1);
      }, 1000);
    }
    return () => clearInterval(interval.current);
  }, [isRunning]);

  return (
    <>
      <div className="container">
        <div>
          <span id="timer">{startTimer()}</span>{" "}
        </div>
        <div className="buttons">
          <button id="start" onClick={handleStart}>
            Start
          </button>
          <button id="pause" onClick={handlePause}>
            Pause
          </button>
          <button id="resume" onClick={handleResume}>
            Resume
          </button>
          <button id="reset" onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>
    </>
  );
};

export default UseTimer;

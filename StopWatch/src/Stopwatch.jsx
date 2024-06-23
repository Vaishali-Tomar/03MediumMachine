import React, { useState, useRef } from 'react';
import './Stopwatch.css';

const StopWatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);
  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
      timerRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
  };

  const stopTimer = () => {
    if (isRunning) {
      setIsRunning(false);
      clearInterval(timerRef.current);
    }
  };

  const resetTimer = () => {
    setIsRunning(false);
    clearInterval(timerRef.current);
    setTime(0);
  };

  const formatTime = (time) => {
    const getSeconds = `0${time % 60}`.slice(-2);
    const minutes = Math.floor(time / 60);
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(time / 3600)}`.slice(-2);

    return `${getHours}:${getMinutes}:${getSeconds}`;
  };
  return (
    <div className="stopwatch">
      <h1>Stopwatch</h1>
      <div className="time-display">{formatTime(time)}</div>
      <div className="buttons">
        <button onClick={startTimer}>START</button>
        <button onClick={stopTimer}>STOP</button>
        <button onClick={resetTimer}>RESET</button>
      </div>
    </div>
  )
}

export default StopWatch

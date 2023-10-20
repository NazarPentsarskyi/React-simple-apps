import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const PomodoroTimer = () => {
  const [activeTime, setActiveTime] = useState(1500);
  const [breakTime, setBreakTime] = useState(300);
  const [isRunning, setIsRunning] = useState(false);
  const [isBreak, setIsBreak] = useState(false);
  const [initialActiveTime, setInitialActiveTime] = useState(1500);
  const [initialBreakTime, setInitialBreakTime] = useState(300);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setIsBreak(false);
    setActiveTime(initialActiveTime);
    setBreakTime(initialBreakTime);
  };

  const handlerActiveTime = (event) => {
    setInitialActiveTime(parseInt(event.target.value));
  };

  const handlerBreakTime = (event) => {
    setInitialBreakTime(parseInt(event.target.value));
  };

  const handleKeyDownActive = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      setIsRunning(true);
    }
  };

  const handleKeyDownBreak = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      setIsBreak(true);
    }
  };

  useEffect(() => {
    let intervalId;

    if (isRunning && activeTime > 0) {
      intervalId = setInterval(() => {
        setActiveTime(prevTime => prevTime - 1);
      }, 1000);
    } else if (isRunning && activeTime === 0 && !isBreak) {
      setIsBreak(true);
      setActiveTime(breakTime);
    } else if (isRunning && activeTime === 0 && isBreak) {
      setIsBreak(false);
      setActiveTime(initialActiveTime);
    }

    return () => clearInterval(intervalId);
  }, [isRunning, activeTime, isBreak, breakTime, initialActiveTime]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60).toString().padStart(2, '0');
    const seconds = (time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  return (
    <>
      <button><Link to="/"> Home </Link></button>
      <h2>Pomodoro Timer</h2>
      <br />
      <h3 className={isBreak ? 'breakTime' : 'actionTime'}>{isBreak ? "Break Time" : "Work Time"}</h3>
      <h3 className="lookTime">{formatTime(activeTime)}</h3><p>min:sec</p>

      <form className="formTimer">
        <label htmlFor="active">Active :
          <input
            type="number"
            id="active"
            name="active"
            value={initialActiveTime}
            onChange={handlerActiveTime}
            placeholder="active time"
            onKeyDown={handleKeyDownActive}
          />
        </label>
        <label htmlFor="break">Break :
          <input
            type="number"
            id="break"
            name="break"
            value={initialBreakTime}
            onChange={handlerBreakTime}
            placeholder="break time"
            onKeyDown={handleKeyDownBreak}
          />
        </label>
      </form>

      <div className="board">
        <button onClick={handleStart}>Start</button>
        <button onClick={handlePause}>Pause</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </>
  )
};

export default PomodoroTimer;

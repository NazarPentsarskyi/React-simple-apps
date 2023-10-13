import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const PomodoroTimer = () => {

  const [activeTime, setActiveTime] = useState(5);
  const [breakTime, setBreakTime] = useState(5);
  const [isRunning, setIsRunning] = useState(false);
  const [isBreak, setIsBreak] = useState(false);
  
  const handleStart = () => {
    setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setIsBreak(false);
    setActiveTime(5);
    setBreakTime(5);
  };

  const handlerActiveTime = (event) => {
    setActiveTime(parseInt(event.target.value));
  };

  const handlerBreakTime = (event) => {
    setBreakTime(parseInt(event.target.value));
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
      setActiveTime(5);
    }
  
    return () => clearInterval(intervalId);
  },[isRunning, activeTime, isBreak, breakTime]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60).toString().padStart(2, '0');
    const seconds = (time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  return (
    <>
      <button><Link to="/"> Home </Link></button>
      <h2>PomodoroTimer</h2>
      <br />
      <h3 className={isBreak ? 'breakTime' : 'actionTime'}>{isBreak ? "Break Time" : "Work Time"}</h3>
      <h3 className="lookTime">{formatTime(activeTime)}</h3><p>min:sec</p>
      
      <form className="formTimer">
        <label htmlFor="active">Active : 
          <input
            type="number"
            id="active"
            name="active"
            value = {activeTime}
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
            value = {breakTime}
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
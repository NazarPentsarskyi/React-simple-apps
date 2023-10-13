import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const PomodoroTimer = () => {

  const [activeTime, setActiveTime] = useState(1);
  const [delayTime, setDelayTime] = useState(1);
  const [timer, setTimer] = useState(activeTime * 60);
  const [isRunning, setIsRunning] = useState(false);
  
  const handleStart = () => {
    setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTimer(activeTime * 60);
  };

  const handlerActiveTime = (event) => {
    setActiveTime(parseInt(event.target.value));
  };

  const handlerDelayTime = (event) => {
    setDelayTime(parseInt(event.target.value));
  };

// const handleKeyDown = (event) => {
//   if (event.key === 'Enter') {
//     event.preventDefault();
//     setIsRunning(true);
//     // setIsRunningDel(true);
//   }
// };

  useEffect(() => {
    let intervalId;
    
    if (isRunning && timer > 0) {
      intervalId = setInterval(() => {
        setTimer(prevTime => prevTime - 1);
      }, 1000);
    }
  
    return () => {
      clearInterval(intervalId);
    }    
  },[isRunning, timer]);

  const formatTime = time => {
    const minutes = Math.floor(time / 60).toString().padStart(2, '0');
    const seconds = (time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  }

  return (
    <>
      <button><Link to="/"> Home </Link></button>
      <h2>PomodoroTimer</h2>
      <br />
      <div className="lookTime">
        <div>
          <h3>{isRunning ? "Running" : "Pause"}</h3>
          <h3>{formatTime(timer)} min:sec</h3>
        </div>
        <div>
          <h3>{isRunning ? "Running" : "Pause"}</h3>
          <h3>{formatTime(timer)} min:sec</h3>
        </div>
      </div>
      <form>
        <label htmlFor="active">Active time (minutes): 
          <input
            type="number"
            id="active"
            name="active"
            value = {activeTime}
            onChange={handlerActiveTime}
            placeholder="active time"
            // onKeyDown={handleKeyDown}
          />
        </label>
        <label htmlFor="delay">Delay time (minutes): 
          <input
            type="number"
            id="delay"
            name="delay"
            value = {delayTime}
            onChange={handlerDelayTime}
            placeholder="delay time"
            // onKeyDown={handleKeyDown}
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

export default PomodoroTimer
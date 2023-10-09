import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Timer = () => {

const [time, setTime] = useState(0);
const [isRunning, setIsRunning] = useState(false);

const handleStart = () => {
  setIsRunning(true);
};

const handleStop = () => {
  setIsRunning(false);
};

const handleReset = () => {
  setTime(0);
  setIsRunning(false);
};

useEffect(() => {
  let timeoutId;

  if (isRunning) {
    timeoutId = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000);
  }

  return () => clearInterval(timeoutId);
},[isRunning]);

  return (
    <>
      <button><Link to="/"> Home </Link></button>
      <h2>Timer</h2>
      <br />

      <h3>{time} seconds</h3>
      <div className='board'>
        <button onClick = {handleStart}>Start</button>
        <button onClick = {handleStop}>Stop</button>
        <button onClick = {handleReset}>Reset</button>
      </div>
    </> 
  )
}

export default Timer
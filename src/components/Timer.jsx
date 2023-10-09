import { Link } from "react-router-dom";

import { useEffect, useState } from "react";

const Timer = () => {

const [time, setTime] = useState(0);
const [isRunning, setIsRunning] = useState(false);

//const startTime = Math.floor(Date.now() / 1000);

const handleStart = () => {
  setTime(0);
  setIsRunning(true);
  
  if(isRunning === false) {
    setTime(time);
  }
}

const handleStop = () => {
  setIsRunning(false);
}

const handleReset = () => {
  setTime(0);
  setIsRunning(false);
}

useEffect (() => {
  
  if ( isRunning === true) {
  
    const timeoutId = setTimeout(() => {
      setTime(prevTime => prevTime + 1);
  }, 1000)

  return () => {
    if(isRunning === false) {
      clearTimeout(timeoutId);
      setIsRunning(false);
    }
  }
}
},[time, isRunning])

  return (
    <>
      <button><Link to="/"> Home </Link></button>
      <h2>Timer</h2>
      <br />

      <h3>{time}</h3>
      <div className='board'>
        <button onClick = {handleStart}>Start</button>
        <button onClick = {handleStop}>Stop</button>
        <button onClick = {handleReset}>Reset</button>
      </div>
    </> 
  )
}

export default Timer
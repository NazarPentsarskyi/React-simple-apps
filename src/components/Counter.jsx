import { useState } from "react";
import { Link } from "react-router-dom";

const Counter = () => {

const [count, setCount] = useState(0);

const handleIncrement = () => {
  setCount((prevCount) => prevCount + 1);
};

const handleDecrement = () => {
  setCount((prevCount) => prevCount - 1);
};

const handleReset = () => {
  setCount(0);
};

  return (
    <>
      <button><Link to="/"> Home </Link></button>
      <h2>Counter</h2>
      <br />
      <h3>Counter: {count}</h3>
      <div className='board'>
        <button className='square' onClick={handleIncrement}>+</button>
        <button className='square' onClick={handleDecrement}>-</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </>
  )
}

export default Counter
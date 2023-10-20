import { useState } from "react";
import { Link } from "react-router-dom";

const Calculator = () => {

  const [result, setResult] = useState('');

  const handleClick = (event) => {
        
    if (event.target.name === '.' && result.includes('.')) {
      return;
    }
  
    if (event.target.name === '0' && result === '0') {
      return;
    }

    setResult(result.concat(event.target.name));
  };

  const handleReset = () => {
    setResult('');
  };

  const handleBack = () => {
    setResult(result.slice(0, -1));
  };

  const handleCalculate = () => {
    try {
      setResult(eval(result).toString());
    }
    catch (error) {
      setResult('Error');
    }
  };

  return (
    <>
      <button><Link to="/"> Home </Link></button>
      <h2>Calculator</h2>
      <form className="formCulculator">
        <label htmlFor="calculatorDisplay">
          <input
            type="text"
            id="calculatorDisplay"
            name="calculatorDisplay"
            value={result}
            disabled
          />
        </label>
        </form>
      <div className="boardCalculator">
        <button name = '7' onClick={handleClick}>7</button>
        <button name = '8' onClick={handleClick}>8</button>
        <button name = '9' onClick={handleClick}>9</button>
        <button name = '/' onClick={handleClick} className="highlight">/</button>
        <button name = '4' onClick={handleClick}>4</button>
        <button name = '5' onClick={handleClick}>5</button>
        <button name = '6' onClick={handleClick}>6</button>
        <button name = '*' onClick={handleClick} className="highlight">*</button>
        <button name = '1' onClick={handleClick}>1</button>
        <button name = '2' onClick={handleClick}>2</button>
        <button name = '3' onClick={handleClick}>3</button>
        <button name = '-' onClick={handleClick}className="highlight">-</button>
        <button className="highlight" onClick={handleBack}>C</button>
        <button name = '0' onClick={handleClick}>0</button>
        <button name = '.' onClick={handleClick}className="highlight">.</button>
        <button name = '+' onClick={handleClick}className="highlight">+</button>
        <button className="highlight" onClick={handleReset}>Clear</button>
        <button className="equal highlight" onClick={handleCalculate}>=</button>
      </div>
    </> 
  )
}

export default Calculator
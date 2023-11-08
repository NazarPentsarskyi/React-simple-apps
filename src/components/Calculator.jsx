import { useState } from "react";
import { Link } from "react-router-dom";

const Calculator = () => {

  const [operand, setOperand] = useState('');
  const [operator, setOperator] = useState('');
  const [result, setResult] = useState('');

  const handleOperand = (event) => {
    if (result === 'Error') {
      setResult('');
    }
        
    if (event.target.name === '.' && operand.includes('.')) {
      return;
    }
  
    if (event.target.name === '0' && operand === '0') {
      return;
    }

    setOperand(operand + event.target.name);
  };

  const handleOperator = (event) => {
    if (operand !== '') {
      setOperator(event.target.name);
      setResult(operand);
      setOperand('');
    }
  };

  const handleReset = () => {
    setOperand('');
    setOperator('');
    setResult('');
  };

  const handleBack = () => {
    if (operand !== '') {
      setOperand(operand.slice(0, -1));
    } else if (operator !== '') {
      setOperator('');
    } else{
    setResult(result.slice(0, -1));
    }
  };

  const handlePositiveNegative = () => {
    if (operand !== '') {
      setOperand((prevOperand) => -prevOperand);
    }
  };

  const handleCalculate = () => {
    if (operand !== '' && operator !== '') {
      let calc = eval(result + operator + operand);
      try {
        setResult(operand.includes('.') ? calc.toFixed(3).toString() : calc.toString());
        setOperand('');
        setOperator('');
      }
      catch (error) {
        setResult('Error');
      }
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
            value={result + operator + operand}
            disabled
          />
        </label>
        </form>
      <div className="boardCalculator">
        <button className="highlight" onClick={handleReset}>C</button>
        <button className="highlight" onClick={handleBack}>{`<x`}</button>
        <button name = ' ' className="highlight" onClick={handlePositiveNegative}>+/-</button>
        <button name = '/' className="highlight" onClick={handleOperator}>/</button>
        <button name = '7' onClick={handleOperand}>7</button>
        <button name = '8' onClick={handleOperand}>8</button>
        <button name = '9' onClick={handleOperand}>9</button>
        <button name = '*' className="highlight" onClick={handleOperator}>x</button>
        <button name = '4' onClick={handleOperand}>4</button>
        <button name = '5' onClick={handleOperand}>5</button>
        <button name = '6' onClick={handleOperand}>6</button>
        <button name = '-' className="highlight" onClick={handleOperator}>-</button>
        <button name = '1' onClick={handleOperand}>1</button>
        <button name = '2' onClick={handleOperand}>2</button>
        <button name = '3' onClick={handleOperand}>3</button>
        <button name = '+' className="highlight" onClick={handleOperator}>+</button>
        <button name = '0' onClick={handleOperand}>0</button>
        <button name = '.' className="highlight" onClick={handleOperand}>.</button>
        <button className="equal highlight" onClick={handleCalculate}>=</button>
      </div>
    </> 
  )
}

export default Calculator
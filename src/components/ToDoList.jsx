import { useState } from "react";
import { Link } from "react-router-dom";

const ToDoList= () => {

  const[whatToDo, setWhatToDo] = useState([]);
  const[inputValue, setInputValue] = useState('');
  const[newKey, setNewKey] = useState(0);
  
  const handleToDoWrite = (event) => {
    if (event.key === 'Enter' || (event.type === 'click' && inputValue)){
      event.preventDefault();
      const newToDoItem = inputValue.trim();
      if (newToDoItem) {
        setWhatToDo([...whatToDo, {text: newToDoItem, key: newKey}]);
        setInputValue('');
        setNewKey(newKey => newKey + 1)
      }
    }
  };

  const handleInputValue = (event) => {
    setInputValue(event.target.value)
  };


  return (
    <>
      <button><Link to="/"> Home </Link></button>
      <h2>To do list</h2>
      <br />
      <form>
        <label htmlFor="toDo">
          <input
            name="toDo"
            id="toDo"
            value = {inputValue}
            onChange={handleInputValue}
            onKeyDown={handleToDoWrite} />
          <button onClick={handleToDoWrite}>ok</button>
        </label>
      </form>
      <ol>
        {whatToDo.map((item) => <li key = {item.key}>
          {item.text}
        </li>)}
      </ol>
    </>
  )
};

export default ToDoList;

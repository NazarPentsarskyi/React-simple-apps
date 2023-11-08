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

  const handleToDoRemove = (removedKey) => {
    const updateToDoList = whatToDo.filter((item) => item.key != removedKey);
    setWhatToDo(updateToDoList);

  };

  const handleInputValue = (event) => {
    setInputValue(event.target.value)
  };

  return (
    <>
      <button><Link to="/"> Home </Link></button>
      <h2>To do list</h2>
      <br />
      <div className="todolist">
        <form className="formTodolist">
          <input
          value = {inputValue}
          onChange={handleInputValue}
          onKeyDown={handleToDoWrite} 
          />
          <button
          onClick={handleToDoWrite}>
            add
          </button>
        </form>
        <ol>
          {whatToDo.map((item) => (
            <li 
            className="todoli"
            key = {item.key}>
              {item.text}
              <button 
              onClick={() => handleToDoRemove(item.key)}>
                X
              </button>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
};

export default ToDoList;

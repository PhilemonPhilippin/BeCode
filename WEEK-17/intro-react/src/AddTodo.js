import "./AddTodo.css";
import React, { useRef } from "react";

function AddTodo() {
  const inputRef = useRef();

  function clickHandler() {
    const inputElement = inputRef.current;
    console.log(inputElement.value);
  }

  return (
    <div className="add-todo-container">
      <div className="input-add-todo-container">
        <input ref={inputRef} type="text" placeholder="Type a new todo" />
      </div>
      <div className="btn-add-todo-container">
        <button onClick={clickHandler} >Add Todo</button>
      </div>
    </div>
  );
}

export default AddTodo;

import React, { useState, useEffect } from "react";
import "./Todos.css";

function Todos({ addingTodo }) {
  const [todos, setTodos] = useState([]);
  const [idCounter, setIdCounter] = useState(1);
  const LSKEY = "MyTodoApp";

  useEffect(() => {
    const localTodos = JSON.parse(
      window.localStorage.getItem(LSKEY + ".todos")
    );
    if (localTodos && localTodos.length > 0) {
      setTodos(localTodos);
      setIdCounter(localTodos[localTodos.length - 1].id + 1);
    }
  }, []);

  useEffect(() => {
    if (addingTodo) {
      const newTodo = {
        id: idCounter,
        text: addingTodo,
        checked: false,
      };

      window.localStorage.setItem(
        LSKEY + ".todos",
        JSON.stringify([...todos, newTodo])
      );

      setTodos((prevTodos) => [...prevTodos, newTodo]);
      setIdCounter((prevId) => prevId + 1);
    }
  }, [addingTodo]);

  const handleClick = (e) => {
    const elemKey = parseInt(e.target.parentElement.getAttribute("data-key"));
    const index = todos.findIndex((td) => td.id === elemKey);
    if (index !== -1) {
      const newTodos = [...todos];
      newTodos[index] = {
        ...newTodos[index],
        checked: !newTodos[index].checked,
      };
      setTodos(newTodos);
    }
  };

  return (
    <div className="todos-container">
      <h3>Todos</h3>
      <div className="todos-list-container">
        {todos &&
          todos.map((todo) => (
            <div key={todo.id} data-key={todo.id}>
              <input
                type="checkbox"
                id={`${todo.text}`}
                onChange={handleClick}
              />
              <label htmlFor={`${todo.text}`}>{todo.text}</label>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Todos;

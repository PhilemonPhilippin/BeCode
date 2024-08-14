import React, { useState } from "react";
import "./Todos.css";

function Todos() {
  const initialTodos = [
    { id: 1, text: "Learn React", checked: false },
    { id: 2, text: "Be Awesome!", checked: false },
    { id: 3, text: "And dont be lame.", checked: false },
  ];

  const [todos, setTodos] = useState(initialTodos);

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
        {todos.map((todo) => (
          <div key={todo.id} data-key={todo.id}>
            <input type="checkbox" id={`${todo.text}`} onChange={handleClick} />
            <label htmlFor={`${todo.text}`}>{todo.text}</label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Todos;

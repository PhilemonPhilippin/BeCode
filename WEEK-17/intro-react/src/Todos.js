import React, { useState } from "react";
import "./Todos.css";

function Todos() {
  const initialTodos = [
    { text: "Learn React", checked: false },
    { text: "Be Awesome!", checked: false },
    { text: "And dont be lame.", checked: false },
  ];
  const [todos, setTodos] = useState(initialTodos);
  const handleClick = (e) => {
    e.target.setAttribute("checked", "");
  }

  return (
    <div className="todos-container">
      <h3>Todos</h3>
      <div className="todos-list-container">
        {todos.map((todo) => (
          <div>
            <input
              type="checkbox"
              id={`${todo.text}`}
              onChange={handleClick}
            />
            <label for={`${todo.text}`}>{todo.text}</label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Todos;

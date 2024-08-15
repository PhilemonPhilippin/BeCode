import { useState } from "react";
import Header from "./Header";
import AddTodo from "./AddTodo";
import Todos from "./Todos";

function Todolist() {
  const [todoToAdd, setTodoToAdd] = useState(null);

  const handleTodoFromChild = (todo) => {
    setTodoToAdd(todo);
  };

  return (
    <div className="todolist-container">
      <Header />
      <AddTodo sendTodoToParent={handleTodoFromChild} />
      <Todos addingTodo={todoToAdd} />
    </div>
  );
}

export default Todolist;

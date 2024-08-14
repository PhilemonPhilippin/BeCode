import AddTodo from "./AddTodo";
import Header from "./Header";
import Todos from "./Todos";

function Todolist() {
  return (
    <div className="todolist-container">
      <Header />
      <AddTodo />
      <Todos />
    </div>
  );
}

export default Todolist;

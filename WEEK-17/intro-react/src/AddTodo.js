import "./AddTodo.css";

function AddTodo() {
  return (
    <div className="add-todo-container">
      <div className="input-add-todo-container">
        <input type="text" placeholder="Type a new todo" />
      </div>
      <div className="btn-add-todo-container">
        <button type="submit">Add Todo</button>
      </div>
    </div>
  );
}

export default AddTodo;

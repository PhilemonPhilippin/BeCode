import "./Todos.css";

function Todos() {
  return (
    <div className="todos-container">
      <h3>Todos</h3>
      <div className="todos-list-container">
        <div className="learn-react-container">
          <input type="checkbox" id="learn-react" />
          <label for="learn-react">Learn React</label>
        </div>
        <div className="be-awesome-container">
          <input type="checkbox" id="be-awesome" />
          <label for="be-awesome">Be Awesome!</label>
        </div>
      </div>
    </div>
  );
}

export default Todos;

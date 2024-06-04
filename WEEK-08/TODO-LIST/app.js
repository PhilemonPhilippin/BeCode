const addBtn = document.querySelector(".btn-add");
const todoInput = document.getElementById("todo");
const todoList = document.querySelector(".todos");
let counter = 0;

addBtn.addEventListener("click", () => {
  const todo = todoInput.value;
  addToDo(todo);
});

function addToDo(todo) {
  let todos = getToDos();
  todos.push(todo);
  setToDos(todos);
  addTodoHtml(todo);
}

function addTodoHtml(todo) {
  let id = counter;
  const todoItem = document.createElement("li");
  todoItem.innerText = todo;
  const removeBtn = document.createElement("button");
  todoItem.setAttribute("id", `i${counter}`);
  removeBtn.innerText = "delete";
  removeBtn.addEventListener("click", () => {
    deleteTodo(todo);
    deleteTodoHtml(id);
  });
  todoItem.appendChild(removeBtn);
  todoList.appendChild(todoItem);
  counter++;
}

function deleteTodoHtml(id) {
  let item = document.getElementById(`i${id}`);
  item.remove();
}

function getToDos() {
  let todosFromStorage = localStorage.getItem("todos");
  if (!!todosFromStorage) todosFromStorage = JSON.parse(todosFromStorage);
  else todosFromStorage = [];
  return todosFromStorage;
}

function setToDos(todos) {
  if (todos != "") {
    const todosToStore = JSON.stringify(todos);
    localStorage.setItem("todos", todosToStore);
  } else {
    localStorage.removeItem("todos");
  }
}

function deleteTodo(todo) {
  let todos = getToDos();
  const indexOfTodo = todos.indexOf(todo);
  if (indexOfTodo !== -1) {
    todos.splice(indexOfTodo, 1);
  }
  setToDos(todos);
}

localStorage.clear();

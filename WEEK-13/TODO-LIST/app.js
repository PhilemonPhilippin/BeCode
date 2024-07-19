const todoList = document.querySelector(".todolist");
const btnRefresh = document.querySelector(".btn-refresh");
const uriBase = "http://localhost:3000/api/todo";

btnRefresh.addEventListener("click", async () => {
  const todos = await getAll();
  if (todos) {
    refreshList(todos);
  }
});

async function getAll() {
  try {
    const response = await fetch(uriBase);
    const json = await response.json();
    console.log(json);
    return json;
  } catch (err) {
    console.log(err);
  }
}

function refreshList(todos) {
  todoList.innerHTML = "";
  todos.forEach((todo) => {
    const listItem = document.createElement("li");
    listItem.innerText = todo.text;
    todoList.appendChild(listItem);
  });
}

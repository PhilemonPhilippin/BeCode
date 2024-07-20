const todoList = document.querySelector(".todolist");
const btnRefresh = document.querySelector(".btn-refresh");
const btnSubmit = document.querySelector(".btn-submit");
const inputText = document.getElementById("todo");
const uriBase = "http://localhost:3000/api/todo";

btnRefresh.addEventListener("click", async () => {
  const todos = await getAll();
  if (todos) {
    refreshList(todos);
  }
});

btnSubmit.addEventListener("click", async () => {
  await post();
});

async function getAll() {
  try {
    const response = await fetch(uriBase);
    const json = await response.json();
    return json;
  } catch (err) {
    console.log(err);
  }
}

function refreshList(todos) {
  todoList.innerHTML = "";
  todos.forEach((todo) => {
    const listItem = document.createElement("li");
    listItem.innerText = todo["text"];
    const anchorDelete = document.createElement("a");
    anchorDelete.innerText = "delete";
    anchorDelete.addEventListener("click", async () => deleteTodo(todo["_id"]));
    listItem.appendChild(anchorDelete);
    todoList.appendChild(listItem);
  });
}

async function post() {
  try {
    const response = await fetch(uriBase, {
      method: "POST",
      body: JSON.stringify({ text: inputText.value }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    responseObject = await response.json();
  } catch (err) {
    console.log(err);
  }
}

async function deleteTodo(id) {
  try {
    const response = await fetch(uriBase + "/" + id, {
      method: "DELETE",
    });
  } catch (err) {
    console.log(err);
  }
}

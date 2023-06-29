const todoForm = document.getElementById("todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.getElementById("todo-list");
let todos = []; //Int type

function savetodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}
function deletetodo(event) {
  const todoli = event.target.parentElement;
  const todoId = todoli.id; // String type
  todoli.remove();
  todos = todos.filter((item) => item.id != todoId);
  savetodos();
}

function outputtodo(newTodo) {
  const todo = document.createElement("li");
  todo.id = newTodo.id;
  const text = document.createElement("span");
  const btn = document.createElement("button");
  todo.appendChild(text);
  text.innerText = newTodo.text;
  todo.appendChild(btn);
  btn.innerText = "❌";
  btn.addEventListener("click", deletetodo);
  todoList.appendChild(todo);
}

function ontodosubmit(info) {
  info.preventDefault();
  const newtodoInput = todoInput.value;
  todoInput.value = "";
  const newtodoObj = {
    text: newtodoInput,
    id: Date.now(),
  };
  todos.push(newtodoObj);
  outputtodo(newtodoObj);
  savetodos();
}

todoForm.addEventListener("submit", ontodosubmit);
const savedtodos = localStorage.getItem("todos");

if (savedtodos != null) {
  const parsedtodos = JSON.parse(savedtodos);
  todos = parsedtodos;
  parsedtodos.forEach(outputtodo);
}

const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function handleToDoSubmit(event) {
  event.preventDefault();

  const newToDo = toDoInput.ariaValueMax;

  toDoInput.value = "";

  const newToDoObject = {
    text: newToDo,
    id: Date.now(),
  };

  toDos.push(newToDoObject);

  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);

  toDos = parsedToDos;
}

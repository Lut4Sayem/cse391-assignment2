// DOM ELEMENTS


let input = document.getElementById("task-input");
let addBtn = document.getElementById("add-btn");
let taskList = document.getElementById("task-list");


// DATA STORAGE ARRAY

let tasks = [];


// SAVE TASKS TO LOCALSTORAGE


function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}


// LOAD TASKS FROM LOCALSTORAGE


function loadTasks() {
  let stored = localStorage.getItem("tasks");

  if (stored) {
    tasks = JSON.parse(stored);

    tasks.forEach(function (task) {
      createTaskElement(task);
    });
  }
}


// CREATE TASK ELEMENT FUNCTION


function createTaskElement(taskObject) {
  let li = document.createElement("li");
  let checkbox = document.createElement("input");
  let span = document.createElement("span");
  let deleteBtn = document.createElement("button");

  // Checkbox setup
  checkbox.type = "checkbox";
  checkbox.checked = taskObject.completed;

  // Task text
  span.textContent = taskObject.text;
  span.classList.add("task-text");

  if (taskObject.completed) {
    span.classList.add("completed");
  }

  // Delete button
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");

  // ✅ Checkbox logic
  checkbox.addEventListener("change", function () {
    taskObject.completed = checkbox.checked;
    span.classList.toggle("completed");
    saveTasks();
  });

  // ✅ Delete logic
  deleteBtn.addEventListener("click", function () {
    tasks = tasks.filter(function (t) {
      return t !== taskObject;
    });

    saveTasks();
    li.remove();
  });

  // Append elements
  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(deleteBtn);

  taskList.appendChild(li);
}


// ADD BUTTON LOGIC


addBtn.addEventListener("click", function () {
  let taskText = input.value.trim();

  if (taskText === "") return;

  let taskObject = {
    text: taskText,
    completed: false
  };

  tasks.push(taskObject);

  saveTasks();
  createTaskElement(taskObject);

  input.value = "";
});


// INITIAL LOAD


loadTasks();
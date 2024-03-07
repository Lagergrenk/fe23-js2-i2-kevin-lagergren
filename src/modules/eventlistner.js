import { postTask, patchTask, deleteTask } from "./firebasehandler.js";
import { refreshTasks } from "../main.js";

// Porpuse: This module is responsible for handling the events that occur in the application.

// Initialize eventlistners
export function initEventlistner() {
  document.querySelector(".header").addEventListener("click", (e) => {
    if (e.target.className === "add-task") {
      formHandler(e);
    }
  });
  document.querySelector(".main").addEventListener("click", (e) => {
    switch (e.target.className) {
      case "assign-btn":
        assignNameToTaskHandler(e);
        break;
      case "done-btn":
        doneButtonHandler(e);
        break;
      case "remove-btn":
        removeButtonHandler(e);
        break;
    }
  });
}

// Takes the value from the form and posts it to the database
function formHandler(e) {
  e.preventDefault();

  const taskInput = document.querySelector("#task");
  const task = taskInput.value;

  // If the input is empty, alert the user and return
  if (task === "") {
    alert("You need to write a task");
    return;
  }
  const category = document.querySelector("#task-category").value;
  const data = {
    task,
    category,
    status: "to do",
    assigned: "",
  };

  // Post the task to the database and then refresh the UI
  postTask(data)
    .then(() => {
      taskInput.value = "";
      refreshTasks();
    })
    .catch((error) => {
      console.log(error);
    });
}

function assignNameToTaskHandler(e) {
  e.preventDefault();

  const card = e.target.closest(".card");
  const taskId = card.getAttribute("data-id");
  const input = card.querySelector("#assign-input").value;

  // If the input is empty, alert the user and return
  if (input === "") {
    alert("You need to write a name");
    return;
  }

  patchTask(taskId, {
    assigned: input,
    status: "in progress",
  })
    .then(() => {
      refreshTasks();
    })
    .catch((error) => {
      console.log(error);
    });
}

function doneButtonHandler(e) {
  e.preventDefault();

  const card = e.target.closest(".card");
  const taskId = card.getAttribute("data-id");

  patchTask(taskId, {
    status: "done",
  })
    .then(() => {
      refreshTasks();
    })
    .catch((error) => {
      console.log(error);
    });
}

function removeButtonHandler(e) {
  e.preventDefault();
  const card = e.target.closest(".card");
  const taskId = card.getAttribute("data-id");

  deleteTask(taskId)
    .then(() => {
      refreshTasks();
    })
    .catch((error) => {
      console.log(error);
    });
}

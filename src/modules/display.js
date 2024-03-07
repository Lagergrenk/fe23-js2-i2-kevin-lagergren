// Purpose: Create the cards for the different categories (To Do, In Progress, Done)
// Define colors for the different categories
const uxColor = "rgb(215, 154, 118)";
const devBackendColor = "rgb(179, 169, 185)";
const devFrontEndColor = "rgb(150, 191, 192)";

// Create the cards for the different categories (To Do, In Progress, Done)
export function createToDoCard(taskObject) {
  const parent = document.querySelector("#to-do");
  const card = createCard(taskObject);
  const form = document.createElement("form");
  const input = createInput("Enter Name", "assign-input");
  const button = createButton("Assign >>", "assign-btn");
  card.appendChild(form);
  form.appendChild(input);
  form.appendChild(button);
  parent.appendChild(card);
}

export function createInProgressCard(taskObject) {
  const parent = document.querySelector("#in-progress");
  const card = createCard(taskObject);
  const button = createButton("Done >>", "done-btn");
  card.appendChild(button);
  parent.appendChild(card);
}

export function createDoneCard(taskObject) {
  const parent = document.querySelector("#done");
  const card = createCard(taskObject);
  const button = createButton("Remove X", "remove-btn");
  card.appendChild(button);
  parent.appendChild(card);
}

// Helper function to create elements for the cards
function createCard(taskObject) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.style.backgroundColor = checkCategory(taskObject.category);
  card.setAttribute("data-id", taskObject.id);
  const description = document.createElement("p");
  description.textContent = taskObject.task;
  card.appendChild(description);
  if (taskObject.assigned) {
    const assigned = document.createElement("p");
    assigned.textContent = `- ${taskObject.assigned}`;
    card.appendChild(assigned);
  }

  return card;
}

function createButton(text, className) {
  const button = document.createElement("button");
  button.textContent = text;
  button.className = className;
  return button;
}

function createInput(placeholder, id) {
  const input = document.createElement("input");
  input.placeholder = placeholder;
  input.id = id;
  input.setAttribute("autocomplete", "off");
  return input;
}

// Determine the category of the task (UX, Frontend, Backend)
function checkCategory(category) {
  switch (category) {
    case "ux":
      return uxColor;
    case "dev frontend":
      return devFrontEndColor;
    case "dev backend":
      return devBackendColor;
  }
}

export function clearTaskUI() {
  ["#to-do", "#in-progress", "#done"].forEach((columnSelector) => {
    const column = document.querySelector(columnSelector);
    const cards = column.querySelectorAll(".card");
    cards.forEach((card) => card.remove());
  });
}

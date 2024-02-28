const uxColor = "rgb(215, 154, 118)";
const devBackendColor = "rgb(179, 169, 185)";
const devFrontEndColor = "rgb(150, 191, 192)";

export function createToDoCard(taskObject) {
  const parent = document.querySelector("#to-do");
  const card = createCard();
  const form = document.createElement("form");
  const input = createInput("Enter Name", "assigned");
  const description = document.createElement("p");
  description.textContent = taskObject.task;
  card.style.backgroundColor = checkCategory(taskObject.category);
  const button = createButton("Assign >>", "assign-btn");
  card.appendChild(description);
  card.appendChild(form);
  form.appendChild(input);
  form.appendChild(button);
  parent.appendChild(card);
}

export function createInProgressCard(taskObject) {
  const parent = document.querySelector("#in-progress");
  const card = createCard();
  const description = document.createElement("p");
  description.textContent = taskObject.task;
  const assigned = document.createElement("p");
  card.style.backgroundColor = checkCategory(taskObject.category);
  assigned.textContent = `- ${taskObject.assigned}`;
  const button = createButton("Done >>", "done-btn");
  card.appendChild(description);
  card.appendChild(assigned);
  card.appendChild(button);
  parent.appendChild(card);
}

export function createDoneCard(taskObject) {
  const parent = document.querySelector("#done");
  const card = createCard();
  const assigned = document.createElement("p");
  const button = createButton("Remove X", "remove-btn");
  const description = document.createElement("p");
  card.style.backgroundColor = checkCategory(taskObject.category);
  assigned.textContent = `- ${taskObject.assigned}`;
  description.textContent = taskObject.task;
  card.appendChild(description);
  card.appendChild(assigned);
  card.appendChild(button);
  parent.appendChild(card);
}

function createCard() {
  const card = document.createElement("div");
  card.classList.add("card");
  return card;
}

function createButton(text, id) {
  const button = document.createElement("button");
  button.textContent = text;
  button.id = id;
  return button;
}

function createInput(placeholder, id) {
  const input = document.createElement("input");
  input.placeholder = placeholder;
  input.id = id;
  return input;
}

function checkCategory(category) {
  if (category === "ux") {
    return uxColor;
  } else if (category === "dev frontend") {
    return devFrontEndColor;
  } else if (category === "dev backend") {
    return devBackendColor;
  }
}
/**
 * firebase id
 * * task: {string}
 * * category: {"ux", "dev frontend", dev backend}
 * * status: {"to do", "in progress", "done"}
 * * assigned: {string}
 */

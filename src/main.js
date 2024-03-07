import { fetchTasks } from "./modules/firebasehandler.js";
import { initEventlistner } from "./modules/eventlistner.js";

import {
  createToDoCard,
  createInProgressCard,
  createDoneCard,
  clearTaskUI,
} from "./modules/display.js";

/*
 * Fetch tasks from the database
 * Create cards for each task giving each card the correct status and data-id
 * Initialize eventlistners
 */

export function refreshTasks() {
  fetchTasks().then((data) => {
    clearTaskUI();

    for (const key in data) {
      const task = data[key];
      task.id = key;

      if (task.status === "to do") {
        createToDoCard(task);
      } else if (task.status === "in progress") {
        createInProgressCard(task);
      } else if (task.status === "done") {
        createDoneCard(task);
      }
    }
  });
}

refreshTasks();
initEventlistner();

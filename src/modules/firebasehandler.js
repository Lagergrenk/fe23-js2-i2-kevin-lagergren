// Purpose: This file contains the functions that interact with the Firebase database.
// Base URL for firebase realtime database
const BASE_URL =
  "https://scrum-board-4eb67-default-rtdb.europe-west1.firebasedatabase.app/tasks";

const HEADER = {
  "Content-Type": "application/json; charset=UTF-8",
};

// Fetches all tasks from the database
export async function fetchTasks() {
  const url = `${BASE_URL}.json`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

// Posts a new task to the database
export async function postTask(task) {
  const url = `${BASE_URL}.json`;
  const options = {
    method: "POST",
    HEADERs: HEADER,
    body: JSON.stringify(task),
  };
  try {
    const res = await fetch(url, options);
    const info = await res.json();
    console.log(info);
  } catch (error) {
    console.log(error);
  }
}

// Updates a task in the database
export async function patchTask(taskId, updates) {
  const url = `${BASE_URL}/${taskId}.json`;
  const options = {
    method: "PATCH",
    HEADERs: HEADER,
    body: JSON.stringify(updates),
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

// Deletes a task from the database using the task id
export async function deleteTask(id) {
  try {
    const url = `${BASE_URL}/${id}.json`;
    const options = {
      method: "DELETE",
    };

    const res = await fetch(url, options);
    const info = await res.json();
  } catch (error) {
    console.log(error);
  }
}

export async function getTaskId(task) {
  try {
    const tasks = await fetchTasks();
    for (const key in tasks) {
      if (tasks[key].task === task) {
        console.log("getTaskID" + key);
        return key;
      }
    }
  } catch (error) {
    console.log(error);
  }
}

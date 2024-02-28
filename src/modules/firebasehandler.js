const url =
  "https://scrum-board-4eb67-default-rtdb.europe-west1.firebasedatabase.app/tasks.json";

export async function fetchTasks() {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function postTask(task) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
  const data = await response.json();
  return data;
}

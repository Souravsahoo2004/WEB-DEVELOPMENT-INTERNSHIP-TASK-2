const taskInput = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");

// Add Task
addBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const li = document.createElement("li");
  li.className = "task-item";

  const span = document.createElement("span");
  span.className = "task-text";
  span.textContent = taskText;

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn";
  deleteBtn.innerHTML = "🗑";

  li.appendChild(span);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  taskInput.value = "";

  // Toggle Complete
  span.addEventListener("click", () => {
    span.classList.toggle("completed");
  });

  // Delete Task
  deleteBtn.addEventListener("click", () => {
    li.remove();
  });
});

// Add task on Enter key
taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addBtn.click();
  }
});

document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("task-input");
    const addButton = document.getElementById("add-button");
    const taskList = document.getElementById("task-list");
  
    addButton.addEventListener("click", function() {
      const taskName = taskInput.value.trim();
      if (taskName !== "") {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
          <span class="task-name">${taskName}</span>
          <button class="edit-button">Edit</button>
          <button class="delete-button">Delete</button>
        `;
        taskList.appendChild(listItem);
        taskInput.value = "";
  
        const editButton = listItem.querySelector(".edit-button");
        editButton.addEventListener("click", function() {
          const newTaskName = prompt("Enter a new task name:", taskName);
          if (newTaskName !== null) {
            listItem.querySelector(".task-name").textContent = newTaskName.trim();
          }
        });
  
        const deleteButton = listItem.querySelector(".delete-button");
        deleteButton.addEventListener("click", function() {
          listItem.remove();
        });
      }
    });
  });
  
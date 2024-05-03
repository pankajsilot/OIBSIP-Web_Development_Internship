
function addTask() {

  var taskInput = document.getElementById("taskInput").value.trim();

  if (taskInput !== "") {

      var listItem = document.createElement("li");
      listItem.textContent = taskInput;

      var completeButton = document.createElement("button");
      completeButton.textContent = "Complete";
      completeButton.className = "complete-btn";
      completeButton.onclick = function() {
          markAsComplete(this.parentElement);
      };

      var editButton = document.createElement("button");
      editButton.textContent = "Edit";
      editButton.className = "edit-btn";
      editButton.onclick = function() {
          editTask(this.parentElement);
      };

      var deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.className = "delete-btn";
      deleteButton.onclick = function() {
          deleteTask(this.parentElement);
      };

 
      listItem.appendChild(completeButton);
      listItem.appendChild(editButton);
      listItem.appendChild(deleteButton);

      document.getElementById("pendingTasks").appendChild(listItem);

   
      document.getElementById("taskInput").value = "";
  }
}

function markAsComplete(task) {

  document.getElementById("completedTasks").appendChild(task);

  task.classList.add("completed");


  task.querySelector(".complete-btn").remove();
}


function editTask(task) {
  var newText = prompt("Edit task:", task.textContent.trim());
  if (newText !== null && newText !== "") {
      task.textContent = newText;
  }
}

function deleteTask(task) {
  task.remove();
}

function clearCompleted() {
  var completedTasks = document.querySelectorAll("#completedTasks li");
  completedTasks.forEach(function(task) {
      task.remove();
  });
}

function filterTasks() {
  var isChecked = document.getElementById("filterCheckbox").checked;
  var completedTasks = document.querySelectorAll("#completedTasks li");
  completedTasks.forEach(function(task) {
      if (isChecked) {
          task.style.display = "none";
      } else {
          task.style.display = "block";
      }
  });
}

function saveTasks() {
  var pendingTasks = document.querySelectorAll("#pendingTasks li");
  var completedTasks = document.querySelectorAll("#completedTasks li");
  
  var tasks = {
      pending: [],
      completed: []
  };

  pendingTasks.forEach(function(task) {
      tasks.pending.push(task.textContent.trim());
  });

  completedTasks.forEach(function(task) {
      tasks.completed.push(task.textContent.trim());
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  var savedTasks = JSON.parse(localStorage.getItem("tasks"));

  if (savedTasks) {
      savedTasks.pending.forEach(function(task) {
          var listItem = document.createElement("li");
          listItem.textContent = task;

          var completeButton = document.createElement("button");
          completeButton.textContent = "Complete";
          completeButton.className = "complete-btn";
          completeButton.onclick = function() {
              markAsComplete(this.parentElement);
          };

          var editButton = document.createElement("button");
          editButton.textContent = "Edit";
          editButton.className = "edit-btn";
          editButton.onclick = function() {
              editTask(this.parentElement);
          };

          var deleteButton = document.createElement("button");
          deleteButton.textContent = "Delete";
          deleteButton.className = "delete-btn";
          deleteButton.onclick = function() {
              deleteTask(this.parentElement);
          };

          listItem.appendChild(completeButton);
          listItem.appendChild(editButton);
          listItem.appendChild(deleteButton);

          document.getElementById("pendingTasks").appendChild(listItem);
      });

      savedTasks.completed.forEach(function(task) {
          var listItem = document.createElement("li");
          listItem.textContent = task;
          listItem.classList.add("completed");

          var deleteButton = document.createElement("button");
          deleteButton.textContent = "Delete";
          deleteButton.className = "delete-btn";
          deleteButton.onclick = function() {
              deleteTask(this.parentElement);
          };

          listItem.appendChild(deleteButton);

          document.getElementById("completedTasks").appendChild(listItem);
      });
  }
}



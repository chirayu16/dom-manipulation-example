document.getElementById('add-task-button').addEventListener('click', function() {
  const taskInput = document.getElementById('add-task-input');

  const taskText = taskInput.value.trim();
});

if (taskText === "") {
  alert("Please enter a task");
  return;
}

const newTaskItem = document.createElement('li');

const taskTextSpan = document.createElement('span');
taskTextSpan.textContent= taskText;

const completeButton = document.createElement('button');
completeButton.textContent = 'Complete'; 
completeButton.classList.add('complete-btn');
completeButton.addEventListener('click', function() { newTaskItem.classList.toggle('completed');
});

const deleteButton = document.createElement('button');
deleteButton.textContent = 'Delete' ;
deleteButton.classList.add('delete-btn');
deleteButton.addEventListener('click', function() {
  newTaskItem.remove();
});

newTaskItem.appendChild(taskTextSpan);
newTaskItem.appendChild(completeButton);
newTaskItem.appendChild(deleteButton);

document.getElementById('task-list').appendChild(newTaskItem);

taskInput.value='';
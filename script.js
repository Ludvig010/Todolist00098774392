let taskInput = document.getElementById('taskInput');
let taskList = document.getElementById('taskList');

function addTask() {
	if (taskInput.value === '') {
		alert('Please enter a task!');
		return false;
	}

	let li = document.createElement('li');
	li.innerHTML = `
		<input type="checkbox" class="checkbox">
		<span>${taskInput.value}</span>
		<button type="button" class="delete" onclick="deleteTask(this)">Delete</button>
	`;
	taskList.appendChild(li);
	taskInput.value =

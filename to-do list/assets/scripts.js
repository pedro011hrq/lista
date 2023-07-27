const form = document.getElementById('task-form');
const taskList = document.getElementById('tasks');

form.onsubmit = function (e) {
    e.preventDefault();
    const inputField = document.getElementById('task-input');
    addTask(inputField.value);
    form.reset();
};

function addTask(description) {
    const taskContainer = document.createElement('div');
    const newTask = document.createElement('input');
    const taskLabel = document.createElement('label');
    const taskDescriptionNode = document.createTextNode(description);
    const removeButton = document.createElement('button'); // Create the remove button

    newTask.setAttribute('type', 'checkbox');
    newTask.setAttribute('name', description);
    newTask.setAttribute('id', description);

    taskLabel.setAttribute('for', description);
    taskLabel.appendChild(taskDescriptionNode);

    taskContainer.classList.add('task-item');
    taskContainer.appendChild(newTask);
    taskContainer.appendChild(taskLabel);
    taskContainer.appendChild(removeButton); // Add the remove button to the task container

    removeButton.innerText = 'Remover'; // Set the button text
    removeButton.onclick = function () {
        removeTask(taskContainer); // Call removeTask function passing the task container to remove it
		
    };

    taskList.appendChild(taskContainer);
}

function removeTask(taskContainer) {
    taskList.removeChild(taskContainer); // Remove the task container from the task list
}

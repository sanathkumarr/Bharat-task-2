// Task management
const taskForm = document.getElementById('task-form');
const taskNameInput = document.getElementById('task-name');
const assigneeInput = document.getElementById('assignee');
const taskList = document.getElementById('task-list');

taskForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const taskName = taskNameInput.value;
    const assignee = assigneeInput.value;

    if (taskName.trim() !== '' && assignee.trim() !== '') {
        const taskItem = document.createElement('li');
        taskItem.textContent = `Task: ${taskName}, Assign to: ${assignee}`;
        taskList.appendChild(taskItem);
        taskNameInput.value = '';
        assigneeInput.value = '';
    }
});

// Chat
const chatForm = document.getElementById('chat-form');
const chatBox = document.getElementById('chat-box');
const messageInput = document.getElementById('message');

chatForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const message = messageInput.value;

    if (message.trim() !== '') {
        const messageItem = document.createElement('div');
        messageItem.textContent = message;
        chatBox.appendChild(messageItem);
        messageInput.value = '';
    }
});

document.addEventListener("DOMContentLoaded", function () {
    // Reference to the project details container
    const projectDetails = document.getElementById("project-details");
    
    // Reference to the project name input field and display paragraph
    const projectNameInput = document.getElementById("project-name");
    const projectNameDisplay = document.getElementById("project-name-display");
    
    // Reference to the "Create Project" button
    const createProjectButton = document.getElementById("create-project");
    
    // When the "Create Project" button is clicked
    createProjectButton.addEventListener("click", function () {
        // Get the project name from the input field
        const projectName = projectNameInput.value;
        
        // Display the project name in the project details container
        projectNameDisplay.textContent = `Project Name: ${projectName}`;
        
        // Show the project details container
        projectDetails.style.display = "block";
        
        // Clear the input field
        projectNameInput.value = "";
    });
});

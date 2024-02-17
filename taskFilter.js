function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskList = document.getElementById("taskList");
    let errorMessage = document.getElementById("errorMessage");

    if (taskInput.value !== "") {
        errorMessage.style.display = "none";

        let listItem = document.createElement("li");

        let deleteIcon = document.createElement("span");
        deleteIcon.classList.add("delete-icon");
        deleteIcon.innerHTML = "&#10006;";
        deleteIcon.onclick = function () {
            taskList.removeChild(listItem);
        };

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.addEventListener("change", function () {
            if (checkbox.checked) {
                listItem.style.textDecoration = "line-through";
                deleteIcon.style.textDecoration = "none"; 
            } else {
                listItem.style.textDecoration = "none";
            }
        });

        let label = document.createElement("label");
        label.appendChild(checkbox);
        label.appendChild(document.createTextNode(taskInput.value));

        listItem.appendChild(label);
        listItem.appendChild(deleteIcon);

        taskList.appendChild(listItem);

        taskInput.value = "";
    } else {
        errorMessage.style.display = "block";
    }
}

document.getElementById("taskFilter").addEventListener("input", function () {
    let filterText = this.value.toLowerCase();
    let tasks = document.querySelectorAll("#taskList li");

    tasks.forEach(function (task) {
        let labelText = task.querySelector("label").textContent.toLowerCase();
        if (labelText.includes(filterText)) {
            task.style.display = "block";
        } else {
            task.style.display = "none";
        }
    });
});
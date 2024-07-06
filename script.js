const highInputBox = document.getElementById('add-high-task-input');
const highTaskList = document.getElementById('high-task-list');

const lowInputBox = document.getElementById('add-low-task-input');
const lowTaskList = document.getElementById('low-task-list');


function addHighTask() {
    if (highInputBox.value === '') {
        alert("You must write something in high priority task!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = highInputBox.value;
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span)
        highTaskList.appendChild(li);
        highInputBox.value = '';
        saveHighTask();
    }
}

function addLowTask() {
    if (lowInputBox.value === '') {
        alert("You must write something in low priority task!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = lowInputBox.value;
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span)
        lowTaskList.appendChild(li);
        lowInputBox.value = '';
        saveLowTask();
    }
}

highTaskList.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveHighTask()
    } else if (e.target.tagName === "SPAN") {
        if (confirm("Are you sure?") == true) {
            e.target.parentElement.remove();
            saveHighTask()
        }
    }
}, false)

lowTaskList.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveLowTask()
    } else if (e.target.tagName === "SPAN") {
        if (confirm("Are you sure?") == true) {
            e.target.parentElement.remove();
            saveLowTask()
        }
    }
}, false)

function saveHighTask() {
    localStorage.setItem("hightTask", highTaskList.innerHTML);
}

function saveLowTask() {
    localStorage.setItem("lowTask", lowTaskList.innerHTML);
}

function showTask() {
    highTaskList.innerHTML = localStorage.getItem("hightTask");
    lowTaskList.innerHTML = localStorage.getItem("lowTask");
}

showTask()
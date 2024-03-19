const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');
function addTask() {
    if (inputBox.value === '') {
        alert("Please add task!")
    } else {
        const li = document.createElement('li')
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        savData()
    }
    inputBox.value = '';
}
listContainer.addEventListener("click", function name(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle('checked');
    }
    if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove()
    }
    savData()
}, false)

function savData(params) {
    localStorage.setItem('data', listContainer.innerHTML)
}
function showTask(params) {
    listContainer.innerHTML = localStorage.getItem('data')
}
showTask();
const todoValue = document.getElementById("todoText"),
    listItems = document.getElementById("list-items"),
    addUpdateClick = document.getElementById("addUpdateClick");

function CreateToDoData() {
    if (todoValue.value === "") {
        alert("Please enter what do you want to do");
        todoValue.focus();
    }

    let li = document.createElement("li");
    const todoItems = `<div>${todoValue.value}</div>`;

    li.innerHTML=todoItems
    listItems.appendChild(li);
}
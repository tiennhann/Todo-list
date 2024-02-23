const todoValue = document.getElementById("todoText"),
    listItems = document.getElementById("list-items"),
    addUpdateClick = document.getElementById("addUpdateClick");

    todoValue.addEventListener("keypress",function(e) {
        if (e.key == "Enter") {
            addUpdateClick.click();
        }
    });

function CreateToDoData() {
    if (todoValue.value === "") {
        alert("Please enter what do you want to do");
        todoValue.focus();
    }

    let li = document.createElement("li");
    const todoItems = `<div ondblclick="CompleteTodoItem(this)">${todoValue.value}</div>
        <div>
            <img class="edit todo-controls" onclick="UpdateToDoItems(this)" src="/images/pencil.png" />
            <img class="delete todo-controls" onclick="DeleteToDoItems(this)" src="/images/trash.png"/>
        </div>`;

    li.innerHTML=todoItems
    listItems.appendChild(li);
    todoValue.value = "";
}

function CompleteTodoItem(e){
    console.log(e.parentElement);
    if (e.parentElement.querySelector("div").style.textDecoration === "") {
        e.parentElement.querySelector("div").style.textDecoration = "line-through";
    }
}

function UpdateToDoItems(e){
    if (e.parentElement.parentElement.querySelector("div").style.textDecoration === "") {
        console.log(e.parentElement.parentElement.querySelector("div").innerText);
    }
}
 
// This class represents an item in a todoList
class todoItem {
    content = "";
    checked = false;
    id = 0
    constructor(content, checked, id) {
        this.content = content;
        this.checked = checked;
        this.id = id;
    }
}

// List of todoItems
todoList = [];
var todoForm = document.getElementById("form");

// EventListener on form submission
todoForm.addEventListener('submit', event => {
    event.preventDefault();
    var item = document.getElementById("item").value;
    // Check for empty input
    if (item && item.trim().length > 0) {
        document.getElementById("item").value = "";
        // Push new item to the list
        todoList.push(new todoItem(item, false, todoList.length + 1));
        var listElement = ``;
        var listElement = todoList.map(item => {
            // Dynamically generate ID's
            if (item.checked)
                listElement = `<li>
                <input id=${new String(item.id+"c")} type='checkbox' checked>
                <label>${item.content}</label>
                <button id=${item.id}>Delete</button>
                </li>`;
            else
                listElement = `<li>
                <input id=${new String(item.id+"c")} type='checkbox'>
                <label>${item.content}</label>
                <button id=${item.id}>Delete</button>
                </li>`;
            return listElement;
        }).join('');
        document.getElementById("todo").innerHTML = listElement;
    }

    // EventListeners for Button click and Checkbox change
    todoList.map(item => {
        var deleteButton = document.getElementById(item.id);
        var checkBox = document.getElementById(item.id + "c");
        deleteButton.addEventListener('click', () => {
            deleteButton.parentElement.remove();
            // Remove the item from the list
            todoList.splice(todoList.indexOf(item), 1);
        });
        checkBox.addEventListener("change", () => {
            if (this.checked) {
                item.checked = true;
            }
        });
    });
});

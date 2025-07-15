var messid = 0;
var mess = [];
var editingId = null;
function add(task) {
    mess.push({ id: messid, data: task, done: false });
    messid++;
    render();
}
function removeTodo(id) {
    mess = mess.filter(function (todo) { return todo.id !== id; });
    render();
}
function toggleDone(id) {
    var todo = mess.find(function (t) { return t.id === id; });
    if (todo)
        todo.done = !todo.done;
    render();
}
function startEdit(id) {
    editingId = id;
    render();
}
function saveEdit(id, newText) {
    var todo = mess.find(function (t) { return t.id === id; });
    if (todo) {
        todo.data = newText;
        editingId = null;
    }
    render();
}
function render() {
    var list = document.getElementById('taskList');
    list.innerHTML = "";
    mess.forEach(function (todo) {
        var li = document.createElement('li');
        li.className = todo.done ? "done" : "";
        if (editingId === todo.id) {
            var input_1 = document.createElement("input");
            input_1.type = "text";
            input_1.value = todo.data;
            var saveBtn = document.createElement("button");
            saveBtn.textContent = "Save";
            saveBtn.onclick = function () { return saveEdit(todo.id, input_1.value); };
            li.appendChild(input_1);
            li.appendChild(saveBtn);
        }
        else {
            li.textContent = todo.data;
            var btnDone = document.createElement("button");
            btnDone.textContent = todo.done ? "Undo" : "Done";
            btnDone.onclick = function () { return toggleDone(todo.id); };
            var btnEdit = document.createElement("button");
            btnEdit.textContent = "Edit";
            btnEdit.onclick = function () { return startEdit(todo.id); };
            var btnDelete = document.createElement("button");
            btnDelete.textContent = "Delete";
            btnDelete.onclick = function () { return removeTodo(todo.id); };
            li.appendChild(btnDone);
            li.appendChild(btnEdit);
            li.appendChild(btnDelete);
        }
        list.appendChild(li);
    });
}
function handleAdd() {
    var input = document.getElementById("taskInput");
    var task = input.value.trim();
    if (task !== "") {
        add(task);
        input.value = "";
    }
}
window.handleAdd = handleAdd;

interface Todo {
    id: number;
    data: string;
    done: boolean;
}

let messid = 0;
let mess: Todo[] = [];
let editingId: number | null = null;

function add(task: string): void {
    mess.push({ id: messid, data: task, done: false });
    messid++;
    render();
}


function removeTodo(id: number): void {
    mess = mess.filter(todo => todo.id !== id);
    render();
}

function toggleDone(id: number): void {
    const todo = mess.find(t => t.id === id);
    if (todo) todo.done = !todo.done;
    render();
}

function startEdit(id: number): void {
    editingId = id;
    render();
}

function saveEdit(id: number, newText: string): void {
    const todo = mess.find(t => t.id === id);
    if (todo) {
        todo.data = newText;
        editingId = null;
    }
    render();
}

function render(): void {
    const list = document.getElementById('taskList')!;
    list.innerHTML = "";

    mess.forEach(todo => {
        const li = document.createElement('li');
        li.className = todo.done ? "done" : "";

        if (editingId === todo.id) {
            const input = document.createElement("input");
            input.type = "text";
            input.value = todo.data;

            const saveBtn = document.createElement("button");
            saveBtn.textContent = "Save";
            saveBtn.onclick = () => saveEdit(todo.id, input.value);

            li.appendChild(input);
            li.appendChild(saveBtn);
        } else {
            li.textContent = todo.data;

            const btnDone = document.createElement("button");
            btnDone.textContent = todo.done ? "Undo" : "Done";
            btnDone.onclick = () => toggleDone(todo.id);

            const btnEdit = document.createElement("button");
            btnEdit.textContent = "Edit";
            btnEdit.onclick = () => startEdit(todo.id);

            const btnDelete = document.createElement("button");
            btnDelete.textContent = "Delete";
            btnDelete.onclick = () => removeTodo(todo.id);

            li.appendChild(btnDone);
            li.appendChild(btnEdit);
            li.appendChild(btnDelete);
        }

        list.appendChild(li);
    });
}


function handleAdd(): void {
    const input = document.getElementById("taskInput") as HTMLInputElement;
    const task = input.value.trim();
    if (task !== "") {
        add(task);
        input.value = "";
    }
}

(window as any).handleAdd = handleAdd;

import "./style.css";

interface Todo {
	title: string;
	isComppled: boolean;
	readonly id: string;
}

const todos: Todo[] = [];

const todoContainer = document.querySelector(".todoContainer") as HTMLDivElement;

const todoInput = document.getElementsByName("title")[0] as HTMLInputElement;

const myForm = document.getElementById("myForm") as HTMLFormElement;

myForm.onsubmit = (e) => {
	e.preventDefault();
	const todo: Todo = {
		title: todoInput.value,
		isComppled: false,
		id: String(Math.random() * 1000),
	};

	todos.push(todo);
	todoInput.value = "";
	renderTodo(todos);
};

const generateTodoItem = (title: string, isCompleted: boolean, id: string) => {
	const todo: HTMLDivElement = document.createElement("div");
	todo.className = "todo";

	// create checkbox
	const checkBox: HTMLInputElement = document.createElement("input");
	checkBox.setAttribute("type", "checkbox");
	checkBox.className = "isCompleted";
	checkBox.checked = isCompleted;

	const paragraph: HTMLParagraphElement = document.createElement("p");
	paragraph.innerText = title;

	const btn: HTMLButtonElement = document.createElement("button");
	btn.innerText = "Delete";
	btn.className = "deleteBtn";

	btn.onclick = () => {
		deletTodo(id);
	};

	// appending all the elements
	todo.append(checkBox, paragraph, btn);
	todoContainer.appendChild(todo);
};

const deletTodo = (id: string) => {
	const index = todos.findIndex((item) => item.id === id);
	todos.splice(index, 1);
  renderTodo(todos)
};

const renderTodo = (todos: Todo[]) => {
	todoContainer.innerHTML = "";
	todos.forEach((todo) => {
		generateTodoItem(todo.title, todo.isComppled, todo.id);
	});
};

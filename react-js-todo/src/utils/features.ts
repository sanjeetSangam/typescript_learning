export const saveTodos = (todos: TodoItemType[]): void => {
	localStorage.setItem("myTodo", JSON.stringify(todos));
};

export const getTodos = (): TodoItemType[] => {
	const todos = localStorage.getItem("myTodo");
	return todos ? JSON.parse(todos) : [];
};

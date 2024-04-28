import { AppBar, Container, Toolbar, Typography, Stack, TextField, Button } from "@mui/material";
import { useEffect, useState } from "react";
import TodoItem from "./components/TodoItem";
import { getTodos, saveTodos } from "./utils/features";

const App = () => {
	const [todos, setTodos] = useState<TodoItemType[]>(getTodos());
	const [title, setTitle] = useState<TodoItemType["title"]>("");

	const completedTodo = (id: TodoItemType["id"]): void => {
		const newTodos: TodoItemType[] = todos.map((todo: TodoItemType) => {
			if (todo.id === id) todo.isCompleted = !todo.isCompleted;
			return todo;
		});
		setTodos(newTodos);
	};

	const editTodo = (id: TodoItemType["id"], value: TodoItemType["title"]): void => {
		const newTodos: TodoItemType[] = todos.map((todo: TodoItemType) => {
			if (todo.id === id) todo.title = value;
			return todo;
		});
		setTodos(newTodos);
	};

	const deletedTodo = (id: TodoItemType["id"]): void => {
		const newTodos: TodoItemType[] = todos.filter((todo: TodoItemType) => {
			return todo.id !== id;
		});
		setTodos(newTodos);
	};

	const submitHandler = (): void => {
		const newTodo: TodoItemType = {
			title,
			isCompleted: false,
			id: String(Math.random() * 1000),
		};

		setTodos((prev) => [...prev, newTodo]);
		setTitle("");
	};

	useEffect(() => {
		saveTodos(todos);
	}, [todos]);

	return (
		<Container maxWidth="sm" sx={{ height: "100vh" }}>
			<AppBar position="static">
				<Toolbar>
					<Typography>TODO APP</Typography>
				</Toolbar>
			</AppBar>

			<Stack height={"70%"} direction={"column"} spacing={"1rem"} p={"1rem"}>
				{todos.map((todoItem) => (
					<TodoItem
						key={todoItem.id}
						todo={todoItem}
						completedTodo={completedTodo}
						deletedTodo={deletedTodo}
						editTodo={editTodo}
					/>
				))}
			</Stack>

			<TextField
				fullWidth
				label={"New Task"}
				value={title}
				onChange={(e) => setTitle(e.target.value)}
				onKeyDown={(e) => {
					if (e.key === "Enter" && title) submitHandler();
				}}
			/>
			<Button
				disabled={!title}
				fullWidth
				sx={{ marginTop: "1rem" }}
				variant="contained"
				onClick={submitHandler}
			>
				Add
			</Button>
		</Container>
	);
};

export default App;

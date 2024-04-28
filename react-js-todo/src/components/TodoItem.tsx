import { Button, Checkbox, Paper, Stack, TextField, Typography } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { useState } from "react";

type PropsType = {
	todo: TodoItemType;
	completedTodo: (id: TodoItemType["id"]) => void;
	deletedTodo: (id: TodoItemType["id"]) => void;
	editTodo: (id: TodoItemType["id"], value: TodoItemType["title"]) => void;
};

const TodoItem = ({ todo, completedTodo, deletedTodo, editTodo }: PropsType) => {
	const { title, isCompleted, id } = todo;
	const [editActive, setEditActive] = useState<boolean>(false);
	const [textValue, setTextValue] = useState<TodoItemType["title"]>(title);

	return (
		<Paper variant={"outlined"} sx={{ padding: "1rem" }}>
			<Stack direction={"row"} alignItems={"center"}>
				{editActive ? (
					<TextField
						value={textValue}
						onChange={(e) => setTextValue(e.target.value)}
						onKeyDown={(e) => {
							if (e.key === "Enter" && textValue) {
								editTodo(id, textValue);
								setEditActive(false);
							}
						}}
					/>
				) : (
					<Typography marginRight={"auto"}>{title}</Typography>
				)}

				<Checkbox
					onChange={() => completedTodo(id)}
					title="Toggle Todo"
					checked={isCompleted}
				/>
				<Button
					onClick={() => deletedTodo(id)}
					title="Delete"
					sx={{ opacity: 0.5, color: "black" }}
				>
					<Delete />
				</Button>
				<Button
					sx={{ fontWeight: "600" }}
					title="Edit"
					onClick={() => setEditActive((prev) => !prev)}
				>
					Edit
				</Button>
			</Stack>
		</Paper>
	);
};

export default TodoItem;

import { useState } from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import Todo from "../types/modalTodo";
import "./styles.css";

interface SingleTodoProps {
	todo: Todo;
	todos: Todo[];
	setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo = ({ todo, todos, setTodos }: SingleTodoProps) => {
	const [edit, setEdit] = useState(false);
	const [editedValue, setEditedValue] = useState(todo.todo);

	const handleDonetodo = (id: number) => {
		setTodos(
			todos.map((todo) =>
				todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
			)
		);
	};

	const handleDeleteTodo = (id: number) => {
		setTodos(todos.filter((todo) => todo.id !== id));
	};

	const handleSubmitUpdateTodo = (
		e: React.FormEvent<HTMLFormElement>,
		id: number
	) => {
		e.preventDefault();
		setTodos(
			todos.map((todo) =>
				todo.id === id ? { ...todo, todo: editedValue } : todo
			)
		);
		setEdit(false);
	};

	return (
		<form
			className="todos__single"
			onSubmit={(e) => handleSubmitUpdateTodo(e, todo.id)}
		>
			{!edit ? (
				todo.isDone ? (
					<s className="todos__single--text">{todo.todo}</s>
				) : (
					<span className="todos__single--text">{todo.todo}</span>
				)
			) : (
				<input
					className="todos__single--text"
					type="text"
					value={editedValue}
					onChange={(e) => setEditedValue(e.target.value)}
				/>
			)}
			<div>
				<span
					className="icon"
					onClick={() => {
						if (!edit && !todo.isDone) {
							setEdit(!edit);
						}
					}}
				>
					<AiFillEdit />
				</span>
				<span className="icon" onClick={() => handleDeleteTodo(todo.id)}>
					<AiFillDelete />
				</span>
				<span className="icon" onClick={() => handleDonetodo(todo.id)}>
					<MdDone />
				</span>
			</div>
		</form>
	);
};

export default SingleTodo;

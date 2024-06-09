import { useRef } from "react";
import "./styles.css";

interface InputFieldProps {
	todo: string;
	setTodo: React.Dispatch<React.SetStateAction<string>>;
	handleTodos: (e: React.FormEvent<HTMLFormElement>) => void;
}

const InputField = ({ todo, setTodo, handleTodos }: InputFieldProps) => {
	const inputRef = useRef<HTMLInputElement>(null);

	return (
		<form
			className="input"
			onSubmit={(e) => {
				handleTodos(e);
				inputRef.current?.blur();
			}}
		>
			<input
				ref={inputRef}
				type="input"
				placeholder="Enter a task"
				className="input__box"
				value={todo}
				onChange={(e) => setTodo(e.target.value)}
			/>
			<button type="submit" className="input_submit">
				Go
			</button>
		</form>
	);
};

export default InputField;

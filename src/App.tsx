import { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import Todo from "./types/modalTodo";
import TodoList from "./components/TodoList";

function App() {
	const [todo, setTodo] = useState<string>("");
	const [todos, setTodos] = useState<Todo[]>([]);

	const handleTodos = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (todo) {
			setTodos([...todos, { id: Date.now(), isDone: false, todo }]);
      setTodo("")
		}
    };


	return (
		<div className="App">
			<span className="heading">Taskify App</span>
			<InputField todo={todo} setTodo={setTodo} handleTodos={handleTodos} />
      <TodoList todos={todos} setTodos={setTodos}/>
		</div>
	);
}

export default App;

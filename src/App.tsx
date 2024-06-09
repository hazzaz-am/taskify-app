import { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import Todo from "./types/modalTodo";
import TodoList from "./components/TodoList";

function App() {
	const [task, setTask] = useState<string>("");
	const [todos, setTodos] = useState<Todo[]>([]);

	const handleTodos = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (task) {
			setTodos([...todos, { id: Date.now(), isDone: false, task }]);
      setTask("")
		}
    };


	return (
		<div className="App">
			<span className="heading">Taskify App</span>
			<InputField task={task} setTask={setTask} handleTodos={handleTodos} />
      <TodoList todos={todos} setTodos={setTodos}/>
		</div>
	);
}

export default App;

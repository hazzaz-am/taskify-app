import Todo from "../types/modalTodo";
import SingleTodo from "./SingleTodo";
import "./styles.css";

interface TodoListProps {
	todos: Todo[];
	setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList = ({ todos, setTodos }: TodoListProps) => {
	return (
		<div className="container">
			<div className="todos">
				<span className="todos__heading">Active Tasks</span>
				{todos.map((todo, index) => (
					<SingleTodo
						index={index}
						key={todo.id}
						todo={todo}
						todos={todos}
						setTodos={setTodos}
					/>
				))}
			</div>
		</div>
	);
};

export default TodoList;

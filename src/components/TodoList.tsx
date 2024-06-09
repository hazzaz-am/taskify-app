import Todo from "../types/modalTodo";
import SingleTodo from "./SingleTodo";
import "./styles.css";

interface TodoListProps {
	todos: Todo[];
	setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList = ({ todos, setTodos }: TodoListProps) => {
	return (
		<div className="todos">
			{todos.length > 0 ? (
				todos.map((todo) => (
					<SingleTodo
						key={todo.id}
						todo={todo}
						todos={todos}
						setTodos={setTodos}
					/>
				))
			) : (
				<span className="no__task">No Task Added</span>
			)}
		</div>
	);
};

export default TodoList;

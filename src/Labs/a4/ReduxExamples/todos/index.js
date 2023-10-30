import { useSelector } from "react-redux";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import TodoList from "./TodoList";
function ToDos() {
  const { todos } = useSelector((state) => state.todosReducer);
  return (
    <div>
      <h2>Todos</h2>
      <ul className="list-group">
        <TodoList />
      </ul>
    </div>
  );
}
export default ToDos;
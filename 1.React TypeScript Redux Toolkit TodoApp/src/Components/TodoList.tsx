import { useSelector } from "react-redux";
import Todo from "./Todo";
import { RootState } from "../redux/store";
function TodoList() {
  const { todos } = useSelector((state: RootState) => state.todo);
  return (
    <div className="todoListContainer">
      {todos && todos.map((todo) => <Todo key={todo.id} todoT={todo} />)}
    </div>
  );
}

export default TodoList;

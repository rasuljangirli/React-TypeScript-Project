import { useDispatch } from "react-redux";
import { createTodo } from "../redux/TodoSlice";
import { useState } from "react";
import { TodoType } from "../types/Types";

function TodoCreate() {
  const [todoContext, setTodoContext] = useState<string>("");
  const dispatch = useDispatch();

  const handleCreateTodo = () => {
    const todo: TodoType = {
      id: Math.floor(Math.random() * 99999999),
      context: todoContext,
    };
    if (todoContext.trim() === "") {
      alert("No No NO");
      return;
    }
    dispatch(createTodo(todo));
    setTodoContext("");
  };
  return (
    <div className="todoCreateContainer">
      <input
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setTodoContext(e.target.value)
        }
        value={todoContext}
        type="text"
      />
      <button onClick={handleCreateTodo}>Add</button>
    </div>
  );
}

export default TodoCreate;

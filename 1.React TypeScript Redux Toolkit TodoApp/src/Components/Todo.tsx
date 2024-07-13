import { MdDelete } from "react-icons/md";
import { LuPencilLine } from "react-icons/lu";
import { TodoType } from "../types/Types";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../redux/TodoSlice";
import { FaCheck } from "react-icons/fa6";
import { useState } from "react";
type TodoProps = {
  todoT: TodoType;
};
function Todo(props: TodoProps) {
  const dispatc = useDispatch();
  const { id, context } = props.todoT;
  const [isEdit, setIsEdit] = useState(true);
  const [newTodo, setNewTodo] = useState(context);
  const handleDeleteTodo = () => {
    dispatc(deleteTodo(id));
  };

  const updateTodoTask = () => {
    const payload: TodoType = {
      id,
      context: newTodo,
    };
    dispatc(updateTodo(payload));
    setIsEdit(true);
  };

  return (
    <div className="todoItem">
      <div>
        {isEdit ? (
          <p>{context}</p>
        ) : (
          <input
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setNewTodo(e.target.value)
            }
            value={newTodo}
            type="text"
          />
        )}
      </div>
      <div>
        <MdDelete
          onClick={handleDeleteTodo}
          className="icon"
          style={{ marginRight: "5px" }}
        />
        {isEdit ? (
          <LuPencilLine className="icon" onClick={() => setIsEdit(false)} />
        ) : (
          <FaCheck className="icon" onClick={updateTodoTask} />
        )}
      </div>
    </div>
  );
}

export default Todo;

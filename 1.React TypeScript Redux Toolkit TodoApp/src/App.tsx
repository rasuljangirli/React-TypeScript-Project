import "./App.css";
import TodoCreate from "./Components/TodoCreate";
import TodoList from "./Components/TodoList";

function App() {
  return (
    <div className="appContainer">
      <TodoCreate />
      <TodoList />
    </div>
  );
}

export default App;

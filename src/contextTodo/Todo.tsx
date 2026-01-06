import { useContext, useState } from "react";
import { TodoContext } from "./TodoContext";

const Todo = () => {
  const [text, setText] = useState("");
  const [error, setError] = useState(""); 
  const context = useContext(TodoContext);

  if (!context) return null;

  const { todos, addTodo, removeTodo } = context;

  const handleAdd = () => {
    if (!text.trim()) {
      setError("Todo cannot be empty");
      return;
    }
    addTodo(text);
    setText("");
    setError("");
  };

  return (
    <div className="todo-container">
      <h2>Context API + TypeScript Todo</h2>

      <div className="input-group">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter a todo"
        />
        <button className="btn" onClick={handleAdd}>
          Add Todo
        </button>
      </div>

      {error && <p className="error">{error}</p>}

      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            <span>{todo.text}</span>
            <button className="remove-btn" onClick={() => removeTodo(todo.id)}>
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;

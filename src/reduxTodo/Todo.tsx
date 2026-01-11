import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo, setTodos } from "./todoSlice";
import { RootState, AppDispatch } from "./store";

const Todo = () => {
  const [text, setText] = useState("");
  const [error, setError] = useState("");
  
  const todos = useSelector((state: RootState) => state.todo.todos);
  const dispatch = useDispatch<AppDispatch>();

  // Load once from sessionStorage before first render
  useEffect(() => {
    const stored = sessionStorage.getItem("reduxTodos");
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          dispatch(setTodos(parsed));
        }
      } catch (err) {
        console.error("Failed to parse sessionStorage todos:", err);
      }
    }
  }, [dispatch]);

  // Save whenever todos change
  useEffect(() => {
    if (todos.length >= 0) {
      sessionStorage.setItem("reduxTodos", JSON.stringify(todos));
    }
  }, [todos]);

  const handleAdd = () => {
    if (!text.trim()) {
      setError("Todo cannot be empty");
      return;
    }
    dispatch(addTodo(text));
    setText("");
    setError("");
  };

  return (
    <div className="todo-container">
      <h2>Redux + TypeScript Todo</h2>

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
            <button
              className="remove-btn"
              onClick={() => dispatch(removeTodo(todo.id))}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;

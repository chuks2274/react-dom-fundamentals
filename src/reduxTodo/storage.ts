import { Todo } from "./todoSlice";

// Load todos from sessionStorage
export const loadTodos = (): { todo: { todos: Todo[] } } | undefined => {
  try {
    const savedTodos = sessionStorage.getItem("reduxTodos");
    if (!savedTodos) return undefined;

    const parsed = JSON.parse(savedTodos);
    if (!Array.isArray(parsed)) return undefined;

    return { todo: { todos: parsed } };
  } catch (err) {
    console.warn("Failed to load todos from sessionStorage:", err);
    return undefined;
  }
};

// Optional: save function (if you want to use elsewhere)
export const saveTodos = (todos: Todo[]) => {
  try {
    sessionStorage.setItem("reduxTodos", JSON.stringify(todos));
  } catch (err) {
    console.warn("Failed to save todos to sessionStorage:", err);
  }
};
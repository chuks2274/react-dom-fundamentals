import { createContext, useState, useEffect, ReactNode } from "react";

interface Todo {
  id: number;
  text: string;
}

interface TodoContextType {
  todos: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: number) => void;
}

export const TodoContext = createContext<TodoContextType | null>(null);

export const TodoProvider = ({ children }: { children: ReactNode }) => {
  // Load todos from sessionStorage or default to empty array
  const [todos, setTodos] = useState<Todo[]>(() => {
    const stored = sessionStorage.getItem("todos");
    return stored ? JSON.parse(stored) : [];
  });

  // Save todos to sessionStorage whenever they change
  useEffect(() => {
    sessionStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text: string) => {
    setTodos([...todos, { id: Date.now(), text }]);
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, removeTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

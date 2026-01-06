import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";
import { loadTodos } from "./storage"; // import the helper

export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
  preloadedState: loadTodos(), // load from sessionStorage here
});

// Save whenever todos change
store.subscribe(() => {
  sessionStorage.setItem("reduxTodos", JSON.stringify(store.getState().todo.todos));
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

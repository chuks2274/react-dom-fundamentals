import React from "react";
import "@testing-library/jest-dom"; 
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../reduxTodo/todoSlice";
import TodoRedux from "../reduxTodo/Todo"; 
import TodoContextComponent from "../contextTodo/Todo"; 
import { TodoContext, TodoContextType } from "../contextTodo/TodoContext";
import FetchDemo from "../components/fetchDemo/FetchDemo";
import axios from "axios";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

// ---------------- Redux Todo Tests ----------------
describe("Redux Todo Component", () => {
  const store = configureStore({ reducer: { todo: todoReducer } });

  test("renders Redux Todo component", () => {
    render(
      <Provider store={store}>
        <TodoRedux />
      </Provider>
    );
    expect(screen.getByText(/Redux \+ TypeScript Todo/i)).toBeInTheDocument();
  });

  test("adds a todo", () => {
    render(
      <Provider store={store}>
        <TodoRedux />
      </Provider>
    );

    const input = screen.getByPlaceholderText(/Enter a todo/i);
    const button = screen.getByText(/Add Todo/i);

    fireEvent.change(input, { target: { value: "Test Todo" } });
    fireEvent.click(button);

    expect(screen.getByText("Test Todo")).toBeInTheDocument();
  });
});

// ---------------- Context API Todo Tests ----------------
describe("Context API Todo Component", () => {
  const addTodoMock = jest.fn();
  const removeTodoMock = jest.fn();

  const todos: TodoContextType["todos"] = [{ id: 1, text: "Context Todo" }];

  test("renders Context API Todo component", () => {
    render(
      <TodoContext.Provider value={{ todos, addTodo: addTodoMock, removeTodo: removeTodoMock }}>
        <TodoContextComponent />
      </TodoContext.Provider>
    );

    expect(screen.getByText(/Context API \+ TypeScript Todo/i)).toBeInTheDocument();
    expect(screen.getByText("Context Todo")).toBeInTheDocument();
  });

  test("calls addTodo on button click", () => {
    render(
      <TodoContext.Provider value={{ todos: [], addTodo: addTodoMock, removeTodo: removeTodoMock }}>
        <TodoContextComponent />
      </TodoContext.Provider>
    );

    const input = screen.getByPlaceholderText(/Enter a todo/i);
    const button = screen.getByText(/Add Todo/i);

    fireEvent.change(input, { target: { value: "New Todo" } });
    fireEvent.click(button);

    expect(addTodoMock).toHaveBeenCalledWith("New Todo");
  });
});

// ---------------- FetchDemo Tests ----------------
describe("FetchDemo Component", () => {
  test("renders FetchDemo component", () => {
    render(<FetchDemo />);
    expect(screen.getByText(/Random Cat Generator/i)).toBeInTheDocument();
  });

  test("fetches and displays cat image", async () => {
    mockedAxios.get.mockResolvedValueOnce({ data: [{ id: "1", url: "cat.jpg" }] });
    render(<FetchDemo />);

    const button = screen.getByText(/Get Random Cat/i);
    fireEvent.click(button);

    const img = await screen.findByAltText(/Random Cat/i);
    expect(img).toHaveAttribute("src", "cat.jpg");
  });
});

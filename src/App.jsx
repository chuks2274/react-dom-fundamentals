import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReduxTodo from "./reduxTodo/Todo";
import ContextTodo from "./contextTodo/Todo";
import { TodoProvider } from "./contextTodo/TodoContext";
import Nav from "./components/Nav/Nav";
import Counter from "./components/Counter/Counter";
import Parent from "./components/CounterWithProps/Parent";
import Color from "./components/Color/Color";
import Form from "./components/Form/Form";
import List from "./components/List/List";
import Show from "./components/Show/Show";
import Word from "./components/Word/Word";
import Item from "./components/List/Item";
import FetchDemo from "./components/fetchDemo/FetchDemo";

const App = () => {
  return (
    <Router>
      <div className="app-layout">
        <Nav />

        <div className="content">
          <Routes>
            <Route path="/" element={<h2>Welcome! Select a demo from the menu.</h2>} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/counter-props" element={<Parent />} />
            <Route path="/color" element={<Color />} />
            <Route path="/form" element={<Form />} />
            <Route path="/list" element={<List />} />
            <Route path="/item" element={<Item />} />
            <Route path="/show" element={<Show />} />
            <Route path="/word" element={<Word />} />
            <Route path="/fetch-demo" element={<FetchDemo />} />
            <Route path="/redux-todo" element={<ReduxTodo />} />
            <Route path="/context-todo" element={
              <TodoProvider>
                <ContextTodo />
              </TodoProvider>
            } />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;

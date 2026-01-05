import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Counter from "./components/Counter/Counter";
import Parent from "./components/CounterWithProps/Parent";
import Color from "./components/Color/Color";
import Form from "./components/Form/Form";
import List from "./components/List/List";
import Show from "./components/Show/Show";
import Word from "./components/Word/Word";
import Item from "./components/List/Item";

const App = () => {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        {/* Navigation Menu */}
        <nav style={{ padding: "1rem", width: "200px", borderRight: "1px solid #ccc" }}>
          <h3>React DOM Demos</h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li><Link to="/counter">Counter</Link></li>
            <li><Link to="/counter-props">Counter with Props</Link></li>
            <li><Link to="/color">Color Toggle</Link></li>
            <li><Link to="/form">Form</Link></li>
            <li><Link to="/list">List</Link></li>
            <li><Link to="/item">Item</Link></li>
            <li><Link to="/show">Show/Hide</Link></li>
            <li><Link to="/word">Word Toggle</Link></li>
          </ul>
        </nav>

        {/* Component Display */}
        <div style={{ padding: "1rem", flex: 1 }}>
          <Routes>
            <Route path="/counter" element={<Counter />} />
            <Route path="/counter-props" element={<Parent />} />
            <Route path="/color" element={<Color />} />
            <Route path="/form" element={<Form />} />
            <Route path="/list" element={<List />} />
            <Route path="/item" element={<Item />} />
            <Route path="/show" element={<Show />} />
            <Route path="/word" element={<Word />} />
            <Route path="/" element={<h2>Welcome! Select a demo from the menu.</h2>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
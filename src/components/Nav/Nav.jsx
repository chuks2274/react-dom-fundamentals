import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav">
      <h3>React DOM Demos</h3>
      <ul className="nav-list">
        <li><Link to="/counter">Counter</Link></li>
        <li><Link to="/counter-props">Counter with Props</Link></li>
        <li><Link to="/color">Color Toggle</Link></li>
        <li><Link to="/form">Form</Link></li>
        <li><Link to="/list">List</Link></li>
        <li><Link to="/item">Item</Link></li>
        <li><Link to="/show">Show/Hide</Link></li>
        <li><Link to="/word">Word Toggle</Link></li>
        <li><Link to="/fetch-demo">Fetch / Axios Demo</Link></li>
        <li><Link to="/redux-todo">Redux Todo</Link></li>
        <li><Link to="/context-todo">Context Todo</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;
import { Link } from "react-router-dom";

const Nav = () => {
  return (
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
  );
};

export default Nav;
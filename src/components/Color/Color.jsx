import React, {useState} from "react";


const Color = () => {
    const [color, setColor] = useState("red");

const toggle = () => {
    setColor(prev => prev === "red"? "green": "red");
}
return(
    <div style={{backgroundColor: color,}}className="container">
        <h1 >{color}</h1>
    <div className="btn-group">
        <button className="btn" onClick={toggle}>Toggle Color</button>
    </div>

    </div>
)
}
export default Color
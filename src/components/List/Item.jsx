import React from "react"
const Item = () => {
    const items = ["Apple", "Banana", "Orange"];
   
return(
    <div className="container">
    <h1>Item List</h1>
    <ul>
        {items.map((item, index) => (
            <li key={index}>{item}</li>
        ) )}
    </ul>
    </div>
)
}
export default Item
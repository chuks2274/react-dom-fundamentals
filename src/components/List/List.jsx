import React, {useState} from "react"

const List = () => {
    const [items, setItems] = useState(["Apple", "Banana", "Orange"]);

const addItem = () => {
    setItems([...items, "Mango"]);

}
const removeItem = () => {
    setItems(items.slice(0, - 1));
}
return(
    <div className="container">
    <h1>List Item</h1>
    <ul>
        {items.map((items, index) => (
            <li key={index}>{items}</li>
        ))}
    </ul>
    <div className="btn-group">
    <button className="btn" onClick={addItem}>Add Item</button>
    <button className="btn" onClick={removeItem}>Remove Item</button>
    </div>
    </div>
)
 
}
export default List
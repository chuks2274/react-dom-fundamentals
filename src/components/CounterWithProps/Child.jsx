import React from "react";

const Child = ({count, increment, decrement, reset}) => {

    return(
        <div className="container">
            <h1>{count}</h1>
            <div className="btn-group"> 
            <button className="btn" onClick={increment}>+</button>
            <button className="btn" onClick={decrement}>-</button>
            <button className="btn" onClick={reset}>Reset</button>
            </div>
        </div>
    )

}
export default Child
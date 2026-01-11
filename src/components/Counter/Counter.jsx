import React, {useState} from "react"
const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () =>{
        setCount(prev => prev + 1);
    }
    const decrement = () =>{
        setCount(prev => Math.max (prev - 1,0));
    }
    const reset = () =>{
        setCount(0);
    }

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
export default Counter
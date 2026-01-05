import React, {useState} from "react";
import Child from "./Child";

const Parent = () =>{
  const [count, setCount] = useState(0);
 
 const increment = () =>{
  setCount(prev => prev + 1)
 }
 const decrement = () =>{
  setCount(prev => Math.max (prev - 1, 0))
 }

 const reset = () =>{
  setCount(0)
 }

  return(
    <div >
    <Child count={count} increment={increment} decrement={decrement} reset={reset}/>
    </div>
  )
}
export default Parent;
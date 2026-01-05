import React, {useState} from "react";
const Word = () => {
    const [word, setWord] = useState("Hello World!")

const toggleWord = () => {
    setWord(prev => prev === "Hello World!"? "Goodbye" : "Hello World!")
}


    return(
        <div className="container">
     <h1>{word}</h1>
     <button className="btn" onClick={toggleWord}>Toggle Message</button>
        </div>
    )
}

export default Word
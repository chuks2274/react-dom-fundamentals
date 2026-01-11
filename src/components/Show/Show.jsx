import React, {useState} from "react";

const Show = () => {
    const [message, setMessage] = useState(true);

const toggleMessage = () => {
    setMessage(prev => !prev)
}
return(
     <div className="container">
        <h2>Show/Hide Message</h2>
        {message && <h1>React is awesome!</h1>}
        <button className="btn" onClick={toggleMessage}>Toggle Message</button>
     </div>
)
}

export default Show
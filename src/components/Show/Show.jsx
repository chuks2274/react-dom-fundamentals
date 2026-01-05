import React, {useState} from "react";

const Show = () => {
    const [message, setMessage] = useState(true);

const toggleMessage = () => {
    setMessage(prev => !prev)
}
return(
     <div className="container">
        {message && <h1>Hello World!</h1>}
        <button className="btn" onClick={toggleMessage}>Toggle Message</button>
     </div>
)
}

export default Show
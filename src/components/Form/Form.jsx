import React, {useState} from "react";

const Form = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(!name || !email || !password) {
        setMessage("All fields are required");
        return;
        }
        setMessage("Form submitted successfully!");
        setName(""); setEmail(""); setPassword("");
        setTimeout(() => {
            setMessage("");
        }, 3000);

    }
    return(
        <div className="container">
            
            <form onSubmit={handleSubmit} className="container">
                <h1>Registration Form</h1>
                {message && <h2>{message}</h2>}
                <label>Name: <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Enter your name"/></label>
                <label>Email:<input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter your email"/></label>
                <label>Password:<input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Enter your password"/></label>
                <button className="btn">Submit</button>

            </form>
        </div>
    )
}
export default Form
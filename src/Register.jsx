import React, {useState} from "react";

export const Register = (props) => {
    const[username, setUsername] = useState('');
    const[pass, setPassword] = useState('');
    const[name, setName] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(username);
    }

    return (
        <div className="auth-form-container">
       <form onSubmit={handleSubmit}>
           <label htmlfor="name">Full name</label>
           <input value={name} name="name" id="name" placeholder="full name" />
           <label htmlfor="username">username</label>
           <input value={username} onChange={(e) => setUsername(e.target.value)} type= "username" placeholder="Username" id="username" name="username"/>
           <label htmlfor="password">password</label>
           <input value={pass}onChange={(e) => setPassword(e.target.value)} type= "password" placeholder="*******" id="password" name="password"/>
           <button type="submit">Log In</button>
       </form>
        <button onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
       </div>
    )
}
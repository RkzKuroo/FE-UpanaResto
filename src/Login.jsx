import React, { useState }  from "react";
export const Login = (props) => {
    const[username, setUsername] = useState('');
    const[pass, setPassword] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(username);
    }
    return (
        <div className="auth-form-container">
         <form className="login-form" onSubmit={handleSubmit}>
            <h1>Sign In</h1>
            <label className="user" htmlfor="username">Username</label>
            <input className="user-input" value={username} onChange={(e) => setUsername(e.target.value)} type= "username" placeholder="Username" id="username" name="username"/>

            <label className="pass" htmlfor="password">Password</label>
            <input className="pass-input" value={pass}onChange={(e) => setPassword(e.target.value)} type= "password" placeholder="*******" id="password" name="password"/>

            <button className="login-btn" type="submit">Log In</button>
       </form>
        <div className="right">
            <img src="./img.png" alt="" />
        </div>
        <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here</button>
        </div>
        
        
        
    )
}
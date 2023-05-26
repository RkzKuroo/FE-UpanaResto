import React, { useState }  from "react";
export const Login = (props) => {
    const[email, setEmail] = useState('');
    const[pass, setPassword] = useState('');

    const handleSubmit = async (e) =>{
        e.preventDefault();
    const loginData = {password:pass, email:email, password_confirmation:pass} 
    const response = await fetch("http://127.0.0.1:8000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });
      console.log(response)
    }
    
    return (
        <div className="auth-form-container">
         <form className="login-form" onSubmit={handleSubmit}>
            <h1>Sign In</h1>
            <label className="user" htmlFor="Email">Email</label>
            <input className="user-input" value={email} onChange={(e) => setEmail(e.target.value)} type= "Email" placeholder="Email" id="Email" name="email"/>

            <label className="pass" htmlFor="Password" >Password</label>
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
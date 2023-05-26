import React, {useState} from "react";

export const Register = (props) => {
    const[username, setUsername] = useState('');
    const[pass, setPassword] = useState('');
    const[email, setEmail] = useState('');

    const handleSubmit = async (e) =>{
        e.preventDefault();
    const regisData = {name: username, password:pass, password_confirmation: pass, email:email} 
    const response = await fetch("http://127.0.0.1:8000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(regisData),
      });
      console.log(response)
    }
    
    return (
        <div className="auth-form-register">
       <form className="regis-form" onSubmit={handleSubmit}>
            <h1>Sign Up</h1>
           <label className="email" htmlFor="name">Email</label>
           <input className="email-inp" value={email} onChange={(e) => setEmail(e.target.value)} email="email" id="email" placeholder="Email" />
           
           <label className="user-regis" htmlFor="username">username</label>
           <input  className="user-inp" value={username} onChange={(e) => setUsername(e.target.value)} type= "username" placeholder="Username" id="username" name="username"/>

           <label className="pass-regis" htmlFor="password">password</label>
           <input className="pass-inp" value={pass}onChange={(e) => setPassword(e.target.value)} type= "password" placeholder="*******" id="password" name="password"/>

           <button className="regis-btn" type="submit">SignUp</button>
       </form>
       <div className="right">
            <img src="./img.png" alt="" />
            </div> 
        <button className="link-btn2" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
       </div>
    )
}
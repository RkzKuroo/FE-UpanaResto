import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import { Login } from"./Login";
import { Register } from"./Register";
import Sidebar from './components/Sidebar';
import Home from './pages/Home.jsx';
import Post from './pages/Post.jsx';
function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }
  return (
    <div className="App">
      <BrowserRouter>
      <Sidebar>
      <Routes>
      <Route path="/"element={<Home/>}/>
      <Route path="/home"element={<Home/>}/>
      <Route path="/post"element={<Post/>}/>
        
        
  
        </Routes>  
        </Sidebar>
      </BrowserRouter> 







      {/* {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }  */}
      
    </div>
  );
}

export default App;

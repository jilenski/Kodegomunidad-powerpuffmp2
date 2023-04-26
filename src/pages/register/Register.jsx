import "./register.css"
import { Link, useNavigate } from "react-router-dom"
import { useState } from 'react';


export default function Register() {

  const [email, setEmail] = useState('');
  const [passw, setPassword] = useState('');

  const navigate = useNavigate();
 
 //const lguser = localStorage.getItem('logUser');
 
   const handleSubmit = (e)=>{
   e.preventDefault();
   navigate('/registerform');
    console.log(email + ' ' + passw);

   }

  return (
    <div className="register">
        <pan className="registerTitle">REGISTER</pan>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input type="text" className="registerInput" placeholder ="Enter your username..."/>
        <label>Email</label>
        <input type="text" className="registerInput" placeholder ="Enter your email..."onChange={(e) => setEmail(e.target.value)}/>
        <label>Password</label>
        <input type="password" className="registerInput" placeholder ="Enter your pasword..."/>
        <button className="registerButton">Register</button>
      </form>
      <button className="registerLoginButton">
        <Link className ="link" to="/login">Login</Link>
        </button>
    </div>
  )
}

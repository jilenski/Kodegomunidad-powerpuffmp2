import "./login.css"
import { Link, useNavigate } from "react-router-dom"
import { useState } from 'react';

export default function Login() {
 const [email, setEmail] = useState('');
 const [passw, setPassword] = useState('');
 const [err, setError] = useState('');
 const navigate = useNavigate();

//const lguser = localStorage.getItem('logUser');

  const handleSubmit = (e)=>{
  e.preventDefault();

   console.log(email + ' ' + passw);
   //
    if(email === 'admin@mail.com' && passw === '123456'){
      const newuser = {
        //Personal Information
          Firstname : "Juan",
          Lastname : "Dela Cruz",
          Position : "Fullstack Developer",
          Address : "Cagayan De Oro",
          Email: "admin@mail.com",
          Phone : "(02) 8-7000",
          Mobile: "(+63) 901-234-5678",

        //Social 
          Website: "https://JuanDelaCruz.com",
          Github: "github.com/Juan-Dela-Cruz",
          Tweeter : "@juandelacruz-tweet",
          Insta: "itsjuandelacruz",
          Facebook: "Juan-Dela-Cruz",


          
           }
           //lguser.push(newuser)
           
           window.localStorage.setItem('logUser', JSON.stringify(newuser));
           setError('');
           navigate('/profile');

     } else {
      setError('Invalid Username and Password')
     }

  }


  return (
    <div className="login">
        <pan className="loginTitle">LOGIN</pan>
        {err}
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Email</label>
        <input type="text" className="loginInput" placeholder ="Enter your email..." onChange={(e) => setEmail(e.target.value)} />
        <label>Password</label>
        <input type="password" className="loginInput" placeholder ="Enter your pasword..." onChange={(e) => setPassword(e.target.value)}/>
        <button className="loginButton">Login</button>
      </form>
      <button className="loginRegisterButton">
        <Link className ="link" to="/register">Register</Link>
      </button>
    </div>
  )
}

import React from 'react'
import { useState } from 'react'

function Login() {
  const [formdata, setFormData] = useState({
    email: "",
    password: "",
    role: ""
  })
  
  const handleChange =(e) =>{
    setFormData({...formdata, [e.target.name]: e.target.value})
  }
  
  
  const handleSubmit =(e) =>{
    e.preventDefault()
    fetch("https://bus-booking-web-api.herokuapp.com/login", {
      credentials: "include",
      method: "POST",
      headers:{
        "Content-Type" :"application/json"
      },
      body: JSON.stringify(formdata)
    })
    .then(res => res.json())
    .then(data => {
      localStorage.setItem("id", data.id)
      localStorage.setItem("name", data.name)
      localStorage.setItem("role", data.role)
    })
  }
  
  const handleLogout =() =>{
    fetch("https://bus-booking-web-api.herokuapp.com/logout", {
      credentials: "include",
      method: "DELETE"
    })
    localStorage.clear()
    console.log("logged out")
  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit} className="form">
        <input type="text"
         name="email"
          onChange={handleChange}
          placeholder="email"
        />
        <br />
        <input type="text"
         name="password"
          onChange={handleChange}
          placeholder="password"
        />
        <br />
        <input type="text"
         name="role"
          onChange={handleChange} 
          placeholder="role"
        />
        <br />
        <input type="submit" value="Login" />
        <br />
      </form>
      <button onClick={handleLogout}>Logout </button>
     
    </div>
  );
  }
  
  

export default Login


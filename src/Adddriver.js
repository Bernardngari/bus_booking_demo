import React from 'react'
import { useState } from 'react'

function Adddriver() {

  const [formData, setFormData] = useState({})

  function handleChange(e){
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  function handleSubmit(e){
    e.preventDefault();
    fetch("https://bus-booking-web-api.herokuapp.com/drivers", {
      credentials: "include",
      method: "POST", 
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then((r) => r.json())
    .then((data) => console.log(data))
  }


  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} type="text" name="name" placeholder='name' /> <br />
      <input onChange={handleChange} type="text" name="email" placeholder='email' /> <br />
      <input onChange={handleChange} type="text" name="role" placeholder='role' /> <br />
      <input onChange={handleChange} type="password" name="password" placeholder='password' /> <br />
      <input onChange={handleChange} type="submit" name="" value="Add driver" /> <br />
    </form>
  )
}

export default Adddriver

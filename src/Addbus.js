import React from 'react'
import { useState } from 'react';

function Addbus() {

  const [formData, setFormData] = useState({})

  function handleChange(e){
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  function handleSubmit(e){
    e.preventDefault();
    fetch("https://bus-booking-web-api.herokuapp.com/buses", {
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

  console.log(formData);
  return (
    <form onSubmit={handleSubmit} className="addbus">
      <input onChange={handleChange} type="text" name="plate_number" placeholder='plate number' /> <br />
      <input onChange={handleChange} type="number" name ="no_of_seats" placeholder='number of seats' /> <br />
      <input onChange={handleChange} type="number" name="cost_per_seat" placeholder='cost per seat' /> <br />
      <input onChange={handleChange} type="text" name="from" placeholder='Origin' /> <br />
      <input onChange={handleChange} type="text" name="to" placeholder='Destination' /> <br />
      <input onChange={handleChange} type="date" name="travel_date" placeholder='Travel date' /> <br />
      <input onChange={handleChange} type="time" name="travel_time" placeholder='Travel time' /> <br />
      <label>Available<input onChange={handleChange} type="checkbox"  name="available" /> </label> <br />
      <input onChange={handleChange} type="number" name="driver_id" placeholder='Driver ID' /> <br />
      <input onChange={handleChange} type="submit" value='Add bus' /> <br />
    </form>
  )
}

export default Addbus

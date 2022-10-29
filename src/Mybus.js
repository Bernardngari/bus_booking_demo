import { useEffect, useState } from 'react';
import Buscard from './Buscard';

function Mybus() {
  let id = localStorage.getItem("id")
  const [busData, setBusData] = useState({})
  const [seats, setSeats]= useState([])
  useEffect(()=>{
    fetch(`https://bus-booking-web-api.herokuapp.com/drivers/${id}`,{
      credentials: "include"
    })
    .then((r) => r.json())
    .then((driver) =>{
      setBusData(driver.bus)
      setSeats(driver.bus.seats)
    })
  },[])

  return (
    <div>
      <Buscard busData={busData} seats={seats} />
    </div>
  )
}

export default Mybus

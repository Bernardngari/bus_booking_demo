import { useEffect, useState } from 'react';
import Buscard from './Buscard';
import { useContext } from 'react';
import { UserContext } from './App';

function Mybus() {
  const user = useContext(UserContext);
  const id = user.id
  const [busData, setBusData] = useState({})
  const [seats, setSeats]= useState([])
  useEffect(()=>{
    if (id > 0){
      fetch(`https://bus-booking-web-api.herokuapp.com/drivers/${id}`,{
        credentials: "include"
      })
      .then((r) => r.json())
      .then((driver) =>{
        setBusData(driver.bus)
        setSeats(driver.bus.seats)
      })
    }

  },[id])
   

  const onBooking =(seat) =>{
    let filtered = seats.filter((unbookedSeat) =>unbookedSeat.id !== seat.id)
    let newState = [...filtered, seat]
    setSeats(newState)
  }

  return (
    <div>
      {busData !== null?
       <Buscard  busData={busData} seats={seats} onBooking={onBooking}/>
      :
      <p>Please Register your bus on the platform. Go to Add bus</p>
      }

    </div>
  )
}

export default Mybus

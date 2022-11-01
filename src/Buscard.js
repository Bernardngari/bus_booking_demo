import { confirmAlert } from "react-confirm-alert"
import 'react-confirm-alert/src/react-confirm-alert.css';
import { UserContext } from './App';
import { useContext } from "react";
function Buscard({busData, seats, onBooking}) {
    const{plate_number, to, from, travel_date, travel_time} = busData
    const user = useContext(UserContext)
    const handleClick=(e)=>{
      const seatNo = e.target.textContent
      const id = e.target.id
      fetch(`https://bus-booking-web-api.herokuapp.com/seats/${id}`, {
        credentials: "include",
        method: "PATCH",
        headers:{
          "Content-Type": "application/json"
        },
        body: JSON.stringify({is_booked: true,seat_no: seatNo,customer_id: user.id})
      })
      .then((res) =>res.json())
      .then((seat) =>onBooking(seat))
    }

    function handleAlreadyBooked(){
      alert("Red seats are already booked.Green seats are available. Check if there are any.")
    }

    function handleBook(e){
      confirmAlert({
        title: "Confirm booking",
        message:"Do you wish to book seat?",
        buttons: [
          {
            label: "Book",
            onClick : ()=> handleClick(e)
          },
          {
            label: "Exit",
            onClick: () => null
          }
        ]
      })
    }

    
    let busRepresentation = (seats.map((seat) =>(
        <p id={seat.id}  key={seat.id} className="seat" style={{backgroundColor:seat.is_booked? "red": "green", color:"white"}}
        onClick={seat.is_booked? handleAlreadyBooked: handleBook}>{seat.seat_no}</p>
    )))

  return (
    <div>
      <p className='aqua'>{plate_number}</p>
      <p className='aqua'>Travelling from: {from}</p>
      <p className='aqua'>Destination: {to}</p>
      <p className='aqua'>Travel Day: {travel_date}</p>
      <p className='aqua'>Departure time: {travel_time}</p>
      <div className='busRep'>
        {busRepresentation}
      </div>
    </div>
  )
}

export default Buscard

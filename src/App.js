import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Navbar from "./Navbar";
import Addbus from './Addbus';
import Adddriver from './Adddriver';
import Mybus from './Mybus';
import { createContext, useState,useEffect } from 'react';

function App(){
  const [user, setUser] = useState({})
  const [reloadOnLogin, setReload] = useState(false)
  const onLogin=()=>{
    setReload(()=>!reloadOnLogin)
  }

  useEffect(()=>{
    fetch("https://bus-booking-web-api.herokuapp.com/me",{
      credentials: "include"
    })
    .then(r => r.json())
    .then(user => {
      setUser(user)
    })
  },[reloadOnLogin])
console.log(user);
  return(
    <UserContext.Provider value={user}>
      <Router>
        <Navbar user={user}/>
        <Routes>
          <Route path='/' element={<Login onLogin={onLogin}/>} />
          <Route path='/create/bus' element={<Addbus />} />
          <Route path='/create/driver' element={<Adddriver />} />
          <Route path='/mybus' element={<Mybus />} />
        </Routes>
      </Router>
    </UserContext.Provider>
  )
}
 export const UserContext = createContext(); 
export default App;

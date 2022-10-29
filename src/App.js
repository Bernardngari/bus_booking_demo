import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Navbar from "./Navbar";
import Addbus from './Addbus';
import Adddriver from './Adddriver';
import Mybus from './Mybus';
function App() {

  return(
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/create/bus' element={<Addbus />} />
          <Route path='/create/driver' element={<Adddriver />} />
          <Route path='/mybus' element={<Mybus />} />
        </Routes>
      </Router>

  )
}
  
export default App;

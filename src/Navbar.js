import { NavLink } from 'react-router-dom'

function Navbar({user}){
  return (
    <nav>
      <NavLink className="links" to='/'>{user.id > 0? "Logout": "Login"}</NavLink>
      { user.id > 0 ? null: <NavLink className="links" to="/create/driver">Add driver</NavLink>}
      {user.role==="driver" && !user.bus? <NavLink className="links" to="/create/bus">Add bus</NavLink> : null}
      {user.role==="driver"? <NavLink className="links" to="/mybus">My Bus</NavLink>: null}
    </nav>

  )
}

export default Navbar

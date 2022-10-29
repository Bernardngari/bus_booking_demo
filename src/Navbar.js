import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
      <NavLink className="links" to='/'>Login</NavLink>
      <NavLink className="links" to="/create/driver">Add driver</NavLink>
      <NavLink className="links" to="/create/bus">Add bus</NavLink>
      <NavLink className="links" to="/mybus">My Bus</NavLink>
    </nav>

  )
}

export default Navbar

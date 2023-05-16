import React from 'react'
import {NavLink} from 'react-router-dom';

const Footer = () => {
  return (
    <div className="container-fluid">
  <footer className=" footer py-3 my-4">
    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
      <li>
      <NavLink className="nav_link" to='/'>Home</NavLink>
    </li>
    <li>
      <NavLink className="nav_link" to='/nosotros'>Nosotros</NavLink>
    </li>

    </ul>
    <p className="text-center text-body-secondary">&copy; The VeganMArket</p>
  </footer>
</div>
  )
}

export default Footer;
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../Images/logo.png';
import './Navbar.css';
import { NavLink, Outlet } from 'react-router-dom';


const Navbar = () => {


  return (
    
   <>
   
   <nav className="navbar navbar-expand-lg" id='navigation'>
  <div className="container-fluid">
    <img width="120px" height="40px" className='logo' src={Logo} alt="BOOKING SPOT"/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav">
        <li className="nav-item ">
          <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/room">Rooms</NavLink>
        </li>
        {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Hotels
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="/">Luxury hotel</a></li>
            <li><a className="dropdown-item" href="/">Delux hotel</a></li>
            <li><a className="dropdown-item" href="/">3 star hotel</a></li>
            <li><a className="dropdown-item" href="/">5 star hotel</a></li>
            <li><a className="dropdown-item" href="/">7 star hotel</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li> */}
        <li className="nav-item">
          <NavLink className="nav-link" to="/hotel">Hotels</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About Us</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
        </li>
        </ul>

        <ul className="navbar-nav">

      <li className="nav-item">
          <NavLink className="btn" to="/signin">Sign in</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="btn" to="/register">Resgister</NavLink>
        </li>

      </ul>
    </div>
  </div>
</nav>
<Outlet />




   </>
    
  )
  
  
  
  
}

export default Navbar
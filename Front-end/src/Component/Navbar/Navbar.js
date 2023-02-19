import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../Images/logo.png';
import './Navbar.css';
import { NavLink, Outlet } from 'react-router-dom';


const Navbar = (props) => {


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
          <NavLink className="nav-link" aria-current="page" to="/">{props.home}</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/room">{props.room}</NavLink>
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
          <NavLink className="nav-link" to="/hotel">{props.hotel}</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">{props.about}</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link" to="/contact">{props.contact}</NavLink>
        </li>
        </ul>

        <ul className="navbar-nav">

      <li className="nav-item">
          <NavLink className="btn" to="/signin">{props.signin}</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="btn" to="/register">{props.register}</NavLink>
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
import React from 'react'
import Navbar from './Component/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Component/Home/Home';
import Room from './Component/Rooms/Room';
import About from './Component/About/About';
import Contact from './Component/Contact/Contact';
import Signin from './Component/Signin/Signin';
import Register from './Component/Register/Register';
import Hotel from './Component/Hotels/Hotel';
import Footer from './Component/footer/Footer';

const App = () => {
  return (
    <>
     <BrowserRouter>
      <Routes>
      <Route path="/"  element={<Navbar home="Home" about="About Us" room="Rooms" signin="Sign in" register="Register" contact="Contact Us" hotel="Hotel" />}>
        <Route index exact element={<Home />} />
          <Route exact path="/room"   element={<Room/>} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact/>} />
          <Route exact path="/hotel" element={<Hotel/>} />
          <Route exact path='/signin' element={<Signin/>}/>
          <Route exact path='/register' element={<Register/>}/>
        </Route>
    </Routes>
    </BrowserRouter>
    <Footer/>
    </>
  )
}

export default App
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

const App = () => {
  return (
    <>
     <BrowserRouter>
      <Routes>
      <Route path="/"  element={<Navbar />}>
        <Route index  element={<Home />} />
          <Route path="/room"  element={<Room/>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/hotel" element={<Hotel/>} />
          <Route path='/signin' element={<Signin/>}/>
          <Route path='/register' element={<Register/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
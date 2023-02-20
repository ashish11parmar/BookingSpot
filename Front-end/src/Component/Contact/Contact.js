import React from 'react'
import './Contact.css';

const Contact = () => {
  return (
    <>
   <div className='Contact mt-5 mx-4'>
    <div className='left'>
    <p className="h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Contact Info</p>
    <p className='mt-3'>Get in Touch&nbsp;-&nbsp;We're Always Happy To Hear For You</p>
    <p className='mt-3'>Phone&nbsp;:&nbsp;+91&nbsp;&nbsp;7878953245</p>
    <p className='mt-3'>Email&nbsp;:&nbsp;booking.spot@gmail.com</p>
    <p className='mt-3'>Address&nbsp;:&nbsp;Rajkot-Gujarat</p>
    </div>
   </div>

   <div className='Form '>
    <div className='right'>
      <form method='POST' className=''>
      <div className="d-flex col lg-6 mb-4">
        <div className="form-group flex-fill mb-0">
        <input type="email" id="email" name='email'  placeholder='Enter Your Name' className="form-control" />
        </div>
        </div>
        <div className='col lg-6 mb-4'>
          <input type="name" id="name" name='name' placeholder='Enter Your Name' className='forn-control'/>
        </div>
        <div className='col lg-6 mb-4'>
          <input type="email" id="email" name='email' placeholder='Enter Your Email' className='forn-control'/>
        </div>
       <textarea type="text" row='5' id="text" placeholder='Enter Your Text Here' className='form-control'></textarea>
      </form>
    </div>
   </div>
    </>
  )
}

export default Contact
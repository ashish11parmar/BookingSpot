import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

const Hotel = () => {


  const callHotelpage =async () =>{
try{


    const res = await fetch('/hotel', {
      method:'GET',
      headers:{
        Accept:"application/json",
        "Content-Type" : "application/json",
      },
      credentials:"include"
    });
    const data = await res.json();
    console.log(data);

    if(!res.status === 200){
      const error = new Error(res.error);
      throw error;
    }

  }catch(err){

    console.log(err);
    Navigate('/signin')

  }


  }

  useEffect(()=>{

    callHotelpage();

  },[]);

  return (
   <>
  <h1>Hotel</h1> 
    </>
  )
}

export default Hotel
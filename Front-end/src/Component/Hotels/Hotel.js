import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

const Hotel = () => {

  const verifyPage=async()=>{
    try{
        const res=await fetch('/hotel',{
            method:"GET",
            setHeader:{
                Accept:"application/json",
                "Content-Type":"application/json"
            },
            credentials:"include"
        });
        const data=await res.json();
        console.log(data);
        
        if(!res.status===200){
            const err=new Error(res.error);
            throw err;
        }
    }catch(err) {
        console.log(err);
        Navigate.push("/signin");
    }
}

useEffect(()=>{
    verifyPage();
},[])


   


  return (
   <>
  <h1>Hotel</h1> 
    </>
  )
}

export default Hotel
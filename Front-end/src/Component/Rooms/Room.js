import React, { useEffect } from 'react'

const Room = () => {

  const getRoom = async ()=>{

    const response = await fetch('/room');
    const data = await response.json();
    console.log(data);


  }

  useEffect(()=>{
        getRoom();
  })

  return (
    <div>Room</div>
  )
}

export default Room
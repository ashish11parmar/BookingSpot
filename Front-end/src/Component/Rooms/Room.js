import React, { useEffect, useState } from 'react';
import room from '../Images/room.png';

const Room = () => {

  const [rooms, setrooms] = useState([])

  const getRoom = async () => {

    const response = await fetch('/getallrooms');
    const data = await response.json();
    setrooms(data)
  }

  useEffect(() => {
    getRoom();
  }, [])

  return (
    <>
    <div className='image'>
      <img className='image' src={room} alt='room' style={{'width':'100%', 'height':'650px'}}/>
      <div className='datepicker'>

      </div>
    </div>
          {
            rooms.map((room) => {
              return (
                <>
             

                </>
              )
            })
          }

    </>

  )
}

export default Room
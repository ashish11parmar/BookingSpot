import React, { useEffect, useState } from 'react';
import roomcss from './Room.module.css';
import room from '../Images/room.png';

const Room = () => {

  const [rooms, setrooms] = useState([]);

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
        <img className='image' src={room} alt='room' style={{ 'width': '100%', 'height': '650px' }} />

      </div>
      <div className='container'>
        <div className='row'>

          {
            rooms.map((room) => {
              return (
                <>
                  <div className={roomcss.card}>
                    <img src={room.imageurls[0]} className={roomcss.cardimg}alt="room" />
                    <div className="card-body">
                      <h5 className="card-title">{room.name}</h5>
                      <p className="card-text">{room.description}</p>
                      <p>Type: {room.type}</p>
                      <p>Maxcount: {room.maxcount}</p>
                      <p>phone: {room.phonenumber}</p>
                     
                    </div>
                  </div>

                </>
              )
            })
          }
        </div>
      </div>

    </>

  )
}

export default Room
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import roomcss from './Room.module.css';
import { useParams } from 'react-router-dom';
import room from '../Images/room.png';
import Loader from '../Loader/Loader';


const Room = () => {

  const {id} = useParams();
  console.log(id);



  const [rooms, setrooms] = useState([]);
  const [loading, setloading] = useState([]);
  const [error, seterror] = useState([]);

  const [modeldata, setmodeldata] = useState({

    _id: '',
    name: '',
    description: '',
    type: '',
  })

  const showDetail = () => {
    
    fetch(`/room/${room.email}}`)

      .then(resposne => resposne.json())
      .then(res => setmodeldata(res))
  }


  const getRoom = async () => {

    setloading(true)
    const response = await fetch('/room');
    const data = await response.json();
    setrooms(data)
    setloading(false)
  }

  useEffect(() => {
    seterror(true)
    getRoom();
    seterror(false)

  }, [])

  return (
    <>
  
      <div className='image'>
        <img className='image' src={room} alt="room" style={{ 'width': '100%', 'height': '650px' }} />

      </div>

      <div className='container'>
        <div className='row'>

          {
            loading ? (<h1><Loader /></h1>) : error ? (<h1>Error</h1>) : (rooms.map((room) => {
              return (
                <>
              
                  <div className={roomcss.card}>
                    <img src={room.imageurls[0]} className={roomcss.cardimg} alt="room" />
                    <div className="card-body">
                      <h5 className={roomcss.title}>{room.hotel_name}</h5>
                      <p>Type: {room.type}</p>
                      <p>City: {room.city}</p>
                      <p>Maxcount: {room.maxcount}</p>
                      <p>phone: {room.phonenumber}</p>
                      <p className={roomcss.detail} data-bs-toggle="modal" onClick={(e) => showDetail(room.email)} data-bs-target="#exampleModal">More Detail</p>
                    </div>
                  </div>
        



                  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel">{modeldata.name}</h5>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                          <p>Type:{room.type}</p>
                          <p>{modeldata.phonenumber}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                </>
              )
            }))

          }
        </div>

      </div>



    </>

  )
}

export default Room
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import signup from '../Images/register.png';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import registercss from './Register.module.css';

const Register = () => {

  const navigate = useNavigate();

  const [user, setuser] = useState({

    name:"", email:"",lastname:"",number:"",password:"",cpassword:""

  });
  let name, value;
  const Handleinput = (e) =>{

    name = e.target.name;
    value = e.target.value;

    setuser({...user, [name]:value})
     
  }

  const PostData = async (e) =>{
    e.preventDefault();

    const {firstname,email,phone,lastname,password,cpassword} = user

    const res = await fetch("/register", {
      method:"POST",
      headers:{
         "Content-Type":"application/json"
      },
      body: JSON.stringify({
        firstname,lastname,email,phone,password,cpassword
      })
    });
    const data = await res.json();

    if(data.status===422 || !data){
      window.alert("Invalid Registration")
      console.log("Invalid Registration");
    }else{
      window.alert("Registration  successfull")
      console.log("Registration successfull");
      navigate('/signin');
    }

  }


  return (
   <>
<section className="mt-5">
  <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="card text-black" >
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                <form method='POST' className="mx-1 mx-md-4">

                  <div className="d-flex flex-row align-items-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-person-check me-3" viewBox="0 0 16 16">
  <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514ZM11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>
  <path d="M8.256 14a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Z"/>
</svg>
                    <div className="form-group flex-fill mb-0">
                      <input type="text" id="firstname" name='firstname' value={user.fisrtname} onChange={Handleinput} placeholder='Enter firstname' className="form-control" required />
                    </div>
                  </div>

                  

                  <div className="d-flex flex-row align-items-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-person-check me-3" viewBox="0 0 16 16">
  <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514ZM11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>
  <path d="M8.256 14a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Z"/>
</svg>
                    <div className="form-group flex-fill mb-0">
                      <input type="text" id="lastname" name='lastname' value={user.lastname} onChange={Handleinput} placeholder='Enter lastname' className="form-control" required />
                    </div>
                  </div>

                  

                  <div className="d-flex flex-row align-items-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-envelope-at-fill me-3" viewBox="0 0 16 16">
  <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2H2Zm-2 9.8V4.698l5.803 3.546L0 11.801Zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586l-1.239-.757ZM16 9.671V4.697l-5.803 3.546.338.208A4.482 4.482 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671Z"/>
  <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034v.21Zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791Z"/>
</svg>
                    <div className="form-group flex-fill mb-0">
                      <input type="email" id="email" name='email' value={user.email} onChange={Handleinput} placeholder='Enter you email' className="form-control" required />
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-telephone-plus-fill me-3" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM12.5 1a.5.5 0 0 1 .5.5V3h1.5a.5.5 0 0 1 0 1H13v1.5a.5.5 0 0 1-1 0V4h-1.5a.5.5 0 0 1 0-1H12V1.5a.5.5 0 0 1 .5-.5z"/>
</svg>
                    <div className="form-group flex-fill mb-0">
                      <input type="number" id="phone" name='phone' value={user.phone} onChange={Handleinput} placeholder='Enter number' className="form-control" required />
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-key-fill me-3" viewBox="0 0 16 16">
  <path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2zM2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
</svg>
                    <div className="form-group flex-fill mb-0">
                      <input type="password" id="password" name='password' value={user.password} onChange={Handleinput} placeholder='Password' className="form-control" required />
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-key-fill me-3" viewBox="0 0 16 16">
  <path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2zM2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
</svg>
                    <div className="form-group flex-fill mb-0">
                      <input type="password" id="cpassword" name='cpassword' value={user.cpassword} onChange={Handleinput} placeholder='Conform password' className="form-control" required/>
                    </div>
                  </div>

                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="submit" name='signup' id='signup' value="register" onClick={PostData} className={registercss.btn}>Register</button>
                  </div>

                </form>

              </div>
              
                <img className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2" src={signup} alt="signup"/>

              
            </div>
            <i className="fas fa-check-circle me-2 text-success"></i> <Link to='/signin' className='link-dark text-justify-center'>Already have an account?</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
   </>
  )
}

export default Register
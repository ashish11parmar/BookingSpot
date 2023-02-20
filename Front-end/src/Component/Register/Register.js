import React from 'react';
import signup from '../Images/register.png';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import registercss from './Register.module.css';

const Register = () => {

  const navigate = useNavigate();

  const [user, setuser] = useState({

    name:"", email:"",work:"",number:"",password:"",cpassword:""

  });
  let name, value;
  const Handleinput = (e) =>{

    name = e.target.name;
    value = e.target.value;

    setuser({...user, [name]:value})
     
  }

  const PostData = async (e) =>{
    e.preventDefault();

    const {name, email,phone,work,password,cpassword} = user

    const res = await fetch("/register", {
      method:"POST",
      headers:{
         "Content-Type":"application/json"
      },
      body: JSON.stringify({
        name, email,phone,work,password,cpassword
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
                    <i className="fas fa-user fa-lg me-3  fa-fw"></i>
                    <div className="form-group flex-fill mb-0">
                      <input type="text" id="name" name='name' value={user.fisrtname} onChange={Handleinput} placeholder='Enater firstname' className="form-control" required />
                    </div>
                  </div>

                  

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div className="form-group flex-fill mb-0">
                      <input type="text" id="lastname" name='lastname' value={user.lastname} onChange={Handleinput} placeholder='Enter lastname' className="form-control" required />
                    </div>
                  </div>

                  

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-briefcase fa-lg me-3 fa-fw"></i>
                    <div className="form-group flex-fill mb-0">
                      <input type="email" id="email" name='email' value={user.email} onChange={Handleinput} placeholder='Enter you email' className="form-control" required />
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-phone fa-lg me-3 fa-fw"></i>
                    <div className="form-group flex-fill mb-0">
                      <input type="number" id="phone" name='phone' value={user.phone} onChange={Handleinput} placeholder='Enater number' className="form-control" required />
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                    <div className="form-group flex-fill mb-0">
                      <input type="password" id="password" name='password' value={user.password} onChange={Handleinput} placeholder='Password' className="form-control" required />
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
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
            <i class="fas fa-check-circle me-2 text-success"></i> <Link to='/signin' className='link-dark text-justify-center'>Already have an account?</Link>
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
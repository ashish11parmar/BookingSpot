import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate } from 'react-router-dom';
import './Signin.css';
import login from '../Images/login.jpg';
import {Link} from 'react-router-dom';
// import google from '../Images/google.png';
import {GoogleLogin, GoogleLogout} from 'react-google-login';
const Signin = () => {


  const [showlogin, setshowlogin] = useState(true)
  const [showlogout, setshowlogout] = useState(false)
  const clientid = '191621319260-kotl3vilt2qkueb552dccsbgih0dam00.apps.googleusercontent.com';

  const onLoginsucess = (res) =>{
    console.log('login success');
    setshowlogin(false);
    setshowlogout(true);
  }

  const onLoginfail = (res) =>{
console.log('fail');

  }

  const logout = (res)=>{
    alert('logout');
    setshowlogout(false);
setshowlogin(true)
  }

  // sign in using email

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

    
  const navigate = useNavigate();

  const LoginUser = async(e) =>{
    e.preventDefault();
    const res = await fetch('/signin', {
      method:'POST',
      headers:{
        "Content-Type": "application/json"
      },
      body:JSON.stringify({
        email,
        password
      })
    });

    const data = res.json();

    if(res.status === 400){
      window.alert('Invalid credential');
    }
    else if (!email){
      window.alert('Invalid Email....');
    }
    else if (!password){
      window.alert('Invalid Password....');
    }
    else{
      window.alert('Login success');
      navigate('/');
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

                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-5">Sign In</p>

                <form method="POST" className="mx-1 mx-md-4">
                  <div className="d-flex flex-row align-items-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-person-fill me-3" viewBox="0 0 16 16">
  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
</svg>
                    <div className="form-group flex-fill mb-0">
                      <input type="email" id="email" name='email'  value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email' className="form-control" />
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-key-fill me-3" viewBox="0 0 16 16">
  <path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2zM2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
</svg>
                    <div className="form-group flex-fill mb-0">
                      <input type="password" id="password"  name='password' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Password' className="form-control" />
                    </div>
                  </div>
    
                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="submit" name='signin' id='signin' value="login" onClick={LoginUser} className="btn-sbt">Signin</button>
                  </div>
                  <div className=" d-flex justify-content-center mx-4 mb-3 mb-lg-4">
{showlogin ?
                  <GoogleLogin className='google'
                   clientId={clientid}
                   buttonText='Sign in with google'
                   onSuccess={onLoginsucess}
                   onFailure={onLoginfail}
                   cookiePolicy={'single_host_origin'}
                  /> : null}
{
  showlogout ?
                  <GoogleLogout

                  clientId={clientid}
                  buttonText='Logout'
                  onLogoutSuccess={logout}
                  
                  />:null}
                  </div>
                </form>

              </div>
              
                <img className="col-md-8 col-lg-2 col-xl-5 d-flex align-items-center order-1 order-lg-2" src={login} alt="signup"/>
            </div>
            <i class="fas fa-check-circle me-2 text-success"></i> <Link to='/register' className='link-dark text-justify-center'>Don't have an account?</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
   </>
  )
}

export default Signin
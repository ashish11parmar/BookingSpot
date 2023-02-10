import React from 'react'
import './Signin.css';
import login from '../Images/login.jpg';
import {Link} from 'react-router-dom';
const Signin = () => {
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
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div className="form-group flex-fill mb-0">
                      <input type="email" id="email" name='email'  placeholder='Email' className="form-control" />
                    </div>
                  </div>


                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                    <div className="form-group flex-fill mb-0">
                      <input type="password" id="password"  name='password' placeholder='Password' className="form-control" />
                    </div>
                  </div>
    
                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="submit" name='signin' id='signin' value="login"  className="btn-sbt">Signin</button>
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
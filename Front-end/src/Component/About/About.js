import React from 'react'
import check from '../Images/check-mark.png';
import img1 from '../Images/about-1.jpg';
import img2 from '../Images/about-2.jpg';
import img3 from '../Images/about-3.jpg';
import img4 from '../Images/room 1.jpg';
import img5 from '../Images/room 2.jpg';
import img6 from '../Images/room 3.jpg';
import img7 from '../Images/room 4.jpg';
import '../About/About.css';

const About = () => {
  return (
    <>



    <div className='container'>
     <p className="text-center h1 fw-bold mb-5 mt-5">About Us</p>
    </div>

    <section className="about-page">
        <div className="container">
            <div className="about-page-text">
                <div className="row mx-5">
                    <div className="col-lg-6">
                        <div className="title">
                            <h3>Welcome To BookingSpot</h3>
                            <p>We are located in Rajkot, providing easy access 
                            to the various hotels in our city. Various offers can be availed during festivals.</p>
                        </div>
                    </div>
                    <div className="col-lg-5 offset-lg-1 ">
                        <ul className="services" style={{listStyle:'none'}}>
                            <li><img className='chekcimg' src={check} alt='check' style={{width:'20px', height:'20px'}}/> Complimentary Daily Breakfast</li>
                            <li><img className='chekcimg' src={check} alt='check' style={{width:'20px', height:'20px'}}/> 3 Pcs Laundry Per Day</li>
                            <li><img className='chekcimg' src={check} alt='check' style={{width:'20px', height:'20px'}}/> 20% Off On Accommodation.</li>
                            <li><img className='chekcimg' src={check} alt='check' style={{width:'20px', height:'20px'}}/> Free Wifi.</li>
                            <li><img className='chekcimg' src={check} alt='check' style={{width:'20px', height:'20px'}}/> Discount 20% On F&B</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="about-page-services">
                <div className="row mx-5">
                    <div className="col-md-4 mt-5">
                        <div className="ap-service-item set-bg" data-setbg="Images/about-p1.jpg">
                        <img src={img1}  alt=''/>
                        <div class="service"><h3>Restaurants Services</h3></div>
                        </div>
                    </div>
                    <div className="col-md-4 mt-5">
                    <img src={img2} className='image'  alt=''/>
                        <div className="ap-service-item set-bg" data-setbg="Images/about-p2.jpg">
                            <div className="text">
                                <h3>Travel & Camping</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mt-5">
                    <img src={img3}  alt='' style={{width:'280px', height:'400px'}}/>
                        <div className="c set-bg" data-setbg="Images/about-p3.jpg">
                            <div className="text">
                                <h3>Event & Party</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <div className='container'>
     <p className="text-center h1 fw-bold mb-5 mt-5">Discover Our Work</p>
    </div>

    <div class="row">
                <div class="col-lg-6">
                <img src={img4} className='image mx-5' style={{width:'700px',height:'350px'}} alt=''/>
                    <div class="clean-item set-bg"  data-setbg="Images/clean 1.jpg">
                    </div>
                    <div class="row">
                        <div class="col-sm-6">
                        <img src={img5} className='image mx-5 mt-4' style={{width:'310px',height:'350px'}} alt=''/>
                            <div class="clean-item set-bg" data-setbg="Images/clean 2.jpg">
                            </div>
                        </div>
                        <div class="col-sm-6">
                        <img src={img6} className='image mt-4'   style={{width:'360px',height:'350px'}} alt=''/>
                            <div class="clean-item set-bg" data-setbg="Images/clean 3.jpg">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 mb-5">
                <img src={img7} className='image' style={{height:'725px'}} alt=''/>
                    <div class="clean-item large-item set-bg" data-setbg="Images/clean 4.jpg">
                    </div>
                </div>
            </div>

    {/*<div className='row'>
    <div className='left' style={{width:600,}}>
     <p className='h3 mt-3 mx-5'>Welcome To BookingSpot</p> 
     <p className='mt-4' style={{textAlign:'center',width:400}}>We are located in Rajkot, providing easy access 
        to the various hotels in our city. Various offers can be availed during festivals.</p>
      </div>


      <div className='right' style={{height:100}} >
      <div className='col-lg-5' >
      <img align="right" className='image' src={about} alt='about' style={{ 'width': '3%', 'height': '25px'}} />
      <img align="right" className='image' src={about} alt='about' style={{ 'width': '3%', 'height': '25px'}} />
      <img align="right" className='image' src={about} alt='about' style={{ 'width': '3%', 'height': '25px'}} />
      <img align="right" className='image' src={about} alt='about' style={{ 'width': '3%', 'height': '25px'}} />
      <img align="right" className='image' src={about} alt='about' style={{ 'width': '3%', 'height': '25px'}} />
      </div>
      <div className="col-lg-5 mx-5 mx-5">
          <ul className="">
            <li><i className="check-mark.png"></i> 20% Off On Accommodation.</li>
            <li><i className="check-mark.png"></i> Complimentary Daily Breakfast</li>
            <li><i className="check-mark.png"></i> 3 Pcs Laundry Per Day</li>
            <li><i classNAme="check-mark.png"></i> Free Wifi.</li>
            <li><i className="icon_check"></i> Discount 20% On F&B</li>
          </ul>
      </div>
      </div> */}



      {/* <div class="about-page-services">
                <div class="row">
                    <div class="col-md-4">
                        <div class="ap-service-item set-bg" data-setbg="Images/about-p1.jpg">
                            <div class="api-text">
                                <h3>Restaurants Services</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="ap-service-item set-bg" data-setbg="Images/about-p2.jpg">
                            <div class="api-text">
                                <h3>Travel & Camping</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="ap-service-item set-bg" data-setbg="Images/event 1.jpg">
                            <div class="api-text">
                                <h3>Event & Party</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </div>




      </div> */}




    </>
  )
}

export default About
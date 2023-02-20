import React from "react";
import "../Contact/Contact.module.css";

const Contact = () => {
  return (
    <>
      {/* parent class  */}
      <div className="parent" style={{margin: "120px",padding: "2rem 2rem",textAlign: "center",}}>


        {/* child class for contact */}
        <div className="child"  style={{ display: "inline-block",verticalAlign: "middle",textAlign:'left', float:'left',marginLeft:'150px' }}>
          <p className="h1 fw-bold">Contact Info</p>
          <p className="mt-3">
            Get in Touch&nbsp;-&nbsp;We're Always Happy To Hear For You
          </p>
          <p className="mt-3">Address&nbsp;:&nbsp;Rajkot-Gujarat</p>
          <p className="mt-3">Phone&nbsp;:&nbsp;+91&nbsp;&nbsp;7878953245</p>
          <p className="mt-3">Email&nbsp;:&nbsp;booking.spot@gmail.com</p>
        </div>


        {/* child class for form */}

        <div className="child mx-5" style={{display: "inline-block", verticalAlign: "middle"}}>
          <form method="POST">
            <div class="form-group mt-3" style={{display: "inline-block", verticalAlign: "middle",}}>
              <input type="name" className="form-control" id="name" name="name" placeholder="Enter Your Name"/>
            </div>

            <div className="form-group mt-3 mx-3" style={{display: "inline-block", verticalAlign: "middle",}}>
              <input type="email" className="form-control" id="email" name="email" placeholder="Enter Your Email"/>
            </div>
          
            <div className="form-group mt-4">
              <textarea className="form-control" id="textarea" placeholder="Enter Your Text Here" style={{border:'0.5px solid black', borderRadius:'none',height:'100px'}}/>
            </div>

            <button type="submit" className="btn btn-primary mt-3">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;

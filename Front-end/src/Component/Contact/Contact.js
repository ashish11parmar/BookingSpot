import React from "react";
import "../Contact/Contact.module.css";

const Contact = () => {
  return (
    <>
      {/* parent class  */}
      <div
        class="parent"
        style={{
          border: "1px solid black",
          margin: "1rem",
          padding: "2rem 2rem",
          textAlign: "center",
        }}
      >
        {/* child class for contact */}
        <div
          class="child"
          style={{
            display: "inline-block",
            border: "1px solid red",
            padding: "1rem 1rem",
            verticalAlign: "middle",
          }}
        >
          <p className="h1 fw-bold">Contact Info</p>
          <p className="mt-3">
            Get in Touch&nbsp;-&nbsp;We're Always Happy To Hear For You
          </p>
          <p className="mt-3">Phone&nbsp;:&nbsp;+91&nbsp;&nbsp;7878953245</p>
          <p className="mt-3">Email&nbsp;:&nbsp;booking.spot@gmail.com</p>
          <p className="mt-3">Address&nbsp;:&nbsp;Rajkot-Gujarat</p>
        </div>

        {/* child class for form */}

        <div
          className="child mx-5"
          style={{
            display: "inline-block",
            border: "1px solid red",
            padding: "1rem 1rem",
            verticalAlign: "middle",
          }}
        >
          <form>
            <div class="form-group">
              <label for="exampleFormControlInput1">Email address</label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div class="form-group">
              <label for="exampleFormControlSelect1">Example select</label>
              <select class="form-control" id="exampleFormControlSelect1">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
            <div class="form-group">
              <label for="exampleFormControlSelect2">
                Example multiple select
              </label>
              <select
                multiple
                class="form-control"
                id="exampleFormControlSelect2"
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
            <div class="form-group">
              <label for="exampleFormControlTextarea1">Example textarea</label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;

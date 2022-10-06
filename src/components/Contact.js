import React from "react";
import banner from '../css/img/MyApril10.jpg'

function Contact() {
  return (
    <section className="contact--us--section" id="contact">
      <h3 className="contact--us--heading">Contact Us</h3>
      <div className="contact--us--main">
        <div className="contac--us--image">
          <img src={banner} alt="" />
        </div>
        <div className="contact--us--form">
          <div className="form--input--div">
            <label for="">Name</label>
            <input type="text" />
          </div>
          <div className="form--input--div">
            <label for="">Email</label>
            <input type="email" />
          </div>
          <div className="form--input--div">
            <label for="">Phone</label>
            <input type="number" />
          </div>
          <div className="form--input--div">
            <label for="">Message</label>
            <textarea></textarea>
          </div>
          <button className="form--btn">Send</button>
        </div>
      </div>
    </section>
  );
}

export default Contact;

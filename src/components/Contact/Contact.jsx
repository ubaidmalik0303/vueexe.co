import React from "react";
import ContactStyles from "./contact.module.css";
import { FaFacebook, FaInstagram, FaPinterest } from "react-icons/fa"

const Contact = () => {
  return (
    <div className={ContactStyles.contact}>
      <div className="container-fluid">
        <div className="container">
            <h2>Contact</h2>
            <div className="row">
              <div className="col-md-8 p-3">
                
              </div>
              <div className="col-md-4 p-3">
                <form className={ContactStyles.form} action="">
                  <input type="text" placeholder="Your Name" />
                  <input type="email" placeholder="Your Email" />
                  <textarea cols="10" rows="6" placeholder="Enter Your Message"></textarea>
                  <input type="submit" value="Send Inquiry" />
                </form>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

import React from "react";
import ContactStyles from "./contact.module.css";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaEnvelope,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact" className={ContactStyles.contact}>
      <div className="container-fluid">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-7 p-3 text-center">
              <h2 className="mb-5">Contact Us</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit magnam, sunt sed itaque quo illum et a sapiente,
                ratione est aut non molestias. Exercitationem cum suscipit eius
                ad non deleniti.
              </p>
              <span className="my-5">
                <i>
                  <FaEnvelope />
                </i>{" "}
                info@vueexe.co
              </span>
              <br />
              <a href="">
                <FaFacebook size={30} />
              </a>
              <a href="">
                <FaInstagram className="mx-4" size={30} />
              </a>
              <a href="">
                <FaPinterest size={30} />
              </a>
            </div>
            <div className="col-md-5 p-3">
              <form className={ContactStyles.form} action="">
                <input type="text" placeholder="Your Name" />
                <input type="email" placeholder="Your Email" />
                <textarea
                  cols="10"
                  rows="6"
                  placeholder="Enter Your Message"
                ></textarea>
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

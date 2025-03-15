import React from "react";
import developerPng from "./images/developer-png.png";

const Contact = () => {
  return (
    <div className="contactUs-main-container">
      <div className="contactUs-left-para">
        <h3>Let's get in touch</h3>
        <i class="fa fa-envelope"></i>
        <a class="mail-links" href="mailto:manmeetkaur7720@gmail.com">
          manmeetkaur7720@gmail.com
        </a>

        <i class="fa fa-linkedin"></i>
        <a class="mail-links" href="https://www.linkedin.com/in/manmeet-kaur7720/">
          User Name: Manmeet Kaur
        </a>

        <i class="fa fa-github"></i>
        <a class="mail-links" href="https://github.com/Manmeet7720">
          Manmeet kaur
        </a>

        
      </div>
      <div className="contactUs-pic">
        <img src={developerPng} alt="Profile"/>
      </div>
    </div>
  );
};

export default Contact;

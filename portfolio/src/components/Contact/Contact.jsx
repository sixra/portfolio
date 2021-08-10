import React, {useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import {motion} from "framer-motion"
const Contact = () => {

  useEffect(() => {
    Aos.init({duration: 1000, disable: "mobile", once:"true"});
  }, [])

  return (
    <motion.div         
      className="contact-page">
      <h1  data-aos="fade-down" className="contact-title" >Contact me</h1>
      <div className="contact-underline"></div>
      <div  className="form-container">
      
      <form data-aos="fade" className="form-box" action="https://formsubmit.co/awartanian@hotmail.com" method="POST">
          <label for="name">Name:</label>
          <input type="text" name="name" required/>
          <label for="email">Email:</label>
          <input type="email" name="email" required/>
          <label for="message">Message:</label>
          <textarea name="message" rows="6" cols="50" required></textarea>
          <input type="hidden" name="_next" value="http://localhost:3000/src/Pages/Contact/Contact.js"></input>
          <div style={{ "text-align": "center" }}>
            <input className="submit-button" type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;
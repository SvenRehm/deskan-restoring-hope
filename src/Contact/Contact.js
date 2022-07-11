import React from "react"
import img from "../Images/contact.jpg"
import "./Index.css"

function Contact() {
   return (
      <div className="contact">
         <div className="contact-hero">
            <img src={img} alt="contact-hero" />
            <h1>Contact Us</h1>
         </div>
         <div className="Contact-container"></div>
      </div>
   )
}

export default Contact

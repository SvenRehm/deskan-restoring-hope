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

         <div className="contact-container">
            <h3 className="contact-heading">
               Thank you for your interest in Deskan Institute & Training. Our
               standard turnaround time for requests is 24-72 business hours but
               may be longer at this time due to unsually high call volume. Your
               request is important to us, and we thank you for your patience
               and continued support.
            </h3>

            <div className="contact-ways">
               <div className="contact-segment">
                  <h2>HEAD OFFICE</h2>
                  <h3>Melbourne, FL. 32940</h3>
               </div>
               <div className="contact-segment">
                  <h2>CALL US</h2>
                  <h3>404-234-2702/770-256-0356</h3>
               </div>
               <div className="contact-segment">
                  <h2>EMAIl US</h2>
                  <h3>DeskanInstitute@Gmail.com</h3>
                  <h3>LiverpJ@Bellsouth.net</h3>
               </div>
            </div>

            <div className="contact-socials">
               <div className="socials-segment">
                  <a href="https://twitter.com/DeskanInstitute">Twitter</a>
               </div>
               <div className="socials-segment">
                  <a href="https://www.facebook.com/DeskanInstitute/">
                     Facebook
                  </a>
               </div>
               <div className="socials-segment">
                  <a href="https://www.youtube.com/user/Dove424">Youtube</a>
               </div>
               <div className="socials-segment">
                  <a href="https://deskanblog.wordpress.com/">
                     Newsletter/Blog
                  </a>
               </div>
            </div>
            <div className="contact-form">
               <h2>Send us your queries</h2>

               <form method="POST" target="_blank">
                  <div className="label-name">
                     <input placeholder="Name" type="text" name="name"></input>
                  </div>

                  <div className="label-email">
                     <input
                        placeholder="Email"
                        id="email"
                        type="email"
                        name="email"
                        required
                     ></input>
                  </div>
                  <div className="label-phone">
                     <input
                        placeholder="Phone No."
                        id="phone"
                        type="tel"
                        name="phone"
                        // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        required
                     ></input>
                  </div>
                  <div className="label-message">
                     <textarea
                        placeholder="Write a message..."
                        name="message"
                        id="message"
                     ></textarea>
                  </div>
                  <button className="form-button" type="submit">
                     Submit
                  </button>
               </form>
            </div>
         </div>
      </div>
   )
}

export default Contact

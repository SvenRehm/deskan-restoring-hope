import React from "react"
import img from "../Images/contact.jpg"
import AnimatePage from "../Animations/AnimatePage"
import {
   MoreInfoHero,
   ContactContainer,
   WaysToContact,
   ContactSocials,
   ContactForm,
} from "./ContactStyles"
import { motion } from "framer-motion"
function Contact() {
   return (
      <>
         <AnimatePage>
            <MoreInfoHero>
               <img src={img} alt="contact-hero" />

               <motion.h1
                  initial="hidden"
                  animate="visible"
                  variants={{
                     hidden: {
                        scale: 0.9,
                        opacity: 0,
                     },
                     visible: {
                        scale: 1,
                        opacity: 1,
                        transition: {
                           duration: 0.6,
                           delay: 0.4,
                        },
                     },
                  }}
               >
                  Contact Us
               </motion.h1>
            </MoreInfoHero>

            <ContactContainer>
               <h3>
                  Thank you for your interest in Deskan Hope, Inc. Our standard
                  turnaround time for requests is 24-72 business hours but may
                  be longer at this time due to unsually high call volume. Your
                  request is important to us, and we thank you for your patience
                  and continued support.
               </h3>

               <WaysToContact>
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
               </WaysToContact>

               <ContactSocials>
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
               </ContactSocials>

               <ContactForm>
                  <h2>Send us your queries</h2>
                  <form method="POST" target="_blank">
                     <div className="label-name">
                        <input
                           placeholder="Name"
                           type="text"
                           name="name"
                        ></input>
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
               </ContactForm>
            </ContactContainer>
         </AnimatePage>
      </>
   )
}

export default Contact

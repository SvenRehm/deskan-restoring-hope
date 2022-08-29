import React from "react"
import img from "../../Images/contact.jpg"
import AnimatePage from "../../Animations/AnimatePage"
import {
   MoreInfoHero,
   ContactContainer,
   WaysToContact,
   ContactSocials,
} from "./ContactStyles"

import ContactForm from "./ContactForm"
import { motion } from "framer-motion"

function Contact() {
   const container = {
      hidden: { opacity: 1 },
      show: {
         opacity: 1,
         transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2,
         },
      },
   }

   const item = {
      hidden: { opacity: 0 },
      show: {
         opacity: 1,
         transition: {
            duration: 0.4,
         },
      },
   }
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

            <ContactContainer
               variants={container}
               initial="hidden"
               animate="show"
            >
               <motion.h3 variants={item}>
                  Thank you for your interest in Deskan Hope, Inc. Our standard
                  turnaround time for requests is 24-72 business hours but may
                  be longer at this time due to unsually high call volume. <br/>Your
                  request is important to us, and we thank you for your patience
                  and continued support.
               </motion.h3>

               <WaysToContact variants={item}>
                  <div className="contact-segment">
                     <h2>HEAD OFFICE</h2>
                     <h3>Melbourne, FL. 32940</h3>
                  </div>
                  <div className="contact-segment">
                     <h2>CALL US</h2>
                     <h3>404-234-2702<br></br>
                        770-256-0356</h3>
                  </div>
                  <div className="contact-segment">
                     <h2>EMAIL US</h2>
                     <h3>joanliverpool48@gmail.com</h3>
                     <h3>LiverpJ@Bellsouth.net</h3>
                  </div>
               </WaysToContact>

               <ContactSocials variants={item}>
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

               <ContactForm/>
       
            </ContactContainer>
         </AnimatePage>
      </>
   )
}

export default Contact

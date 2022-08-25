import React, { useState, useRef } from "react"
import emailjs from "emailjs-com"
import {

    ContactFormStyles,
 } from "./ContactStyles"


const ContactForm=()=> {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [phone, setPhone] = useState('');
    const [emailSent, setEmailSent] = useState(false);
   const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault()
  
        if (name && email && message) {
           const serviceId = process.env.REACT_APP_SERVICE_ID
           const templateId = process.env.REACT_APP_TEMPLATE_ID
           const userId = process.env.REACT_APP_USER_ID
           const templateParams = {
              name,
              email,
              message,
              phone
           }
           emailjs
              .send(serviceId, templateId, templateParams, userId)
              .then((result) => {
                // console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
         
  
           setName("")
           setEmail("")
           setMessage("")
           setPhone("")
           setEmailSent(true)
        } else {
           alert("Please fill in all fields.")
        }
   }

console.log(process.env.REACT_APP_SERVICE_ID)
    return (
       <>
                <ContactFormStyles>
                   <h2>Send us your queries</h2>
                   <span className={emailSent ? "visible" : null}>       Thank you for your message, we will be in touch in no time!
         </span>
     
                   <form ref={form} onSubmit={sendEmail}>
                              <div className="label-name">
                         <input
                            placeholder="Name"
                            type="text"
                            name="name"
                            value={name}
                            onChange={e => setName(e.target.value)}
                         ></input>
                      </div>
 
                      <div className="label-email">
                         <input
                            placeholder="Email"
                            id="email"
                            type="email"
                            name="email"
                            value={email} onChange={e => setEmail(e.target.value)}
                            required
                         ></input>
                      </div>
                      <div className="label-phone">
                         <input
                            placeholder="Phone No."
                            id="phone"
                            type="tel"
                            name="phone"
                            value={phone}
                            onChange={e => setPhone(e.target.value)}
                            // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                            required
                         ></input>
                      </div>
                      <div className="label-message">
                         <textarea
                            placeholder="Write a message..."
                            value={message} onChange={e => setMessage(e.target.value)}
                            name="message"
                            id="message"
                         ></textarea>
                      </div>
                      <button className="form-button" type="submit">
                         Submit
                      </button>
                   </form>
                </ContactFormStyles>

       </>
    )
 }
 
 export default ContactForm
 
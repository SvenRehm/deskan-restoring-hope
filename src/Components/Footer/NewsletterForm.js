import React, { useState,useEffect } from "react"




const NewsletterForm =({ status, message, onValidated })=> {
   
    const [email, setEmail] = useState('');

    useEffect(() => {
        if(status === "success") clearFields();
      }, [status])
    
      const clearFields = () => {
        setEmail('');
      }

    const handleSubmit = (e) => {
        e.preventDefault();
        email &&
        email.indexOf("@") > -1 &&
        onValidated({
            EMAIL: email,
        });
    }

    return (
       <>

<h3>Join our newsletter and stay informed!</h3>
               <p>Get the latest news and information.</p>
               {status === "sending" && (
          <div className="mc__alert mc__alert--sending">
            sending...
          </div>
        )}
        {status === "error" && (
          <div 
            className="mc__alert mc__alert--error"
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        {status === "success" && (
          <div
            className="mc__alert mc__alert--success"
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
               <form  onSubmit={(e) => handleSubmit(e)}>
               <input  placeholder="Email"
                    type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
               
               />
               <button>Subscribe</button>
               </form>

       </>
    )
 }
 
 export default NewsletterForm 
 
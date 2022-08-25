import React from "react"
import MailchimpSubscribe from "react-mailchimp-subscribe";
import NewsletterForm from "./NewsletterForm";




const MailchimpFormContainer =()=> {
    const postUrl = `https://deskanrhtc.us14.list-manage.com/subscribe/post?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;

    return (
       <>
            <div className="newsletter">
               <MailchimpSubscribe url={postUrl}  render={({ subscribe, status, message }) => (
                    <NewsletterForm
                        status={status} 
                        message={message}
                        onValidated={formData => subscribe(formData)}
                    />
                )}/>
            </div>


       </>
    )
 }
 
 export default MailchimpFormContainer 
 
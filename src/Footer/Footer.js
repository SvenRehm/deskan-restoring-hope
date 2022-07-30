import React from "react"
import "./Index.css"
import { Link } from "react-router-dom"

const Footer = () => {
   return (
      <section className="footer-wrapper">
         <div className="footer">
            <ul className="footer-contact">
               <li>Contact Us</li>
               <li> Melbournes, FL. 32940</li>
               <li>321-775-3458</li> <li>404-234-2702</li>
               <li>liverpj@bellsouth.net </li>
               <li>DeskanInstitute@Gmail.com</li>
               <li>charlys424@bellsouth.net</li>
            </ul>
            <ul className="footer-nav">
               <li>Navigation</li>
               <li>
                  <Link to="/">Home</Link>
               </li>
               <li>
                  <Link to="/committee">Ways to Help</Link>
               </li>
               <li>
                  <Link to="/veterans">Programms </Link>
               </li>
               <li>
                  <Link to="/about-us">About </Link>
               </li>

               <li>
                  <Link to="/contact">Contact</Link>
               </li>
               <li>
                  <Link className="donate-button" to="/donate">
                     Donate
                  </Link>
               </li>
            </ul>
            <ul className="footer-social">
               <li>Social</li>
               <li>
                  <a href="https://www.facebook.com/DeskanInstitute/">
                     Facebook
                  </a>
               </li>
               <li>
                  <a href="https://twitter.com/DeskanInstitute">Twitter</a>
               </li>
               <li>
                  <a href="https://www.youtube.com/user/Dove424">Youtube</a>
               </li>
               <li>
                  <a href="https://deskanblog.wordpress.com/">
                     Newsletter/Blog
                  </a>
               </li>
            </ul>

            <div className="newsletter">
               <h3>Join our newsletter and stay informed!</h3>
               <p>Get the latest news and information.</p>
               <input type="text" placeholder="Email"></input>
               <button>Subscribe</button>
            </div>
            <h4>Copyright 2019. Deskan Restouring Hope, Inc.</h4>
         </div>
      </section>
   )
}

export default Footer

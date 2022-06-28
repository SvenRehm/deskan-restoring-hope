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
               <li>Fax: 321-775-3082</li>
               <li>liverpj@bellsouth.net </li>
               <li>DeskanInstitute@Gmail.com</li>
               <li>charlys424@bellsouth.net</li>
            </ul>
            <ul className="footer-nav">
               <li>Navigation</li>
               <li>
                  <Link to="/deskan-restoring-hope/">Home</Link>
               </li>
               <li>
                  <Link to="/deskan-restoring-hope/committee">
                     Ways to Help
                  </Link>
               </li>
               <li>
                  <Link to="/deskan-restoring-hope/veterans">Programms </Link>
               </li>
               <li>
                  <Link to="/deskan-restoring-hope/about-us">About </Link>
               </li>
               <li>
                  <Link to="">Resources</Link>
               </li>
               <li>
                  <Link to="">Contact</Link>
               </li>
               <li>
                  <Link
                     className="donate-button"
                     to="/deskan-restoring-hope/donate"
                  >
                     Donate
                  </Link>
               </li>
            </ul>
            <ul className="footer-social">
               <li>Social</li>
               <li>
                  <a href="/">Facebook</a>
               </li>
               <li>
                  <a href="/">Twitter</a>
               </li>
               <li>
                  <a href="/">Youtube</a>
               </li>
               <li>
                  <a href="/">Newsletter/Blog</a>
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

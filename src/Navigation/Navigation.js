import React from "react"
import "./Index.css"
// import logo from "./logo.svg"
import { ReactComponent as Logo } from "./logo.svg"
const Navigation = () => {
   return (
      <div className="nav-container">
         <ul>
            <div className="Logos">
               <li>
                  <a className="logo" href="/">
                     {<Logo />}
                  </a>
               </li>
            </div>
            <div className="alllinks">
               <li>
                  <a className="active" href="/">
                     Home
                  </a>
               </li>
               <li>
                  <a href="/">Ways to Help</a>
               </li>
               <li>
                  <a href="/">Programms</a>
               </li>
               <li>
                  <a href="/">Resources</a>
               </li>
               <li>
                  <a href="/">Contact</a>
               </li>
               <li>
                  <a className="donate-button" href="/">
                     Donate
                  </a>
               </li>
            </div>
         </ul>
      </div>
   )
}

export default Navigation

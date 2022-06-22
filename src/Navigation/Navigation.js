import React, { useState } from "react"
import "./Index.css"
// import logo from "./logo.svg"
import { ReactComponent as Logo } from "./logo.svg"
import Dropdown from "./Dropdown"
import { NavLink } from "react-router-dom"

import { WaysToHelpContent } from "./WaysToHelpContent"
const Navigation = () => {
   const [navbar, setNavbar] = useState(false)
   const [dropdown, setDropdown] = useState(false)
   const showNavbarBackground = () => {
      window.scrollY >= 100 ? setNavbar(true) : setNavbar(false)
   }

   window.addEventListener("scroll", showNavbarBackground)

   const onMouseEnter = (e) => {
      console.log(e.target)
      setDropdown(true)
   }
   const onMouseLeave = () => {
      setDropdown(false)
   }
   // <Link to="/invoices">Invoices</Link>
   // <Link to="/expenses">Expenses</Link>
   return (
      <div className={navbar ? "nav-container show-nav" : "nav-container"}>
         <ul className="main-navigation">
            <div className="Logos">
               <li>
                  <NavLink className="logo" to="/">
                     {<Logo />}
                  </NavLink>
               </li>
            </div>
            <div className="alllinks">
               <li>
                  <NavLink
                     style={({ isActive }) => {
                        return {
                           backgroundColor: isActive ? "#fffbf6" : "",
                           color: isActive ? "#111111" : "",
                        }
                     }}
                     to="/"
                  >
                     Home
                  </NavLink>
               </li>
               <li
                  className={dropdown ? "dropdown-hover" : ""}
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
               >
                  <NavLink to="">Ways to Help</NavLink>
               </li>
               {dropdown && (
                  <Dropdown
                     onMouseEnter={onMouseEnter}
                     onMouseLeave={onMouseLeave}
                     dropdownContent={WaysToHelpContent}
                  ></Dropdown>
               )}

               <li>
                  <a href="/">Programms</a>
               </li>
               <li>
                  <a href="/">Resources</a>
               </li>
               <li>
                  <NavLink
                     style={({ isActive }) => {
                        return {
                           backgroundColor: isActive ? "#fffbf6" : "",
                           color: isActive ? "#111111" : "",
                        }
                     }}
                     to="/about"
                  >
                     Contact
                  </NavLink>
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

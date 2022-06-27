import React, { useState } from "react"
import "./Index.css"
// import logo from "./logo.svg"
import { ReactComponent as Logo } from "./logo.svg"
import Dropdown from "./Dropdown"
import { NavLink } from "react-router-dom"

import { WaysToHelpContent } from "./WaysToHelpContent"
import { ProgrammsContent } from "./ProgrammsContent"
import { AboutContent } from "./AboutContent"
const Navigation = () => {
   const [navbar, setNavbar] = useState(false)
   const [dropdown, setDropdown] = useState(false)
   const [dropdownProgramm, setDropdownProgramm] = useState(false)
   const [dropdownAbout, setDropdownAbout] = useState(false)
   const showNavbarBackground = () => {
      window.scrollY >= 100 ? setNavbar(true) : setNavbar(false)
   }

   window.addEventListener("scroll", showNavbarBackground)

   const onMouseEnter = () => {
      setDropdown(true)
   }
   const onMouseLeave = () => {
      setDropdown(false)
   }

   const onMouseEnterTwo = () => {
      setDropdownProgramm(true)
   }
   const onMouseLeaveTwo = () => {
      setDropdownProgramm(false)
   }
   const onMouseEnterThree = () => {
      setDropdownAbout(true)
   }
   const onMouseLeaveThree = () => {
      setDropdownAbout(false)
   }
   // <Link to="/invoices">Invoices</Link>
   // <Link to="/expenses">Expenses</Link>
   return (
      <div className={navbar ? "nav-container show-nav" : "nav-container"}>
         <ul className="main-navigation">
            <div className="Logos">
               <li>
                  <NavLink className="logo" to="/deskan-restoring-hope/">
                     {<Logo />}
                  </NavLink>
               </li>
            </div>
            <div className="alllinks">
               <li
                  className={dropdown ? "dropdown-hover" : ""}
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
               >
                  <a href="/" onClick={(event) => event.preventDefault()}>
                     Ways to Help
                  </a>
               </li>
               {dropdown && (
                  <Dropdown
                     dropdownClass={"dropdown"}
                     onMouseEnter={onMouseEnter}
                     onMouseLeave={onMouseLeave}
                     dropdownContent={WaysToHelpContent}
                  ></Dropdown>
               )}

               <li
                  className={dropdownProgramm ? "dropdown-hover" : ""}
                  onMouseEnter={onMouseEnterTwo}
                  onMouseLeave={onMouseLeaveTwo}
               >
                  <a href="/" onClick={(event) => event.preventDefault()}>
                     Programms
                  </a>
               </li>
               {dropdownProgramm && (
                  <Dropdown
                     dropdownClass={"dropdown2"}
                     onMouseEnter={onMouseEnterTwo}
                     onMouseLeave={onMouseLeaveTwo}
                     dropdownContent={ProgrammsContent}
                  ></Dropdown>
               )}
               <li
                  className={dropdownAbout ? "dropdown-hover" : ""}
                  onMouseEnter={onMouseEnterThree}
                  onMouseLeave={onMouseLeaveThree}
               >
                  <a href="/" onClick={(event) => event.preventDefault()}>
                     About
                  </a>
               </li>
               {dropdownAbout && (
                  <Dropdown
                     dropdownClass={"dropdown3"}
                     onMouseEnter={onMouseEnterThree}
                     onMouseLeave={onMouseLeaveThree}
                     dropdownContent={AboutContent}
                  ></Dropdown>
               )}
               <li>
                  <NavLink
                     style={({ isActive }) => {
                        return {
                           backgroundColor: isActive ? "#fffbf6" : "",
                           color: isActive ? "#111111" : "",
                        }
                     }}
                     to="/deskan-restoring-hope/"
                  >
                     Resources
                  </NavLink>
               </li>
               <li>
                  <NavLink
                     style={({ isActive }) => {
                        return {
                           backgroundColor: isActive ? "#fffbf6" : "",
                           color: isActive ? "#111111" : "",
                        }
                     }}
                     to="/deskan-restoring-hope/about"
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

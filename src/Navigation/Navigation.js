import React, { useState, useEffect } from "react"
import "./Index.css"
// import logo from "./logo.svg"
import { ReactComponent as Logo } from "./logo.svg"
import Dropdown from "./Dropdown"
import { NavLink } from "react-router-dom"

import { WaysToHelpContent } from "./WaysToHelpContent"
import { ProgrammsContent } from "./ProgrammsContent"
import { AboutContent } from "./AboutContent"
// import { MdMenu, MdOutlineClose } from "react-icons/md"
import MenuIsHamburger from "./MenuIHamburger"
import { MenuIsClosed } from "./MenuIHamburger"
const Navigation = () => {
   const [navbar, setNavbar] = useState(false)
   const [dropdown, setDropdown] = useState(false)
   const [dropdownProgramm, setDropdownProgramm] = useState(false)
   const [dropdownAbout, setDropdownAbout] = useState(false)

   const [menuIsOpen, setMenuIsOpen] = useState(false)

   const [width, setWidth] = useState(window.innerWidth)

   const showNavbarBackground = () => {
      window.scrollY >= 100 ? setNavbar(true) : setNavbar(false)
   }

   function handleWindowSizeChange() {
      setWidth(window.innerWidth)
   }
   useEffect(() => {
      window.addEventListener("resize", handleWindowSizeChange)
      return () => {
         window.removeEventListener("resize", handleWindowSizeChange)
      }
   }, [])

   let isMobile = width <= 1101

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
   const onMouseClickOne = () => {
      setDropdown((prevstate) => !prevstate)
   }
   const onMouseClickTwo = () => {
      setDropdownProgramm((prevstate) => !prevstate)
   }
   const onMouseClickThree = () => {
      setDropdownAbout((prevstate) => !prevstate)
   }

   return (
      <div
         className={
            navbar || menuIsOpen ? "nav-container show-nav" : "nav-container"
         }
      >
         <ul className="main-navigation">
            <div className="Logos">
               <li>
                  <NavLink className="logo" to="/deskan-restoring-hope/">
                     {<Logo />}
                  </NavLink>
               </li>
            </div>
            {isMobile ? (
               <div className="hamburger-menu">
                  {menuIsOpen ? (
                     <MenuIsClosed
                        menuIsOpen={menuIsOpen}
                        setMenuIsOpen={setMenuIsOpen}
                     />
                  ) : (
                     <MenuIsHamburger
                        menuIsOpen={menuIsOpen}
                        setMenuIsOpen={setMenuIsOpen}
                     />
                  )}
               </div>
            ) : null}

            <div
               // className="alllinks"
               className={menuIsOpen ? "alllinks isShown" : "alllinks"}
            >
               <li
                  className={dropdown ? "dropdown-hover" : ""}
                  onMouseEnter={!isMobile ? onMouseEnter : null}
                  onMouseLeave={!isMobile ? onMouseLeave : null}
                  onClick={isMobile ? onMouseClickOne : null}
               >
                  <NavLink to="/" onClick={(event) => event.preventDefault()}>
                     Ways to Help
                  </NavLink>
               </li>
               {dropdown && (
                  <Dropdown
                     dropdownClass={"dropdown"}
                     isMobile={isMobile}
                     onMouseEnter={!isMobile ? onMouseEnter : null}
                     onMouseLeave={!isMobile ? onMouseLeave : null}
                     onMouseClick={isMobile ? onMouseClickOne : null}
                     setMenuIsOpen={setMenuIsOpen}
                     dropdownContent={WaysToHelpContent}
                  ></Dropdown>
               )}

               <li
                  className={dropdownProgramm ? "dropdown-hover" : ""}
                  onMouseEnter={!isMobile ? onMouseEnterTwo : null}
                  onMouseLeave={!isMobile ? onMouseLeaveTwo : null}
                  onClick={isMobile ? onMouseClickTwo : null}
               >
                  <a href="/" onClick={(event) => event.preventDefault()}>
                     Programms
                  </a>
               </li>
               {dropdownProgramm && (
                  <Dropdown
                     dropdownClass={"dropdown2"}
                     isMobile={isMobile}
                     onMouseEnter={!isMobile ? onMouseEnterTwo : null}
                     onMouseLeave={!isMobile ? onMouseLeaveTwo : null}
                     onMouseClick={isMobile ? onMouseClickTwo : null}
                     setMenuIsOpen={setMenuIsOpen}
                     dropdownContent={ProgrammsContent}
                  ></Dropdown>
               )}
               <li
                  className={dropdownAbout ? "dropdown-hover" : ""}
                  onMouseEnter={!isMobile ? onMouseEnterThree : null}
                  onMouseLeave={!isMobile ? onMouseLeaveThree : null}
                  onClick={isMobile ? onMouseClickThree : null}
               >
                  <a href="/" onClick={(event) => event.preventDefault()}>
                     About
                  </a>
               </li>
               {dropdownAbout && (
                  <Dropdown
                     dropdownClass={"dropdown3"}
                     isMobile={isMobile}
                     dropdownContent={AboutContent}
                     onMouseEnter={!isMobile ? onMouseEnterThree : null}
                     onMouseLeave={!isMobile ? onMouseLeaveThree : null}
                     onMouseClick={isMobile ? onMouseClickThree : null}
                     setMenuIsOpen={setMenuIsOpen}
                  ></Dropdown>
               )}
               <li>
                  <NavLink to="/deskan-restoring-hope/">Resources</NavLink>
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
                  <NavLink
                     className="donate-button"
                     to="/deskan-restoring-hope/donate"
                  >
                     Donate
                  </NavLink>
               </li>
            </div>
         </ul>
      </div>
   )
}

export default Navigation

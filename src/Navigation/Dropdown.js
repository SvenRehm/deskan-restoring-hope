import React from "react"
import "./Index.css"
import { NavLink } from "react-router-dom"

const Dropdown = ({
   dropdownContent,
   onMouseEnter,
   onMouseLeave,
   dropdownClass,
   onMouseClick,
   setMenuIsOpen,
   isMobile,
}) => {
   const allDropdownItems = dropdownContent.map((item) => {
      const handleMouse = () => {
         if (isMobile) {
            return onMouseClick
         } else {
            return null
         }
      }
      return (
         <li
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={() => {
               handleMouse()
               setMenuIsOpen((prevstate) => !prevstate)
            }}
            key={item.id}
         >
            <NavLink
               style={({ isActive }) => {
                  return {
                     backgroundColor: isActive ? " #a382ff" : "",
                     color: isActive ? "#111111" : "",
                  }
               }}
               to={item.path}
            >
               {item.title}
            </NavLink>
         </li>
      )
   })
   return <ul className={dropdownClass}>{allDropdownItems}</ul>
}

export default Dropdown

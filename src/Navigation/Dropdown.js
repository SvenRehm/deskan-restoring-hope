import React from "react"
import "./Index.css"

// import { NavLink } from "react-router-dom"
const Dropdown = ({
   dropdownContent,
   onMouseEnter,
   onMouseLeave,
   dropdownClass,
}) => {
   const allDropdownItems = dropdownContent.map((item) => {
      return (
         <li
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            key={item.id}
         >
            <a href={item.path}>{item.title}</a>
         </li>
      )
   })
   return <ul className={dropdownClass}>{allDropdownItems}</ul>
}

export default Dropdown

import React from "react"
import "./Index.css"
import { Link } from "react-router-dom"

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
            <Link to={item.path}>{item.title}</Link>
         </li>
      )
   })
   return <ul className={dropdownClass}>{allDropdownItems}</ul>
}

export default Dropdown

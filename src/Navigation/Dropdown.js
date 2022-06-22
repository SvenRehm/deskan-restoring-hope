import React from "react"
import "./Index.css"

// import { NavLink } from "react-router-dom"
const Dropdown = ({ dropdownContent, onMouseEnter, onMouseLeave }) => {
   //    const [dropdown, setDropdown] = useState(false)
   console.log(dropdownContent)
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
   return <ul className="dropdown">{allDropdownItems}</ul>
}

export default Dropdown

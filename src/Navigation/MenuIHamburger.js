import React from "react"
import "./Index.css"
import { MdMenu, MdOutlineClose } from "react-icons/md"

const MenuIsHamburger = ({ menuIsOpen, setMenuIsOpen }) => {
   const menuHandle = (e) => {
      setMenuIsOpen((prevstate) => !prevstate)
   }

   return (
      <div className="menu" onClick={menuHandle}>
         <MdMenu size={32} color={"white"} />
      </div>
   )
}

export const MenuIsClosed = ({ menuIsOpen, setMenuIsOpen }) => {
   const menuHandle = (e) => {
      setMenuIsOpen((prevstate) => !prevstate)
   }
   return (
      <div className="menu" onClick={() => menuHandle()}>
         <MdOutlineClose size={32} color={"white"} />
      </div>
   )
}

export default MenuIsHamburger

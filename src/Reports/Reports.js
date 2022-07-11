import React from "react"
import img from "../Images/contact.jpg"
import "./Index.css"

function Reports() {
   return (
      <div className="reports">
         <div className="reports-hero">
            <img src={img} alt="reports-hero" />
            <h1>reports</h1>
         </div>
         <div className="reports-container"></div>
      </div>
   )
}

export default Reports

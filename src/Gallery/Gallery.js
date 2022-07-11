import React from "react"
import img from "../Images/contact.jpg"
import "./Index.css"

function Gallery() {
   return (
      <div className="gallery">
         <div className="gallery-hero">
            <img src={img} alt="gallery-hero" />
            <h1>gallery</h1>
         </div>
         <div className="gallery-container"></div>
      </div>
   )
}

export default Gallery

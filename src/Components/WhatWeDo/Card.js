import React from "react"
import "./Index.css"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { Link } from "react-router-dom"

const Card = ({ img, title, text, link }) => {
   return (
      <>
         <LazyLoadImage src={img} alt="i" />
         <div className="card-content">
            <h2>{title}</h2>
            <p>{text}</p>
            <div className="card-readmore">
               <Link to={link}>Learn More</Link>
            </div>
         </div>
      </>
   )
}

export default Card

import React from "react"
import "./Index.css"
import { LazyLoadImage } from "react-lazy-load-image-component"
// import { Link } from "react-router-dom"

const MemberCard = ({ img, title, name }) => {
   return (
      <>
         <LazyLoadImage src={img} alt="i" />
         <div className="member-card-content">
            <h2>{name}</h2>
            <p>{title}</p>
         </div>
      </>
   )
}

export default MemberCard

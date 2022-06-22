import React from "react"
import "./Index.css"

const Card = ({ img, title, text, link }) => {
   return (
      <section className="card">
         <img src={img} alt="i" />
         <div className="card-content">
            <h2>{title}</h2>
            <p>{text}</p>
            <div className="card-readmore">
               <a href={link}>Learn More</a>
            </div>
         </div>
      </section>
   )
}

export default Card

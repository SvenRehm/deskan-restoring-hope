import React from "react"
import "./Index.css"
import image from "../Images/woman sitting in front of closed door.jpg"
const Card = () => {
   return (
      <section className="card">
         <img src={image} alt="i" />
         <h2>Veterans Services</h2>
         <p>
            Veterans have disproportionate rates of mental illness, particularly
            posttraumatic stress disorder (PTSD).
         </p>
         <a href="/">Learn More</a>
      </section>
   )
}

export default Card

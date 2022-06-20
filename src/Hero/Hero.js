import React from "react"
import "./Index.css"

const Hero = () => {
   return (
      <section className="hero">
         <div className="container">
            <h1>
               WE ARE <br />A VETERAN <br />
               SERVING VETERANS
            </h1>
            <h2>Helping homeless Vets and their Families.</h2>
            <button className="button donate"> Donate</button>
            <button className="button involved"> Volunteer</button>
         </div>
      </section>
   )
}

export default Hero

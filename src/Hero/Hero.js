import React from "react"
import "./Index.css"
import { Link } from "react-router-dom"
const Hero = () => {
   return (
      <section className="hero">
         <div className="container">
            <h1>
               WE ARE <br />A VETERAN <br />
               SERVING VETERANS
            </h1>
            <h2>Helping homeless Vets and their Families.</h2>

            <div className="call-to-action">
               <Link
                  to="/deskan-restoring-hope/donate"
                  className="button donate"
               >
                  Donate
               </Link>

               <Link
                  to="/deskan-restoring-hope/volunteer"
                  className="button involved"
               >
                  Volunteer
               </Link>
            </div>
         </div>
      </section>
   )
}

export default Hero

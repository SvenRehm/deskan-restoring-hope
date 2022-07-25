import React from "react"
import "./Index.css"
import aboutusimg from "../Images/about_us.jpg"
import { Link } from "react-router-dom"

const HomeAboutUs = () => {
   return (
      <section className="home-about-us">
         <div className="home-about-us-grid">
            <img className="about-us-img" src={aboutusimg} alt="out team"></img>

            <div className="about-us-section">
               <h1>
                  The goal of DESKAN RESTORING, Inc, is to provide youth and
                  young adults with experiences
               </h1>

               <ol>
                  <li>encourage personal healthy lifestyles</li>
                  <li>
                     to aid in the reduction of maternal death through education{" "}
                  </li>
                  <li> to aid in the decrease of teenage pregnancy</li>
                  <li>to aid in the decrease of Metabolic Syndrome</li>
                  <li>
                     encourage prevention efforts that will aid in the reduction
                     of mother-to-child transmission of HIV/AIDs virus and
                     prevent new infections
                  </li>
                  <li>
                     to aid in the reduction of Veterans that are homeless and
                  </li>
                  <li>
                     engage community and international health interventions and
                     interact with mentoring health professionals.
                  </li>
               </ol>
               <Link to="/about-us">
                  <button>About Us</button>
               </Link>
            </div>
         </div>
      </section>
   )
}

export default HomeAboutUs

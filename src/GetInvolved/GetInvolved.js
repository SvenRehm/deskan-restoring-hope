import React from "react"
import "./Index.css"
import { Link } from "react-router-dom"

const GetInvolved = () => {
   return (
      <section className="get-involved-wrapper">
         <div className="get-involved">
            <h1>We welcome your partnership in our global mission.</h1>
            <h2>
               Volunteer, join a committee, become a sponsor or partner, or make
               a donation.
            </h2>
            <div className="get-involved-button-wrapper">
               <Link to="/deskan-restoring-hope/volunteer">
                  <button>Get Involved</button>
               </Link>
            </div>
         </div>
      </section>
   )
}

export default GetInvolved

import React from "react"
import "./Index.css"

const Info = () => {
   return (
      <section className="info">
         <div className="info-grid">
            <h3 className="info-header">
               Below is just a fraction of the services we provide to the
               community and abroad.
            </h3>
            <div className="info-segment">
               <div className="segment">
                  <h2>6585</h2>
                  <h3>Meals & Clothing</h3>
               </div>
               <div className="segment">
                  <h2>700</h2>
                  <h3>Counseling Services</h3>
               </div>
               <div className="segment">
                  <h2>1300</h2>
                  <h3>Coats & Personal Hygiene</h3>
               </div>
               <div className="segment">
                  <h2>672</h2>
                  <h3>Food Baskets</h3>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Info

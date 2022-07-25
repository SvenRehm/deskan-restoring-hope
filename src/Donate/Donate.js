import React from "react"
import "./Index.css"
// import aboutusimg from "../Images/about_us.jpg"
// import { Link, Outlet } from "react-router-dom"
// import { WaysToHelpContent } from "../Navigation/WaysToHelpContent"
// import img from "../Images/donate-page.jpg"
import img2 from "../Images/donate2.jpg"
import { Link } from "react-router-dom"
import SponsorsAndPartners from "../SponsorsAndPartners/SponsorsAndPartners"
import GetInvolved from "../GetInvolved/GetInvolved"
const Donate = () => {
   return (
      <>
         <div className="donate-hero">
            <img src={img2} alt="donate-hero" />
            <h1>Donate</h1>
         </div>
         <div className="donate-container">
            <h2 className="donate-desc-header">
               Deskan was established with the aim of providing social
               services,education, counseling and clinical services.
            </h2>

            <h2>Why Donate?</h2>

            <h3>
               Since 2016 Deskan Restoring Hope, Inc has provided the following:
            </h3>
            <p>
               MASKS PROJECT for Hospitals, Nursing Homes, Senior Center,
               (National and International)
            </p>
            <ul className="donate-reasons">
               <li>Increase resources for Military families.</li>
               <li>
                  Increase resources for Homeless Veterans, disable Veterans
               </li>
               <li>Native American Health Care for families in ND</li>
               <li>
                  Provide resource and Counselling for Domestic Violence
                  families and women of homelessness as a result of DV.
               </li>
               <li>
                  Help with funding for COVID-19 burial ( April 2020 to Present
                  )
               </li>
               <li>
                  Provide support for young Adult that were homeless as a result
                  of COVID-19.
               </li>
               <li>Support for Women Veterans and their Children</li>
               <li>The Food Pantry</li>
               <li>Medical Mission & Missionary Work</li>
               <li>The Clothes Closet</li>
               <li>Back to School Program & The Community Holiday Giving</li>
               <li>Helping the Homeless</li>
               <p className="donate-welcome-help">
                  DESKAN welcomes your partnership in our global mission.
                  Together we really can make a difference in people’s lives. We
                  invite you to extend your hand by giving your time and talent
                  to a much needed cause - helping the needy.
               </p>
            </ul>
            <div className="donate-waystodonate">
               <h2>Ways to Donate</h2>
               <p className="waystodonate-text">
                  As a registered 501(c)(3) charitable organization as
                  recognized by the Internal Revenue Service, donations to
                  DESKAN Restoring Hope, Inc. are tax deductible. Donations to
                  DESKAN can take many forms:
               </p>
               <ol>
                  <li>Cash, check or credit card, Zelle</li>
                  <li>Sponsorships</li>
                  <li>Wire Transfers and Gifts of Securities</li>
                  <li>Equipment and supplies.</li>
               </ol>

               <h3>
                  DESKAN thank you in advance for your donation towards our
                  missions.
               </h3>
            </div>

            <h2>Mail In Donation</h2>
            <p>
               Mailing Address <br />
               Deskan Restoring Hope Through Compassion, Inc <br /> 3055
               Constellation Dr, <br /> Melbourne, FL. 32940
            </p>
            <h2>Donate by Zelle, Cashapp, Credit/Debit Card</h2>
            <p>
               To make a donation through Zelle, Cashapp, Debit or Credit Card,
               please CALL US! <br /> Phone: 404-234-2702/770-256-0356
            </p>

            <h2>
               Some of the Programms the Donations will be used for you can find
               here
            </h2>
            <Link to="/veterans">Programms</Link>
         </div>
         <SponsorsAndPartners></SponsorsAndPartners>
         <GetInvolved></GetInvolved>
      </>
   )
}

export default Donate

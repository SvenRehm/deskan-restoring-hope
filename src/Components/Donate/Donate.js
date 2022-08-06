import React from "react"
import "./Index.css"
import img2 from "../../Images/donate2.jpg"
import SponsorsAndPartners from "../SponsorsAndPartners/SponsorsAndPartners"
import GetInvolved from "../GetInvolved/GetInvolved"
import WhatWeDo from "../WhatWeDo/WhatWeDo"
import AnimatePage from "../../Animations/AnimatePage"
import { motion } from "framer-motion"

const Donate = () => {
   const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }
   return (
      <>
         <AnimatePage>
            <div className="donate-hero">
               <img src={img2} alt="donate-hero" />
               <h1>Donate</h1>
            </div>

            <motion.div
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               transition={transition}
               className="donate-container"
            >
               <h2>JOIN A CAUSE Donate</h2>

               <h4>
                  Deskan was established with the aim of providing social
                  services,education, counseling and clinical services.
               </h4>

               <h2>Why Donate?</h2>

               <h3>
                  Since 2016 Deskan Restoring Hope, Inc has provided the
                  following:
               </h3>
               <p>
                  MASKS PROJECT for Hospitals, Nursing Homes, Senior Center,
                  (National and International)
               </p>

               <motion.ol
                  initial={{ opacity: 0, y: 250 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={transition}
                  className="donate-reasons"
               >
                  <li>Increase resources for Military families.</li>
                  <li>
                     Increase resources for Homeless Veterans, disable Veterans
                  </li>
                  <li>Native American Health Care for families in NEED</li>
                  <li>
                     Provide resource and Counseling for Domestic Violence
                     families and women of homelessness as a result of DV.
                  </li>
                  <li>
                     Help with funding for COVID-19 burial ( April 2020 to
                     Present )
                  </li>
                  <li>
                     Provide support for young Adult that were homeless as a
                     result of COVID-19.
                  </li>
                  <li>Support for Women Veterans and their Children</li>

                  <li>
                     DASATER /HURRICANE/EARTHQUAKES/ Medical Mission &
                     Missionary Work
                  </li>
                  <li>Back to School Program & The Community Holiday Giving</li>

                  <li>RESOURCES FOR SAFE SCHOOLS/DOMESTICE VIOLENCE</li>

                  <p className="donate-welcome-help">
                     DESKAN welcomes your partnership in our global mission.
                     Together we really can make a difference in people’s lives.
                     We invite you to extend your hand by giving your time and
                     talent to a much needed cause - helping the needy.
                  </p>
               </motion.ol>

               <motion.div
                  initial={{ opacity: 0, y: 250 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={transition}
                  className="donate-container"
               >
                  <h2>Ways to Donate</h2>
                  <p className="waystodonate-text">
                     As a registered 501(c)(3) charitable organization as
                     recognized by the Internal Revenue Service, donations to
                     DESKAN Restoring Hope, Inc. are tax deductible. Donations
                     to DESKAN can take many forms:
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
               </motion.div>
               <motion.div
                  initial={{ opacity: 0, y: 250 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={transition}
               >
                  <h2>Mail In Donation</h2>
                  <p>
                     Mailing Address <br />
                     Deskan Restoring Hope Through Compassion, Inc <br /> 3055
                     Constellation Dr, <br /> Melbourne, FL. 32940
                  </p>
                  <h2>Donate by Zelle, Cashapp, Credit/Debit Card</h2>
                  <p>
                     To make a donation through Zelle, Cashapp, Debit or Credit
                     Card, please CALL US! <br /> Phone:
                     404-234-2702/770-256-0356
                  </p>

                  <h2>
                     Some of the Programms the Donations will be used for you
                     can find down below
                  </h2>
               </motion.div>
               {/* <Link to="/veterans">Programms</Link> */}
            </motion.div>

            <WhatWeDo />
            <SponsorsAndPartners />
            <GetInvolved />
         </AnimatePage>
      </>
   )
}

export default Donate
import React from "react"
import img from "../../Images/contact.jpg"
import "./Index.css"
//reports
import Pdf1 from "../../Images/Pdf/Reports/RebuildBarbuda Roof Project  Report 2019.pdf"
import Pdf2 from "../../Images/Pdf/Reports/Deskan Institute Newsletter32.pdf"
import Pdf3 from "../../Images/Pdf/Reports/November Special Edit. Newsletter.pdf"
import Pdf4 from "../../Images/Pdf/Reports/MissionReport.pdf"
import Pdf5 from "../../Images/Pdf/Reports/HungarReport.pdf"
import Pdf6 from "../../Images/Pdf/Reports/2011Mission.pdf"
import Pdf7 from "../../Images/Pdf/Reports/haiti.pdf"
import Pdf8 from "../../Images/Pdf/Reports/Guyana2007MissionReport.pdf"
import Pdf9 from "../../Images/Pdf/Reports/medical_mission.pdf"
import Pdf10 from "../../Images/Pdf/Reports/Desakn Medical Report for 2014  BACKGROUND_12(F15).pdf"
//newsletter

import Pdf11 from "../../Images/Pdf/Newsletter/Deskan Report 2nd Global Conf_2013.edited.pdf"
import Pdf12 from "../../Images/Pdf/Newsletter/GCA_JULY_ON-LINE_MAGAZINE_-_FINAL.pdf"
import Pdf13 from "../../Images/Pdf/Newsletter/DeskanWinter2013.pdf"
import Pdf14 from "../../Images/Pdf/Newsletter/Guyana Times 332013-md-su-2.pdf 2013 Copy.pdf.pdf"
import Pdf15 from "../../Images/Pdf/Newsletter/2011 Fall-Winter Newsletter.pdf"
import Pdf16 from "../../Images/Pdf/Newsletter/Fall2000.pdf"
import Pdf17 from "../../Images/Pdf/Newsletter/NSLS certificate.jpg"
import Pdf18 from "../../Images/Pdf/Newsletter/Ms. Nedd.jpg"
import Pdf19 from "../../Images/Pdf/Newsletter/Newsletter Final.pdf"

function Reports() {
   return (
      <div className="reports">
         <div className="reports-hero">
            <img src={img} alt="reports-hero" />
            <h1>Reports | Newsletter</h1>
         </div>
         <div className="reports-container">
            <h2>Reports</h2>
            <ul className="report-list">
               <li>
                  <a href={Pdf1} target="_blank" rel="noreferrer">
                     2019 Barbuda Report
                  </a>
               </li>
               <li>
                  <a href={Pdf2} target="_blank" rel="noreferrer">
                     2015 Report
                  </a>
               </li>
               <li>
                  <a href={Pdf3} target="_blank" rel="noreferrer">
                     Special Edition Report 11/15
                  </a>
               </li>
               <li>
                  <a href={Pdf4} target="_blank" rel="noreferrer">
                     Mission Report for 2012
                  </a>
               </li>
               <li>
                  <a href={Pdf5} target="_blank" rel="noreferrer">
                     Hunger Report & Lunch Menu
                  </a>
               </li>
               <li>
                  <a href={Pdf6} target="_blank" rel="noreferrer">
                     Mission Report for 2011
                  </a>
               </li>
               <li>
                  <a href={Pdf7} target="_blank" rel="noreferrer">
                     Haiti Earthquake Medical Mission 2010 Report
                  </a>
               </li>
               <li>
                  <a href={Pdf8} target="_blank" rel="noreferrer">
                     Guyana 2007 Mission Report
                  </a>
               </li>
               <li>
                  <a href={Pdf9} target="_blank" rel="noreferrer">
                     Medical Missions 2003-2005
                  </a>
               </li>
               <li>
                  <a href={Pdf10} target="_blank" rel="noreferrer">
                     Deskan Medical Report for 2014
                  </a>
               </li>
            </ul>
            <h2>Newsletter</h2>
            <ul className="newsletter-list">
               <li>
                  <a href={Pdf11} target="_blank" rel="noreferrer">
                     2nd Global Conference Report
                  </a>
               </li>
               <li>
                  <a href={Pdf12} target="_blank" rel="noreferrer">
                     July 2014 Magazine
                  </a>
               </li>
               <li>
                  <a href={Pdf13} target="_blank" rel="noreferrer">
                     Fall/Winter 2013 Newsletter
                  </a>
               </li>
               <li>
                  <a href={Pdf14} target="_blank" rel="noreferrer">
                     Guyana Times newspaper on Deskan
                  </a>
               </li>
               <li>
                  <a href={Pdf15} target="_blank" rel="noreferrer">
                     Fall/Winter 2011 Newsletter
                  </a>
               </li>
               <li>
                  <a href={Pdf16} target="_blank" rel="noreferrer">
                     Deskan News Letter 2000
                  </a>
               </li>
               <li>
                  <a href={Pdf17} target="_blank" rel="noreferrer">
                     National Society of Leadership and Success certificate
                     (Sigma Alpha Pi)
                  </a>
               </li>
               <li>
                  <a href={Pdf18} target="_blank" rel="noreferrer">
                     New Roof: New Home after Barbuda Hurricane
                  </a>
               </li>
               <li>
                  <a href={Pdf19} target="_blank" rel="noreferrer">
                     Newsletter 2020
                  </a>
               </li>
            </ul>
         </div>
      </div>
   )
}

export default Reports

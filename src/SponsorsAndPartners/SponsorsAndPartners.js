import React from "react"
import "./Index.css"
import img from "../Images/Sponsors/1.png"
import img2 from "../Images/Sponsors/2.png"
import img3 from "../Images/Sponsors/3.png"
import img4 from "../Images/Sponsors/4.png"
import img5 from "../Images/Sponsors/5.png"
import img6 from "../Images/Sponsors/6.jpg"
import img7 from "../Images/Sponsors/7.png"
import img8 from "../Images/Sponsors/8.png"
const SponsorsAndPartners = () => {
   return (
      <section className="sponsors">
         <ul>
            <li className="sponsoricon">
               <img src={img} alt="sponsor"></img>
            </li>
            <li className="sponsoricon">
               <img src={img2} alt="sponsor2"></img>
            </li>
            <li className="sponsoricon">
               <img src={img3} alt="sponsor3"></img>
            </li>
            <li className="sponsoricon">
               <img src={img4} alt="sponsor4"></img>
            </li>
            <li className="sponsoricon">
               <img src={img5} alt="sponsor5"></img>
            </li>
            <li className="sponsoricon">
               <img src={img6} alt="sponsor6"></img>
            </li>
            <li className="sponsoricon">
               <img src={img7} alt="sponsor7"></img>
            </li>
            <li className="sponsoricon">
               <img src={img8} alt="sponsor8"></img>
            </li>
         </ul>
      </section>
   )
}

export default SponsorsAndPartners

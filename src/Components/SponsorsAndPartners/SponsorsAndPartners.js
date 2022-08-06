import React, { useEffect } from "react"
import "./Index.css"
import img from "../../Images/Sponsors/1.png"
import img2 from "../../Images/Sponsors/2.png"
import img3 from "../../Images/Sponsors/3.jpg"
import img4 from "../../Images/Sponsors/4.jpg"
import img5 from "../../Images/Sponsors/5.png"
import img6 from "../../Images/Sponsors/6.png"
import img7 from "../../Images/Sponsors/7.png"
import img8 from "../../Images/Sponsors/8.png"
import img9 from "../../Images/Sponsors/9.png"
import img10 from "../../Images/Sponsors/10.png"
import img11 from "../../Images/Sponsors/11.png"

import { useAnimation, motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const variants = {
   visible: { opacity: 1, y: 0 },
   hidden: { opacity: 0, y: 150 },
}
const SponsorsAndPartners = () => {
   const controls = useAnimation()
   const [ref, inView] = useInView()

   useEffect(() => {
      if (inView) {
         controls.start("visible")
      }
   }, [controls, inView])
   return (
      <motion.div
         className="sponsors"
         ref={ref}
         animate={controls}
         initial="hidden"
         variants={variants}
      >
         <h2>Our Partners | Sponsors</h2>
         <ul>
            <li className="sponsoricon">
               <img src={img} alt="sponsor"></img>
            </li>
            <li className="sponsoricon">
               <img src={img3} alt="sponsor3"></img>
            </li>
            <li className="sponsoricon">
               <img src={img6} alt="sponsor6"></img>
            </li>
            <li className="sponsoricon">
               <img src={img10} alt="sponsor8"></img>
            </li>

            <li className="sponsoricon">
               <img src={img4} alt="sponsor4"></img>
            </li>
            <li className="sponsoricon smaller">
               <img src={img5} alt="sponsor5"></img>
            </li>
            <li className="sponsoricon">
               <img src={img8} alt="sponsor8"></img>
            </li>
            <li className="sponsoricon bigger">
               <img src={img9} alt="sponsor8"></img>
            </li>
            <li className="sponsoricon bigger">
               <img src={img2} alt="sponsor2"></img>
            </li>
            <li className="sponsoricon bigger">
               <img src={img7} alt="sponsor7"></img>
            </li>
            <li className="sponsoricon bigger">
               <img src={img11} alt="sponsor7"></img>
            </li>
         </ul>
      </motion.div>
   )
}

export default SponsorsAndPartners

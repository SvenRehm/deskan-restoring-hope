import React, { useEffect } from "react"
import "./Index.css"
import { Link } from "react-router-dom"
import { useAnimation, motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
const variants = {
   visible: { opacity: 1, y: 0 },
   hidden: { opacity: 0, y: 250 },
}
const GetInvolved = () => {
   const controls = useAnimation()
   const [ref, inView] = useInView()

   useEffect(() => {
      if (inView) {
         controls.start("visible")
      }
   }, [controls, inView])

   return (
      <div className="get-involved-wrapper">
         <motion.div
            className="get-involved"
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={variants}
         >
            <h1>We welcome your partnership in our global mission.</h1>
            <h2>
               Volunteer, join a committee, become a sponsor or partner, or make
               a donation.
            </h2>
            <div className="get-involved-button-wrapper">
               {/* {!getinvolved ? (
                  <Link to="/volunteer">
                     <button>Get Involved</button>
                  </Link>
               ) : (
                  <Link to="/contact">
                     <button>Contact Us</button>
                  </Link>
               )} */}
               <Link to="/contact">
                  <button>Contact Us</button>
               </Link>
            </div>
         </motion.div>
      </div>
   )
}

export default GetInvolved

import React, { useEffect } from "react"
import "./Index.css"
import { useAnimation, motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const variants = {
   visible: { opacity: 1, y: 0 },
   hidden: { opacity: 0, y: 150 },
}
const Info = () => {
   const controls = useAnimation()
   const [ref, inView] = useInView()

   useEffect(() => {
      if (inView) {
         controls.start("visible")
      }
   }, [controls, inView])

   return (
      <motion.div
         className="info"
         ref={ref}
         animate={controls}
         initial="hidden"
         variants={variants}
      >
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
      </motion.div>
   )
}

export default Info

import React, { useEffect } from "react"
import "./Index.css"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { Link } from "react-router-dom"
import { useAnimation, motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const variants = {
   visible: { opacity: 1, y: 0 },
   hidden: { opacity: 0, y: 150 },
}

const Card = ({ img, title, text, link }) => {
   const controls = useAnimation()
   const [ref, inView] = useInView()

   useEffect(() => {
      if (inView) {
         controls.start("visible")
      }
   }, [controls, inView])

   return (
      <motion.div
         initial={{ opacity: 0, y: 250 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
         transition={{ duration: 0.5 }}
         className="card"
         // ref={ref}
         // animate={controls}
         // initial="hidden"
         // variants={variants}
      >
         <LazyLoadImage src={img} alt="i" />
         <div className="card-content">
            <h2>{title}</h2>
            <p>{text}</p>
            <div className="card-readmore">
               <Link to={link}>Learn More</Link>
            </div>
         </div>
      </motion.div>
   )
}

export default Card

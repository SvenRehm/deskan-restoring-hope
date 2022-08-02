import React from "react"
import "./Index.css"
import Card from "./Card"
import { whatWeDoContent } from "./CardContent"
import { motion } from "framer-motion"

const WhatWeDo = () => {
   const container = {
      initial: { opacity: 0 },
      animate: {
         opacity: 1,
         transition: {
            delayChildren: 0.1,
            staggerChildren: 0.3,
            ease: [0.43, 0.13, 0.23, 0.96],
         },
      },
   }
   const cardanimation = {
      initial: { opacity: 0 },
      animate: {
         opacity: 1,

         transition: {
            duration: 0.6,
            ease: [0.43, 0.13, 0.23, 0.96],
         },
      },
   }
   const AllCards = whatWeDoContent.map((item, i) => {
      return (
         <motion.div className="card" variants={cardanimation} key={i}>
            <Card
               title={item.title}
               text={item.text}
               img={item.img}
               link={item.link}
            />
         </motion.div>
      )
   })

   return (
      <section className="whatwedo">
         <h2>What We Do</h2>
         <motion.div
            className="container2"
            variants={container}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            // transition={transition}
         >
            {AllCards}
         </motion.div>
      </section>
   )
}

export default WhatWeDo

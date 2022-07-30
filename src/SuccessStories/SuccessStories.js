import React, { useEffect } from "react"
import "./Index.css"

import { useAnimation, motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
const variants = {
   visible: { opacity: 1, y: 0 },
   hidden: { opacity: 0, y: 150 },
}
const SuccessStories = () => {
   const controls = useAnimation()
   const [ref, inView] = useInView()

   useEffect(() => {
      if (inView) {
         controls.start("visible")
      }
   }, [controls, inView])
   return (
      <motion.div
         className="success-stories-wrapper"
         ref={ref}
         animate={controls}
         initial="hidden"
         variants={variants}
      >
         <div className="success-stories">
            <h1>Success Stories</h1>
            <div className="success-card">
               <h2>I'M A CANCER SURVIVOR</h2>
               <p>
                  “I am a cancer patient and at one time I just finish CHEM and
                  got started late trying to get things for my children to have
                  a Thanksgiving meal. It was so hard, I got frustrated,
                  depressed and felt at my wits end. Everything was so hard.”
                  However, thanks to Deskan, my children were able to eat a nice
                  meal for Thanksgiving.” (Bufford, GA).
               </p>
            </div>
            <div
               className="success-card right-aligned"
               ref={ref}
               animate={controls}
               initial="hidden"
               variants={variants}
            >
               <h2>I am a grandmother raising my grandchildren</h2>
               <p>
                  These 5 children did not ask to come here. The situation is
                  very bad with their parents. They fight all the time. I am in
                  church on my knees that the Lord would help. This food would
                  help so much. The toys would keep the children happy. God
                  bless you people.” (Grandmother of 2).
               </p>
            </div>
            <div className="success-card">
               <h2>I am a single mother of three from Tennessee. </h2>
               <p>
                  “My son's father was murdered in front of us. I am a
                  Christian, I grew up in a Christian home, but things got a
                  little out of hand. I just had to ask for help. Deskan has
                  been there for me and my children and I thank God for them."
                  (Decatur)
               </p>
            </div>
         </div>
      </motion.div>
   )
}

export default SuccessStories

import React from "react"
import "./Index.css"
import { useParams } from "react-router-dom"
import GetInvolved from "../GetInvolved/GetInvolved"
import { WaysToHelpContent } from "../Navigation/WaysToHelpContent"
import { ProgrammsContent } from "../Navigation/ProgrammsContent"
import { AboutContent } from "../Navigation/AboutContent"
import AnimatePage from "../Animations/AnimatePage"
import { motion } from "framer-motion"

const allArrays = [...WaysToHelpContent, ...ProgrammsContent, ...AboutContent]

function filterArrayWithParams(param) {
   return allArrays.filter((item) => item.path.includes(param))
}

const Blog1 = () => {
   let params = useParams()
   let invoice = filterArrayWithParams(params.blogId)

   const container = {
      hidden: { opacity: 1 },
      show: {
         opacity: 1,
         transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2,
         },
      },
   }

   const item = {
      hidden: { opacity: 0 },
      show: {
         opacity: 1,
         transition: {
            duration: 0.4,
         },
      },
   }

   return (
      <>
         <AnimatePage>
            <div className="blog">
               {/* <AnimatePage> */}
               <div className="blog-hero">
                  <img src={invoice[0].heroimg} alt="i" />
                  <motion.h1
                     initial="hidden"
                     animate="visible"
                     variants={{
                        hidden: {
                           scale: 0.9,
                           opacity: 0,
                        },
                        visible: {
                           scale: 1,
                           opacity: 1,
                           transition: {
                              duration: 0.6,
                           },
                        },
                     }}
                  >
                     {invoice[0].title}
                  </motion.h1>
               </div>

               <motion.div
                  variants={container}
                  initial="hidden"
                  animate="show"
                  className="blog-grid"
                  // initial="hidden"
                  // animate="visible"
                  // variants={{
                  //    hidden: {
                  //       opacity: 0,
                  //    },
                  //    visible: {
                  //       opacity: 1,
                  //       transition: {
                  //          duration: 0.7,
                  //          delay: 0.8,
                  //       },
                  //    },
                  // }}
               >
                  <motion.h2 variants={item}>{invoice[0].header}</motion.h2>
                  <motion.h3
                     variants={item}
                     dangerouslySetInnerHTML={{ __html: invoice[0].desc }}
                  ></motion.h3>
                  <motion.p
                     variants={item}
                     dangerouslySetInnerHTML={{ __html: invoice[0].paragraph }}
                  ></motion.p>
                  <motion.img
                     variants={item}
                     src={invoice[0].img}
                     alt="blogimage"
                  />
                  {invoice[0].pdf ? (
                     <a href={invoice[0].pdf} target="_blank" rel="noreferrer">
                        {invoice[0].pdfName}
                     </a>
                  ) : null}
               </motion.div>
            </div>

            <GetInvolved />
         </AnimatePage>
      </>
   )
}

export default Blog1

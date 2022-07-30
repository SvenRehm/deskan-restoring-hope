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

   return (
      <>
         <div className="blog">
            <AnimatePage>
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
                              delay: 0.4,
                           },
                        },
                     }}
                  >
                     {invoice[0].title}
                  </motion.h1>
               </div>
            </AnimatePage>
            <div className="blog-grid">
               <h2>{invoice[0].header}</h2>
               <h3 dangerouslySetInnerHTML={{ __html: invoice[0].desc }}></h3>
               <p
                  dangerouslySetInnerHTML={{ __html: invoice[0].paragraph }}
               ></p>
               <img src={invoice[0].img} alt="blogimage" />
               {invoice[0].pdf ? (
                  <a href={invoice[0].pdf} target="_blank" rel="noreferrer">
                     {invoice[0].pdfName}
                  </a>
               ) : null}
            </div>
         </div>
         <GetInvolved />
      </>
   )
}

export default Blog1

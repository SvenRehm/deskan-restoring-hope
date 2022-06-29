import React from "react"
import "./Index.css"
// import aboutusimg from "../Images/about_us.jpg"
// import { Link, Outlet } from "react-router-dom"
// import { WaysToHelpContent } from "../Navigation/WaysToHelpContent"

import { useParams } from "react-router-dom"
import GetInvolved from "../GetInvolved/GetInvolved"
import { WaysToHelpContent } from "../Navigation/WaysToHelpContent"
import { ProgrammsContent } from "../Navigation/ProgrammsContent"
import { AboutContent } from "../Navigation/AboutContent"
import heroImg from "../Images/helmet.jpg"
import Happy from "../Images/Happy dad.jpg"
// import Pdf from "../Images/Pdf/RebuildBarbuda Roof Project  Report 2019.pdf"
const allArrays = [...WaysToHelpContent, ...ProgrammsContent, ...AboutContent]

function filterArrayWithParams(param) {
   console.log(param)
   return allArrays.filter((item) => item.path.includes(param))
}

const Blog1 = () => {
   let params = useParams()
   let invoice = filterArrayWithParams(params.blogId)
   console.log(invoice)
   return (
      <>
         <section className="blog">
            <div className="blog-hero">
               <img src={heroImg} alt="i" />
               <h1>{invoice[0].title}</h1>
            </div>

            <div className="blog-grid">
               {/* {params.blogId} */}
               <h2>{invoice[0].header}</h2>
               <h3 dangerouslySetInnerHTML={{ __html: invoice[0].desc }}>
                  {/* {invoice[0].desc} */}
               </h3>

               <p dangerouslySetInnerHTML={{ __html: invoice[0].paragraph }}>
                  {/* {invoice[0].paragraph} */}
               </p>
               <img src={Happy} alt="blogimage" />
               {/* <a href={Pdf} target="_blank" rel="noreferrer">
                  Download Pdf
               </a> */}
            </div>
         </section>
         <GetInvolved />
      </>
   )
}

export default Blog1

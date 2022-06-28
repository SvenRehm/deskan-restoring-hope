import React from "react"
import "./Index.css"
// import aboutusimg from "../Images/about_us.jpg"
// import { Link, Outlet } from "react-router-dom"
// import { WaysToHelpContent } from "../Navigation/WaysToHelpContent"

import { useParams } from "react-router-dom"
import { WaysToHelpContent } from "../Navigation/WaysToHelpContent"
import { ProgrammsContent } from "../Navigation/ProgrammsContent"
import { AboutContent } from "../Navigation/AboutContent"
import heroImg from "../Images/helmet.jpg"

const allArrays = [...WaysToHelpContent, ...ProgrammsContent, ...AboutContent]

function filterArrayWithParams(param) {
   return allArrays.filter((item) => item.path.includes(param))
}

const Blog1 = () => {
   let params = useParams()
   let invoice = filterArrayWithParams(params.blogId)
   console.log(invoice.header)
   return (
      <section className="blog">
         <div className="blog-hero">
            <img src={heroImg} alt="i" />
            <h1>{invoice[0].header}</h1>
         </div>

         <div className="blog-grid">
            {/* {params.blogId} */}

            <h3>{invoice[0].desc}</h3>
            <p>{invoice[0].paragraph}</p>
         </div>
      </section>
   )
}

export default Blog1

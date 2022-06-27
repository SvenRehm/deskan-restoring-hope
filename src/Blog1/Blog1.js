import React from "react"
import "./Index.css"
// import aboutusimg from "../Images/about_us.jpg"
// import { Link, Outlet } from "react-router-dom"
// import { WaysToHelpContent } from "../Navigation/WaysToHelpContent"

import { useParams } from "react-router-dom"

const Blog1 = () => {
   let params = useParams()
   console.log(useParams)
   return <div>{params.blogId}</div>
}

export default Blog1

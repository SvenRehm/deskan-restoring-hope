import React from "react"
import "./Index.css"
import Card from "./Card"
import { whatWeDoContent } from "./CardContent"

const WhatWeDo = () => {
   const AllCards = whatWeDoContent.map((item, i) => {
      return (
         <Card
            key={i}
            title={item.title}
            text={item.text}
            img={item.img}
            link={item.link}
         />
      )
   })

   return (
      <section className="whatwedo ">
         <h2>What We Do</h2>
         <div className="container2">{AllCards}</div>
      </section>
   )
}

export default WhatWeDo

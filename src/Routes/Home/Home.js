import Hero from "../../Hero/Hero"
import WhatWeDo from "../../What We Do/WhatWeDo"
import Info from "../../Info/Info"
import HomeAboutUs from "../../Home-AboutUs/HomeAboutUs"
import SponsorsAndPartners from "../../SponsorsAndPartners/SponsorsAndPartners"
import SuccessStories from "../../SuccessStories/SuccessStories"
import GetInvolved from "../../GetInvolved/GetInvolved"

function Home() {
   return (
      <div className="Home">
         <>
            <Hero />
            <WhatWeDo />
            <Info />
            <HomeAboutUs />
            <SponsorsAndPartners />
            <SuccessStories />
            <GetInvolved />
         </>
      </div>
   )
}

export default Home

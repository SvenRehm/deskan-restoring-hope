import Hero from "../../Hero/Hero"
import WhatWeDo from "../../WhatWeDo/WhatWeDo"
import Info from "../../Info/Info"
import HomeAboutUs from "../../Home-AboutUs/HomeAboutUs"
import SponsorsAndPartners from "../../SponsorsAndPartners/SponsorsAndPartners"
import SuccessStories from "../../SuccessStories/SuccessStories"
import GetInvolved from "../../GetInvolved/GetInvolved"

function Home() {
   return (
      <>
         <Hero />
         <WhatWeDo />
         <Info />
         <HomeAboutUs />
         <SponsorsAndPartners />
         <SuccessStories />
         <GetInvolved />
      </>
   )
}

export default Home

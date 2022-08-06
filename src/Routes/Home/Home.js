import Hero from "../../Components/Hero/Hero"
import WhatWeDo from "../../Components/WhatWeDo/WhatWeDo"
import Info from "../../Components/Info/Info"
import HomeAboutUs from "../../Components/Home-AboutUs/HomeAboutUs"
import SponsorsAndPartners from "../../Components/SponsorsAndPartners/SponsorsAndPartners"
import SuccessStories from "../../Components/SuccessStories/SuccessStories"
import GetInvolved from "../../Components/GetInvolved/GetInvolved"

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

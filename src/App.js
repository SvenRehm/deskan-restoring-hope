import "./App.css"
import Navigation from "./Navigation/Navigation"
import Hero from "./Hero/Hero"
import WhatWeDo from "./What We Do/WhatWeDo"
import Info from "./Info/Info"
import HomeAboutUs from "./Home-AboutUs/HomeAboutUs"
import SponsorsAndPartners from "./SponsorsAndPartners/SponsorsAndPartners"
function App() {
   return (
      <div className="App">
         <>
            <Navigation />
            <Hero />
            <WhatWeDo />
            <Info />
            <HomeAboutUs />
            <SponsorsAndPartners />
         </>
      </div>
   )
}

export default App

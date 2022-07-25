import React from "react"

import {
   HeroStyles,
   HeroContainer,
   DonateButton,
   CtaHero,
   VolunteerButton,
} from "./HeroStyles"

const Hero = () => {
   return (
      <HeroStyles>
         <HeroContainer>
            <h1>
               WE ARE <br />A VETERAN <br />
               SERVING VETERANS
            </h1>
            <h2>Helping homeless Vets and their Families.</h2>

            <CtaHero>
               <DonateButton to="/donate">Donate</DonateButton>

               <VolunteerButton to="/volunteer">Volunteer</VolunteerButton>
            </CtaHero>
         </HeroContainer>
      </HeroStyles>
   )
}

export default Hero

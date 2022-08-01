import { motion } from "framer-motion"
import React from "react"

import {
   HeroStyles,
   HeroContainer,
   DonateButton,
   CtaHero,
   VolunteerButton,
} from "./HeroStyles"

// const variants = {
//    hidden: {
//       opacity: 0,
//    },
//    visible: {
//       opacity: 1,
//       transition: {
//          duration: 0.3,
//       },
//    },
// }

const Hero = () => {
   return (
      <HeroStyles>
         <HeroContainer>
            <motion.h1
               initial="hidden"
               animate="visible"
               variants={{
                  hidden: {
                     scale: 0.85,
                     opacity: 0,
                  },
                  visible: {
                     scale: 1,
                     opacity: 1,

                     transition: {
                        duration: 0.5,
                        delay: 0.3,
                     },
                  },
               }}
            >
               WE ARE <br />A VETERAN <br />
               SERVING VETERANS
            </motion.h1>
            <motion.h2
               initial="hidden"
               animate="visible"
               variants={{
                  hidden: {
                     opacity: 0,
                  },
                  visible: {
                     opacity: 1,
                     transition: {
                        delay: 0.8,
                        duration: 0.3,
                     },
                  },
               }}
            >
               Helping homeless Vets and their Families.
            </motion.h2>

            <CtaHero
               as={motion.div}
               initial="hidden"
               animate="visible"
               variants={{
                  hidden: {
                     opacity: 0,
                  },
                  visible: {
                     opacity: 1,

                     transition: {
                        delay: 1.1,
                        duration: 0.4,
                     },
                  },
               }}
            >
               <DonateButton to="/donate">Donate</DonateButton>

               <VolunteerButton to="/volunteer">Volunteer</VolunteerButton>
            </CtaHero>
         </HeroContainer>
      </HeroStyles>
   )
}

export default Hero

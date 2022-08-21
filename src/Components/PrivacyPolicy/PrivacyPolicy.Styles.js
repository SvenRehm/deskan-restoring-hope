import styled from "styled-components"
import { motion } from "framer-motion"

export const MoreInfoHero = styled.div`
   height: 35vh;
   width: 100%;
   display: grid;
   grid-template-columns: repeat(12, 1fr);
   grid-template-rows: repeat(2, 1fr);
   img {
      grid-column: 1/13;
      grid-row: 1/3;
      width: 100%;
      height: 100%;
      object-fit: cover;
      overflow: hidden;
      filter: brightness(80%);
   }
   h1 {
      z-index: 2;
      color: var(--main-white-color);
      font-size: 3em;
      grid-row: 1/3;
      grid-column: 1/13;
      justify-self: center;
      align-self: center;
      margin-top: 2em;
   }
`
export const TosContainer = styled(motion.div)`
   max-width: 1160px;
   margin: 0 auto;
   display: grid;
   grid-template-columns: repeat(12, 1fr);
   p {
      align-self: center;
      justify-self: center;
      grid-column: 3/11;
      font-size: 1.2em;
      line-height: 1.6;
      margin: 2em 0 6em 0;
   }
   h1 {
      align-self: center;
      justify-self: center;
      grid-column: 2/12;
      font-size: 1.7em;
      line-height: 1.6;
      margin: 2em 0 0 0;
   }
   ol {
      margin-top: 2em;
      grid-row: 2;
      align-self: center;
      justify-self: center;
      grid-column: 2/12;
      margin-bottom: 6em;
      li {
         margin-top: 1.3em;
         line-height: 1.5;
      }
   }

   @media (max-width: 830px) {
      max-width: 750px;
   }
`

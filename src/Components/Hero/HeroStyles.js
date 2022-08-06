import styled from "styled-components"
import img from "../../Images/young_soldier.jpg"
import { Link } from "react-router-dom"

export const HeroStyles = styled.div`
   width: 100%;
   height: 100vh;
   background-image: url(${img});
   background-size: cover;
   background-position: center center;
   background-repeat: no-repeat;
   background-color: rgba(0, 0, 0, 0.49);
   background-blend-mode: multiply;

   h1 {
      grid-row: 7/8;
      grid-column: 1/9;
      color: var(--main-white-color);
      font-size: 4em;
      line-height: 0.9;
   }
   h2 {
      font-weight: 300;
      grid-row: 8/8;
      grid-column: 1/8;
      font-size: 1.9em;
      margin-top: 0.5em;
      color: var(--main-white-color);
   }

   @media (max-width: 1101px) {
      h1 {
         grid-column: 1/10;
      }
      h2 {
         grid-column: 1/10;
      }
   }
   @media (max-width: 950px) {
      h1 {
         grid-column: 1/12;
      }
   }
   @media (max-width: 830px) {
      h1 {
         font-size: 3.8em;
      }
      h2 {
         grid-column: 1/13;
      }
   }

   @media (max-width: 600px) {
      h1 {
         font-size: 3.3em;
      }
   }
   @media only screen and (max-width: 486px) {
      h2 {
         font-size: 1.7em;
      }
   }
`

export const CtaHero = styled.div`
   margin-top: 5.5em;
   grid-column: 1/8;
   grid-row: 9/10;

   @media (max-width: 600px) {
      grid-column: 1/13;
      grid-row: 9/10;
   }

   @media only screen and (max-width: 486px) {
      grid-column: 1/13;
      grid-row: 9/10;
   }
`

export const HeroContainer = styled.div`
   height: 100%;
   display: grid;
   grid-template-columns: repeat(12, 1fr);
   grid-template-rows: repeat(12, 1fr);
   max-width: 1160px;
   margin: 0 auto;

   @media (max-width: 1250px) {
      max-width: 1050px;
   }

   @media (max-width: 1101px) {
      max-width: 920px;
   }
   @media (max-width: 950px) {
      max-width: 920px;
      padding: 0 2.5em;
   }

   @media (max-width: 600px) {
      padding: 0 2em;
   }
`

export const DonateButton = styled(Link)`
   text-transform: uppercase;
   letter-spacing: 1.3px;
   text-align: center;
   text-decoration: none;
   background-color: var(--main-accent-color);
   color: var(--main-white-color);
   font-size: 1.1em;
   padding: 0.7em 2em;
   transition: all 300ms linear;
   margin-left: 0;
   grid-column: 0/8;
   &:hover {
      background-color: var(--main-white-color);
      color: var(--main-accent-color);
      cursor: pointer;
   }

   @media only screen and (max-width: 486px) {
      display: block;
      padding: 0.7em 1.2em;
      width: 180px;
      margin: 0 auto;
   }
`

export const VolunteerButton = styled(DonateButton)`
   margin-left: 2em;
   grid-column: 3/8;

   @media (max-width: 600px) {
      margin-left: 3em;
   }

   @media (max-width: 486px) {
      display: block;
      padding: 0.7em 1.2em;
      width: 180px;
      margin: 0 auto;
      margin-top: 2em;
   }
`

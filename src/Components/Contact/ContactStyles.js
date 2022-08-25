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
export const ContactContainer = styled(motion.div)`
   max-width: 1160px;
   margin: 0 auto;
   display: grid;
   grid-template-columns: repeat(12, 1fr);
   h3 {
      grid-column: 2/12;
      font-size: 1.3em;
      line-height: 1.6;
      margin: 2em 0 0 0;
   }

   @media (max-width: 830px) {
      max-width: 750px;
   }
`
export const WaysToContact = styled(motion.div)`
   grid-column: 2/12;
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   grid-gap: 2em;
   justify-items: center;
   text-align: center;
   margin: 6em 0;
   div h2 {
      color: var(--main-accent-color);
      margin: 1em 0;
   }
   div h3 {
      margin: 0.3em 0;
   }
   @media (max-width: 830px) {
      grid-template-columns: none;
   }
`
export const ContactSocials = styled(motion.div)`
   grid-column: 2/12;
   display: grid;
   grid-template-columns: repeat(4, 1fr);
   grid-gap: 2em;
   justify-items: center;
   text-align: center;
   margin: 1em 0 6em 0;

   .socials-segment {
      transition: all 150ms ease-in-out;
      &:hover {
         transform: scale(1.1);
      }
   }
   .socials-segment a {
      text-decoration: none;
      padding: 0.5em;
      font-size: 1.5em;
      font-weight: 600;
      color: var(--main-accent-color);

      margin: 1em 0;
   }

   @media (max-width: 830px) {
      display: block;
      div {
         margin: 1em 0;
      }
   }
`

export const ContactFormStyles = styled.div`
   max-width: 1160px;
   grid-column: 2/12;
   display: grid;
   grid-template-columns: repeat(12, 1fr);
   padding-bottom: 6em;
   h2 {
      color: var(--main-accent-color);
      grid-column: 2/12;
      font-size: 2.5em;
      text-align: center;
      padding: 0 0 1.5em 0;
   }
   span.visible{
   display: block;
   grid-row: 2;
   grid-column: 1/-1; 
   text-align: center;
   color: green;
   align-self: center;
   }
   span{
   display: none;

   }
   form {
      grid-column: 2/12;
   }
   form div {
      margin: 1.3em 0 0 0;
   }
   form input:placeholder-shown {
      padding-left: 0.5em;
      font-size: 1.1em;
      font-family: "Montserrat", sans-serif;
   }
   form textarea:placeholder-shown {
      font-family: "Montserrat", sans-serif;
      padding-left: 0.5em;
      padding-top: 0.5em;
      font-size: 1.1em;
   }

   form .label-name input,
   form .label-email input,
   form .label-phone input {
      padding-left: 0.5em;
      font-size: 1.1em;
      grid-column: 2/12;
      justify-self: center;
      border: 1px solid rgb(163, 163, 163);

      width: 100%;
      height: 40px;
   }

   form .label-message textarea {
      width: 100%;
      height: 150px;
      font-size: 1.3em;
      padding-top: 0.5em;
      padding-left: 0.5em;
   }

   form .label-name input:focus,
   form .label-email input:focus,
   form .label-phone input:focus,
   form .label-message textarea:focus {
      outline: none;
   }
   form button {
      cursor: pointer;
      margin: 1.3em 0;
      text-transform: uppercase;
      letter-spacing: 1.3px;
      text-align: center;
      text-decoration: none;
      background-color: var(--main-accent-color);

      color: var(--main-white-color);
      font-size: 1.1em;
      padding: 0.7em 2.5em;
      border: 1px solid var(--main-white-color);
      transition: all 150ms linear;
   }
   form button:hover {
      background-color: var(--main-white-color);
      color: var(--main-accent-color);
      border: 1px solid var(--main-accent-color);
   }

   @media (max-width: 830px) {
      h2 {
         grid-column: 1/13;
      }

      form {
         width: 100%;
         grid-column: 1/13;
         justify-self: center;
      }

      form .label-name input,
      form .label-email input,
      form .label-phone input {
         width: 100%;
      }
   }
   @media (max-width: 600px) {
      max-width: 600px;
   }
`

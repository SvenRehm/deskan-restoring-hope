import React from "react"

import "./Index.css"
import MemberCard from "./MemberCard"
import img1 from "../Images/Boardmembers/joan.jpg"
import img2 from "../Images/Boardmembers/charles2.jpg"

import img13 from "../Images/Boardmembers/P.-Griffith.jpg"
import img14 from "../Images/Boardmembers/Dr.-KT.jpg"

import team from "../Images/team.jpg"
import { motion } from "framer-motion"
import AnimatePage from "../Animations/AnimatePage"
const allMembers = [
   {
      id: 1,
      img: img1,
      name: "Joan Liverpool",
      title: "President",
   },
   {
      id: 2,
      img: img2,
      name: "Charles Liverpool",
      title: "Assistant Director and Coordinator, Veterans Program",
   },
   {
      id: 13,
      img: img13,
      name: "Dr. Patrick Griffith",
      title: "Adjunct Professor of Medicine Neurology",
   },
   {
      id: 14,
      img: img14,
      name: "Dr. Kelwyn Thomas",
      title: "Assoc. Professor, Morehouse School of Medicine Prostate Cancer ",
   },
   {
      id: 4,
      img: "asda",
      name: "Dr. Faqueeda Watson",
      title: "Medical Advocate",
   },
   {
      id: 5,
      img: "asda",
      name: "Leona Kyte",
      title: "Coordinator of Deskan Restoring Hope (Guyana, SA)",
   },
   {
      id: 6,
      img: "asda",
      name: "Dr. Patricee Douglas",
      title: "Medical Advocate",
   },
   {
      id: 7,
      img: "asda",
      name: "Tanisha Jerrick",
      title: "Medical Student Mentor & God’s Little Helper",
   },
   {
      id: 8,
      img: "asda",
      name: "Dr. Gwendolyn Dean",
      title: "Deskan Pediatrician",
   },
   {
      id: 9,
      img: "asda",
      name: "David Webb",
      title: "New Board Member",
   },
   {
      id: 10,
      img: "asda",
      name: "Arelene Stoll",
      title: "New Board Member",
   },
   {
      id: 11,
      img: "asda",
      name: "Errol Alexis",
      title: "New Board Member",
   },
   {
      id: 12,
      img: "asda",
      name: "High School Student",
      title: "New Board Member",
   },
]
const container = {
   hidden: { opacity: 1 },
   show: {
      opacity: 1,
      transition: {
         delayChildren: 0.3,
         staggerChildren: 0.2,
      },
   },
}

const members = {
   hidden: { opacity: 0 },
   show: {
      opacity: 1,
      transition: {
         duration: 0.4,
      },
   },
}

const boardMemberCards = allMembers.map((item) => {
   return (
      <motion.section variants={members} className="member-card">
         <MemberCard
            img={item.img}
            name={item.name}
            title={item.title}
            key={item.id}
         />
      </motion.section>
   )
})

function BoardMembers() {
   return (
      <AnimatePage>
         <section className="board-member-section">
            <div className="board-member-hero">
               <img src={team} alt="board-member-hero" />
               <h1>Board Members</h1>
            </div>
            <h2 className="board-member-header">Deskan Board of Directors</h2>
            <motion.div
               className="board-member-container"
               variants={container}
               initial="hidden"
               animate="show"
            >
               {boardMemberCards}
            </motion.div>
         </section>
      </AnimatePage>
   )
}

export default BoardMembers

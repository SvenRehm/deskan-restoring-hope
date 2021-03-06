import React from "react"

import "./Index.css"
import MemberCard from "./MemberCard"
import img1 from "../Images/Boardmembers/joan.jpg"
import img2 from "../Images/Boardmembers/charles2.jpg"

import team from "../Images/team.jpg"

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

const boardMemberCards = allMembers.map((item) => {
   return (
      <MemberCard
         img={item.img}
         name={item.name}
         title={item.title}
         key={item.id}
      />
   )
})

function BoardMembers() {
   return (
      <section className="board-member-section">
         <div className="board-member-hero">
            <img src={team} alt="board-member-hero" />
            <h1>Board Member</h1>
         </div>
         <h2 className="board-member-header">Deskan Board of Directors</h2>
         <div className="board-member-container"> {boardMemberCards}</div>
      </section>
   )
}

export default BoardMembers

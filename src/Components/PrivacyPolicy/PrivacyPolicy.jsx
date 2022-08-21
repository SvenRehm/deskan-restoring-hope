import React from "react"
import img from "../../Images/contact.jpg"
import AnimatePage from "../../Animations/AnimatePage"
import { MoreInfoHero, TosContainer } from "./PrivacyPolicy.Styles"
import { motion } from "framer-motion"
function PrivacyPolicy() {
   //    const container = {
   //       hidden: { opacity: 1 },
   //       show: {
   //          opacity: 1,
   //          transition: {
   //             delayChildren: 0.3,
   //             staggerChildren: 0.2,
   //          },
   //       },
   //    }

   //    const item = {
   //       hidden: { opacity: 0 },
   //       show: {
   //          opacity: 1,
   //          transition: {
   //             duration: 0.4,
   //          },
   //       },
   //    }
   return (
      <>
         <AnimatePage>
            <MoreInfoHero>
               <img src={img} alt="contact-hero" />

               <motion.h1
                  initial="hidden"
                  animate="visible"
                  variants={{
                     hidden: {
                        scale: 0.9,
                        opacity: 0,
                     },
                     visible: {
                        scale: 1,
                        opacity: 1,
                        transition: {
                           duration: 0.6,
                           delay: 0.4,
                        },
                     },
                  }}
               >
                  PrivacyPolicy
               </motion.h1>
            </MoreInfoHero>

            <TosContainer>
               <h1>Privacy Policy</h1>
               <p>
                  Your privacy is very important to us. Accordingly, we have
                  developed this Policy in order for you to understand how we
                  collect, use, communicate and disclose and make use of
                  personal information. The following outlines our privacy
                  policy. Before or at the time of collecting personal
                  information, we will identify the purposes for which
                  information is being collected. We will collect and use of
                  personal information solely with the objective of fulfilling
                  those purposes specified by us and for other compatible
                  purposes, unless we obtain the consent of the individual
                  concerned or as required by law. We will only retain personal
                  information as long as necessary for the fulfillment of those
                  purposes. We will collect personal information by lawful and
                  fair means and, where appropriate, with the knowledge or
                  consent of the individual concerned. Personal data should be
                  relevant to the purposes for which it is to be used, and, to
                  the extent necessary for those purposes, should be accurate,
                  complete, and up-to-date. We will protect personal information
                  by reasonable security safeguards against loss or theft, as
                  well as unauthorized access, disclosure, copying, use or
                  modification. We will make readily available to customers
                  information about our policies and practices relating to the
                  management of personal information. We are committed to
                  conducting our business in accordance with these principles in
                  order to ensure that the confidentiality of personal
                  information is protected and maintained.
               </p>
            </TosContainer>
         </AnimatePage>
      </>
   )
}

export default PrivacyPolicy

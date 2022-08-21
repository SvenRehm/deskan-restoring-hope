import React from "react"
import img from "../../Images/contact.jpg"
import AnimatePage from "../../Animations/AnimatePage"
import { MoreInfoHero, TosContainer } from "./PrivacyPolicy.Styles"
import { motion } from "framer-motion"

function TermsOfService() {
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
                  Term of Service
               </motion.h1>
            </MoreInfoHero>

            <TosContainer>
               <h1>Terms of Service</h1>
               <ol className="terms-of-service">
                  <li>
                     By accessing this web site, you are agreeing to be bound by
                     these web site Terms and Conditions of Use, all applicable
                     laws and regulations, and agree that you are responsible
                     for compliance with any applicable local laws. If you do
                     not agree with any of these terms, you are prohibited from
                     using or accessing this site. The materials contained in
                     this web site are protected by applicable copyright and
                     trade mark law.
                  </li>

                  <li>
                     Use License Permission is granted to temporarily download
                     one copy of the materials (information or software) on
                     Deskan Institute & Training, Inc. web site for personal,
                     non-commercial transitory viewing only. This is the grant
                     of a license, not a transfer of title, and under this
                     license you may not: modify or copy the materials; use the
                     materials for any commercial purpose, or for any public
                     display (commercial or non-commercial); attempt to
                     decompile or reverse engineer any software contained on
                     Deskan Institute & Training, Inc. web site; remove any
                     copyright ror other proprietary notations from the
                     materials; or transfer the materials to another person or
                     "mirror" the materials on any other server. This license
                     shall automatically terminate if you violate any of these
                     restrictions and may be terminated by Deskan Institute &
                     Training, Inc. at any time. Upon terminating your viewing
                     of these materials or upon the termination of this license,
                     you must destroy any downloaded materials in your
                     possession whether in electronic or printed format.
                  </li>
                  <li>
                     Disclaimer The materials on Deskan Institute & Training,
                     Inc. web site are provided "as is". Deskan Institute&
                     Training, Inc. makes no warranties, expressed or implied,
                     and hereby disclaims and negates all other warranties,
                     including without limitation, implied warranties or
                     conditions of merchantability, fitness for a particular
                     purpose, or non-infringement of intellectual property or
                     other violation of rights. Further, Deskan Institute &
                     Training, Inc.does not warrant or make any representations
                     concerning the accuracy, likely results, or reliability of
                     the use of the materials on its Internet web site or
                     otherwise relating to such materials or on any sites linked
                     to this site.
                  </li>
                  <li>
                     Limitations In no event shall Deskan Institute & Training,
                     Inc. or its suppliers be liable for any damages (including,
                     without limitation, damages for loss of data or profit, or
                     due to business interruption,) arising out of the use or
                     inability to use the materials on Deskan Institute &
                     Training, Inc. Internet site, even if Deskan Institute &
                     Training, Inc. or a Deskan Institute& Training, Inc.
                     authorized representative has been notified orally or in
                     writing of the possibility of such damage. Because some
                     jurisdictions do not allow limitations on implied
                     warranties, or limitations of liability for consequential
                     or incidental damages, these limitations may not apply to
                     you.
                  </li>
                  <li>
                     Revisions and Errata The materials appearing on Deskan
                     Institute & Training, Inc. web site could include
                     technical, typographical, or photographic errors. Deskan
                     Institute & Training, Inc. does not warrant that any of the
                     materials on its web site are accurate, complete, or
                     current. Deskan Institute & Training, Inc. may make changes
                     to the materials contained on its web site at any time
                     without notice. Deskan Institute & Training, Inc. does not,
                     however, make any commitment to update the materials.
                  </li>
                  <li>
                     Links Deskan Institute & Training, Inc. has not reviewed
                     all of the sites linked to its Internet web site and is not
                     responsible for the contents of any such linked site. The
                     inclusion of any link does not imply endorsement by Deskan
                     Institute & Training, Inc. of the site. Use of any such
                     linked web site is at the user's own risk.
                  </li>
                  <li>
                     Site Terms of Use Modifications Deskan Institute &
                     Training, Inc. may revise these terms of use for its web
                     site at any time without notice. By using this web site you
                     are agreeing to be bound by the then current version of
                     these Terms and Conditions of Use.
                  </li>
                  <li>
                     Governing Law Any claim relating to Deskan Institute &
                     Training, Inc. web site shall be governed by the laws of
                     the State of Georgia without regard to its conflict of law
                     provisions. General Terms and Conditions applicable to Use
                     of a Web Site.
                  </li>
               </ol>
            </TosContainer>
         </AnimatePage>
      </>
   )
}

export default TermsOfService

import { motion } from "framer-motion"

const animations = {
   initial: {
      opacity: 0,
   },
   animate: {
      opacity: 1,
   },
   exit: {
      opacity: 0,
   },
}

// const transition = { duration: 0.3, ease: [0.43, 0.13, 0.23, 0.96] }
const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }
const AnimatePage = ({ children }) => {
   return (
      <motion.div
         variants={animations}
         initial="initial"
         animate="animate"
         exit="exit"
         transition={transition}
      >
         {children}
      </motion.div>
   )
}
export default AnimatePage

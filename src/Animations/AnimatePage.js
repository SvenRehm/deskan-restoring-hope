import { motion } from "framer-motion"

const animations = {
   initial: { opacity: 0 },
   animate: {
      opacity: 1,

      transition: {
         duration: 0.4,
      },
   },
   exit: { opacity: 0 },
}

const AnimatePage = ({ children }) => {
   return (
      <motion.div
         variants={animations}
         initial="initial"
         animate="animate"
         // transition={{ duration: 0.2 }}
      >
         {children}
      </motion.div>
   )
}
export default AnimatePage

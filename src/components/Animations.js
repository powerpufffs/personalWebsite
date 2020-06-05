import React from "react"
import { motion } from "framer-motion"

export const Fade = (props) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 1 }}
  >
    {props.children}
  </motion.div>
)

export const Explode = ({ onComplete = (_) => _, ...props }) => {
  const [done, setDone] = React.useState(false)
  return (
    <motion.div
      animate={{ scale: done ? 10 : 1, opacity: done ? 0 : 1 }}
      transition={{ duration: 1 }}
      whileTap={{ scale: 0.9 }}
      onAnimationComplete={() => {
        done && onComplete()
      }}
      onTap={() => setDone(true)}
      transition={{ duration: 0.5 }}
    >
      {props.children}
    </motion.div>
  )
}

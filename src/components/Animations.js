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

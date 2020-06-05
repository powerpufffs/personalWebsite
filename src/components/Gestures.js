import React from "react"
import { css } from "@emotion/core"
import { motion } from "framer-motion"

export const Hover = ({ scale = 1.02, ...props }) => {
  return <motion.div whileHover={{ scale }}>{props.children}</motion.div>
}

export const Depress = ({ scale = 0.98, ...props }) => (
  <motion.div whileTap={{ scale }} {...props}>
    {props.children}
  </motion.div>
)

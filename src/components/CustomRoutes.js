import React from "react"
import { motion } from "framer-motion"
import { Fade } from "./Animations.js"

const createIdGenerator = () => {
  let i = 0
  return () => {
    i++
  }
}
const idGenerator = createIdGenerator()

/**
 * Route that fades in and out.
 *
 * @param component the component for the animation to be applied to.
 */
export const FadeRoute = ({ component, ...props }) => (
  <Fade key={idGenerator()}>{React.createElement(component, props)}</Fade>
)

import React from "react"
import { css } from "@emotion/core"
import { motion } from "framer-motion"
import { Row, Col } from "boostly-ui2"
import { Link } from "@reach/router"

const Orbit = ({ height, bg, ...props }) => {
  const randomInitialRotation = Math.random() * 360
  return (
    <motion.div
      css={css`
        position: absolute;
        text-align: center;
        height: ${height};
        background-color: ${bg};
        pointer-events: none;
      `}
      animate={{ rotate: 360 }}
      initial={{ rotate: randomInitialRotation }}
      transition={{ loop: Infinity, duration: 20, ease: "linear" }}
    >
      <Title
        whileHover={{
          scale: 1.5,
          transition: { duration: 0.5, ease: "linear" },
        }}
      >
        {props.children}
      </Title>
    </motion.div>
  )
}

const Title = props => (
  <h2
    css={css`
      pointer-events: auto;
    `}
  >
    {props.children}
  </h2>
)

const Home = () => {
  return (
    <div
      css={css`
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
      `}
    >
      <Orbit height="300px">Amazing</Orbit>
      <Orbit height="500px">Incredible</Orbit>
      <Col>
        <h1>Z Tai</h1>
        <Link to="../home">Normal</Link>
      </Col>
    </div>
  )
}

export default Home

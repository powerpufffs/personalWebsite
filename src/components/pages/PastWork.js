import React from "react"
import { css } from "@emotion/core"
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion"
import { Row, Col } from "boostly-ui2"
import { Link, navigate, Router, useLocation } from "@reach/router"
import { RoughNotation, RoughNotationGroup } from "react-rough-notation"
import { TitleSilly, Title } from "../Titles"

const data = [
  {
    id: "1",
    title: "Incredible India",
  },
  {
    id: "2",
    title: "Incredible ",
  },
  {
    id: "3",
    title: " India",
  },
  {
    id: "4",
    title: "Incredible India 2",
  },
  {
    id: "5",
    title: "Incredible India 3",
  },
  {
    id: "6",
    title: "Incredible 5",
  },
]

function isInteger(value) {
  return /^\d+$/.test(value)
}

const Mosaic = (props) => {
  const location = useLocation()
  const lastPath = location.pathname.substring(
    location.pathname.lastIndexOf("/") + 1
  )
  const id = isInteger(lastPath) ? lastPath : 0
  console.log(`id: ${id}`)
  return (
    <AnimateSharedLayout type="crossfade">
      <AnimatePresence>
        {id && <SelectedCard id={id} key="selected" />}
      </AnimatePresence>
      <motion.div
        css={css`
          display: flex;
          flex-direction: column;
          flex-wrap: wrap;
          background-color: black;
          height: 150vh;
        `}
      >
        {data.map((datum, i) => {
          return (
            <Card key={`chin+${datum.id}`} id={datum.id} title={datum.title} />
          )
        })}
      </motion.div>
    </AnimateSharedLayout>
  )
}

const Card = ({ id, title, ...props }) => {
  return (
    <>
      <motion.div
        onClick={() => navigate(`/past-work/${id}`)}
        css={css`
          width: auto;
          min-width: 250px;
          min-height: 300px;
          background-color: white;
          border-radius: 20px;
          color: black;
          margin: 12px 12px;
          padding: 20px 20px;
          box-sizing: border-box;
        `}
        layoutId={`card-id-${id}`}
      >
        <motion.h1 layoutId={`card-title-${id}`}>{title}</motion.h1>
        <motion.h2 layoutId={`card-support-${id}`}>Supporting text</motion.h2>
      </motion.div>
      {/* <Link
        to={`${id}`}
        css={css`
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        `}
      /> */}
    </>
  )
}

const SelectedCard = ({ id }) => {
  const { title } = data.find((datum) => datum.id === id)
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2, delay: 0.1 }}
        style={{ pointerEvents: "auto" }}
        css={css`
          z-index: 1;
          position: fixed;
          background: rgba(0, 0, 0, 0.8);
          will-change: opacity;
          top: 0;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 100%;
          max-width: 990px;
        `}
      >
        <Link
          to="/past-work"
          css={css`
            display: block;
            position: fixed;
            top: 0;
            bottom: 0;
            width: 100vw;
            left: 50%;
            transform: translateX(-50%);
          `}
        />
      </motion.div>
      <div
        css={css`
          top: 0;
          left: 0;
          right: 0;
          position: fixed;
          z-index: 1;
          overflow: hidden;
          padding: 40px 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        `}
      >
        <motion.div
          css={css`
            transform: none;
            opacity: 1;
            transform-origin: 50% 50% 0px;
            border-radius: 20px;
            height: 500px;
            max-width: 700px;
            overflow: hidden;
            pointer-events: none;
            background: white;
            width: 100%;
            margin: 0 auto;
            /* width: 50%;
            height: 60%;
            display: block;
            pointer-events: none;
            top: 0;
            left: 0;
            right: 0;
            position: fixed;
            background: white;
            z-index: 2;
            overflow: hidden;
            padding: 40px 0; */
          `}
          layoutId={`card-id-${id}`}
        >
          <motion.h1 layoutId={`card-title-${id}`}>{title}</motion.h1>
          <motion.h2 layoutId={`card-support-${id}`}>Supporting text</motion.h2>
        </motion.div>
      </div>
    </>
  )
}

const PastWork = () => {
  return (
    <Router>
      <Mosaic path="/*" />
    </Router>
  )
}

export default PastWork

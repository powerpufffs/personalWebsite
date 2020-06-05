import React from "react"
import { css } from "@emotion/core"
import { motion, AnimatePresence } from "framer-motion"
import { Row, Col } from "boostly-ui2"
import { Link, navigate, Router, useLocation } from "@reach/router"
import { TitleSilly, Title } from "../Titles"
import { Hover, Depress } from "../Gestures"

import Card from "../Card"

const data = [
  {
    id: "1",
    title: "BUNDL",
    subtitle: "Kickstarter iOS app",
    image: require("../../images/bundl-preview.png"),
  },
  {
    id: "2",
    title: "Calendly Notifier",
    subtitle: "Text notification service",
    image: require("../../images/calendly-preview.jpg"),
  },
  {
    id: "3",
    title: "poqet",
    subtitle: "Checkout Generator",
    image: require("../../images/poqet-preview.png"),
  },
  {
    id: "4",
    title: "Boostly",
    subtitle: "Restaurant Software",
    image: require("../../images/bundl-preview.png"),
  },
  {
    id: "5",
    title: "Off Campus Housing",
    subtitle: "University app feature",
    image: require("../../images/och-preview.jpeg"),
  },
  {
    id: "6",
    title: "",
    subtitle: "",
    image: require("../../images/bundl-preview.png"),
  },
]

function isInteger(value) {
  return /^\d+$/.test(value)
}

const Mosaic = (props) => {
  const [show, setShow] = React.useState(false)
  const location = useLocation()
  const lastPath = location.pathname.substring(
    location.pathname.lastIndexOf("/") + 1
  )
  const id = isInteger(lastPath) ? lastPath : 0

  React.useEffect(() => {
    setTimeout(() => setShow(true), 2000)
  }, [])

  React.useEffect(() => {
    console.log(`value changed to: ${show}`)
  }, [show])

  return (
    <div
      css={css`
        display: grid;
        grid-template-columns:
          minmax(1rem, 1fr)
          minmax(auto, 1200px)
          minmax(1rem, 1fr);
        grid-template-rows:
          minmax(auto, 100px)
          1fr;
        background-color: black;
        @media only screen and (min-width: 1224px) {
          /* Styles */
        }
      `}
    >
      {/* <AnimatePresence>
        {id && <SelectedCard id={id} key="selected" />}
      </AnimatePresence> */}
      <motion.div
        css={css`
          grid-column-start: 2;
          justify-self: center;
          align-self: center;
        `}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut" }}
      >
        <Title
          size={1}
          css={css`
            color: white;
          `}
        >
          my babies
        </Title>
      </motion.div>
      <motion.div
        css={css`
          grid-column-start: 2;
          grid-row-start: 2;
          display: flex;
          flex-flow: column;
          height: 110vh;
          margin-left: -8px; /* Adjustment for the gutter */
          @media only screen and (min-width: 768px) {
            flex-flow: column wrap;
            max-height: auto;
          }
        `}
      >
        <motion.ul
          css={css`
            display: contents;
          `}
          animate={show ? "show" : "hide"}
          variants={{
            show: {
              transition: { staggerChildren: 0.5, delayChildren: 0 },
            },
            hide: {
              transition: { staggerChildren: 0.1, staggerDirection: -1 },
            },
          }}
          initial="hide"
        >
          {data.map((datum, i) => {
            // const randomHeight = Math.random() * 6 * 80 + 200
            const heights = [320, 450, 280, 480, 350, 310]
            return (
              <Hover key={`chin+${datum.id}`}>
                <Depress>
                  <motion.li
                    css={css`
                      list-style: none;
                    `}
                    variants={{
                      show: {
                        y: 0,
                        opacity: 1,
                        transition: {
                          y: { stiffness: 1000, velocity: -100 },
                        },
                      },
                      hide: {
                        y: 50,
                        opacity: 0,
                        transition: {
                          y: { stiffness: 1000 },
                        },
                      },
                    }}
                    onAnimationComplete={() => {
                      console.log("hie")
                      !show && navigate(`/past-work/${datum.id}`)
                    }}
                  >
                    <Card
                      id={datum.id}
                      bgImage={datum.image}
                      title={datum.title}
                      subtitle={datum.subtitle}
                      height={`${heights[i]}px`}
                      onClick={() => setShow(false)}
                    />
                  </motion.li>
                </Depress>
              </Hover>
            )
          })}
        </motion.ul>
      </motion.div>
    </div>
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
        transition={{ duration: 0.5, delay: 0 }}
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
            min-height: 600px;
            max-width: 700px;
            overflow: hidden;
            pointer-events: none;
            background: white;
            width: 80%;
            margin: 0 auto;
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
      <Mosaic path="/all" default />
    </Router>
  )
}

export default PastWork

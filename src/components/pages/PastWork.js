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
    title: "BUNDL Kickstarter",
    subtitle: "iOS app",
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
    subtitle: "Checkout generator",
    image: require("../../images/bundl-preview.png"),
  },
  {
    id: "4",
    title: "Boostly",
    subtitle: "Restaurant tech",
    image: require("../../images/bundl-preview.png"),
  },
  {
    id: "5",
    title: "Off Campus Housing",
    subtitle: "University app feature",
    image: require("../../images/bundl-preview.png"),
  },
  {
    id: "6",
    title: "BUNDL Kickstarter",
    subtitle: "",
    image: require("../../images/bundl-preview.png"),
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
  return (
    <div
      css={css`
        display: grid;
        grid-template-columns:
          minmax(1rem, 1fr)
          minmax(auto, 1200px)
          minmax(1rem, 1fr);
        grid-template-rows:
          minmax(auto, 200px)
          1fr;
        background-color: black;
        @media only screen and (min-width: 1224px) {
          /* Styles */
        }
      `}
    >
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>
          {id && <SelectedCard id={id} key="selected" />}
        </AnimatePresence>
        <motion.div
          css={css`
            grid-column-start: 2;
            grid-row-start: 2;
            display: flex;
            flex-flow: column;
            max-height: 110vh;
            margin-left: -8px; /* Adjustment for the gutter */
            @media only screen and (min-width: 768px) {
              flex-flow: column wrap;
              max-height: auto;
            }
          `}
        >
          {data.map((datum, i) => {
            const randomHeight = Math.random() * 6 * 80 + 200
            console.log(randomHeight)
            return (
              <Card
                key={`chin+${datum.id}`}
                id={datum.id}
                bgImage={datum.image}
                title={datum.title}
                subtitle={datum.subtitle}
                height={`${randomHeight}px`}
              />
            )
          })}
        </motion.div>
      </AnimateSharedLayout>
    </div>
  )
}

const titleStyle = css`
  font-weight: 300;
`

const Card = ({ id, title, bgImage, subtitle, height = "500px", ...props }) => {
  return (
    <>
      <motion.div
        onClick={() => navigate(`/past-work/${id}`)}
        css={css`
          min-width: 280px;
          height: ${height};
          /* min-height: min(${height}, 30vh); */
          background-color: white;
          border-radius: 20px;
          color: black;
          margin: 12px 12px;
          padding: 20px 20px;
          box-sizing: border-box;
          background-image: url(${bgImage});
          background-size: cover;
          background-position: bottom;
          filter: brightness(150%);
          mask-image: linear-gradient(to top, hsla(0, 0%, 0%, 50%), white);
          mask-repeat: no-repeat;
          color: white;
        `}
        layoutId={`card-id-${id}`}
      >
        <Title size={1} css={titleStyle}>
          {title}
        </Title>
        <Title size={3} css={titleStyle}>
          {subtitle}
        </Title>
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

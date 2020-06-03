import React from "react"
import { css } from "@emotion/core"
import { Router, useLocation, navigate } from "@reach/router"
import { AnimatePresence, motion, AnimateSharedLayout } from "framer-motion"
import WebFont from "webfontloader"
import { TitleSilly, Title } from "../components/Titles"

import Home from "../components/pages/Home"
import PrettyHome from "../components/pages/FancyHome"
import PastWork from "../components/pages/PastWork"
import { FadeRoute } from "../components/CustomRoutes"

const globalCSS = css`
  h1,
  h2,
  h3 {
    margin: 0px;
    padding: 0px;
  }

  overflow: hidden;
`

const Transition = () => {
  return (
    <div
      css={css`
        height: 100vh;
      `}
    >
      <motion.div
        css={css`
          height: 100%;
          background: black;
          width: 100vw;
          display: flex;
          justify-content: center;
          align-items: center;
        `}
        key="opening"
        animate={{
          height: ["0%", "100%", "100%", "100%", "100%", "100%"],
          y: ["0%", "0%", "0%", "0%", "100%"],
        }}
        onAnimationComplete={() => navigate("home")}
        transition={{ type: "spring", duration: 2 }}
      >
        <motion.h1
          css={css`
            color: white;
          `}
          animate={{
            opacity: [0, 0, 1, 1, 0, 0],
          }}
          transition={{ duration: 2 }}
        >
          hello
        </motion.h1>
      </motion.div>
    </div>
  )
}

const App = () => {
  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ["Peachy Keen", "Righteous", "sans-serif"],
      },
    })
  }, [])
  const location = useLocation()
  return (
    <AnimatePresence exitBeforeEnter>
      <Router key={location.key} location={location} css={globalCSS}>
        <Transition path="/" />
        <FadeRoute path="home" component={Home} />
        <FadeRoute path="pretty" component={PrettyHome} />
        <FadeRoute path="past-work/*" component={PastWork} />
      </Router>
    </AnimatePresence>
  )
}

export default App

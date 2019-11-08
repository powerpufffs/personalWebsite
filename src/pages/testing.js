/** @jsx jsx */
import React from "react"
import { useSpring, animated, Keyframes } from "react-spring"
import { css, jsx } from "@emotion/core"

import { TitlePrimary, TitleSecondary } from "../Helpers/Titles"

const testing = () => {
  // const degrees = useSpring({ degrees: `360deg`, from: { degrees: `0deg` } })
  const props = useSpring({
    from: { transform: "rotate(0deg)" },
    to: async next => {
      while (true) {
        await next({ transform: `rotate(360deg)` })
      }
    },
    config: { mass: 1, tension: 170, friction: 170 },
  })

  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
      `}
    >
      <animated.div
        style={props}
        css={css`
          height: 100px;
          width: 100px;
        `}
      >
        <TitlePrimary>Random Title</TitlePrimary>
      </animated.div>
    </div>
  )
}

const Orbit = () => {
  return <animated.div></animated.div>
}

export default testing

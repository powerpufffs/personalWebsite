/**@jsx jsx*/
import React, { useState, useEffect } from "react"
import { css, jsx } from "@emotion/core"
import styled from "@emotion/styled"
import { useSpring, useTransition, a, config } from "react-spring"

import Orbit from "../components/Orbit"
import { TitlePrimary, TitleSecondary, Caption } from "../Helpers/Titles"

const Title2 = styled(TitleSecondary)`
  &:hover {
    transform: scale(1.1);
    color: hsl(0, 0%, 50%);
  }
`

const nice = () => {
  const [show, setShow] = useState(false)
  useEffect(() => {
    setTimeout(setShow(true), 2000)
  }, [])

  const transitions = useTransition(show, null, {
    from: { transform: "translate3d(0,-40px,0)", opacity: 0 },
    enter: { transform: "translate3d(0,0px,0)", opacity: 1 },
    leave: { transform: "translate3d(0,-40px,0)", opacity: 0 },
    config: config.slow,
  })

  return transitions.map(
    ({ item, key, props }) =>
      item && (
        <a.div
          style={props}
          css={css`
            position: relative;
            width: 100vw;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
          `}
        >
          <TitlePrimary>Isaac Z Tai</TitlePrimary>
          <Orbit radius={`400px`} duration={80} delay={30} reverse={true}>
            <Title2>Contact</Title2>
          </Orbit>
          <Orbit radius={`500px`} duration={90} delay={30}>
            <Title2>Mobile</Title2>
          </Orbit>
          <Orbit radius={`600px`} duration={50} delay={300} reverse={true}>
            <Title2>Web</Title2>
          </Orbit>
          <Orbit radius={`675px`} duration={40} delay={420}>
            <Title2>Other</Title2>
          </Orbit>
        </a.div>
      )
  )
}

export default nice

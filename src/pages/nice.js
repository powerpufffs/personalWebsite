/**@jsx jsx*/
import React, { useState, useEffect, useMemo } from "react"
import { css, jsx, cx } from "@emotion/core"
import styled from "@emotion/styled"
import Anilink from "gatsby-plugin-transition-link/AniLink"
import { navigate } from "gatsby"
import { useTransition, a, config, useSpring } from "react-spring"

import { setup, overrideLinks } from "../Helpers/styles"
import { Row, Col } from "boostly-ui2"
import Orbit from "../components/Orbit"
import { TitlePrimary, TitleSecondary, Caption } from "../Helpers/Titles"
import SquareIcon from "../components/SquareIcon"
import Switch from "../components/Switch"

const UIButton = styled.div`
  position: absolute;
  top: 18px;
  left: 10px;
  overflow: visible;
  pointer-events: none;
`
const Title2 = styled(TitleSecondary)`
  transition: 0.25s;
  &:hover {
    transform: scale(1.1);
    color: hsl(0, 0%, 50%);
  }
  pointer-events: all;
`
const Link = styled(Anilink)`
  ${overrideLinks};
  pointer-events: all;
  color: #21252b;
`

const AnimatedContent = ({ onClick }) => {
  const transitions = useTransition(true, null, {
    from: { transform: "translate3d(0,-40px,0)", opacity: 0 },
    enter: { transform: "translate3d(0,0px,0)", opacity: 1 },
    leave: {
      transform: "translate3d(0,-40px,0)",
      opacity: 0,
    },
    config: config.slow,
  })

  return transitions.map(
    ({ item, key, props }) =>
      item && (
        <a.div
          css={css`
            position: relative;
            width: 100vw;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
          `}
          style={props}
        >
          <Col x>
            <TitlePrimary>Isaac Z Tai</TitlePrimary>
            <Row
              y
              space="around"
              css={css`
                align-self: stretch;
              `}
            >
              <SquareIcon url={require("../images/LinkedinLogo.png")} />
              <SquareIcon url={require("../images/GitHubLogo.png")} />
              <SquareIcon url={require("../images/LinkedinLogo.png")} />
            </Row>
          </Col>
          <Orbit radius={`445px`} duration={60} delay={30} reverse={true}>
            <Title2 onClick={() => handleClick("/mobile")}>Contact</Title2>
          </Orbit>
          <Orbit radius={`525px`} duration={90} delay={30}>
            <Link paintDrip to={`/mobile`} hex="#fceb95" duration={0.5}>
              <Title2>Mobile</Title2>
            </Link>
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

const Nice = () => {
  const [show, setShow] = useState(false)
  const [destination, setDestination] = useState(null)
  const [isDarkMode, toggleDarkMode] = useState(false)
  const props = useSpring({
    backgroundColor: isDarkMode ? "darkgray" : `inherit`,
  })

  useEffect(() => {
    setShow(true)
  }, [])

  const theme = css`
    /* background-color: ${isDarkMode ? `darkgray` : `inherit`}; */
    pointer-events: none;
  `

  const handleClick = to => {
    setShow(false)
    setDestination(to)
  }

  const goTo = () => {
    navigate(destination)
  }

  const click = () => toggleDarkMode(prev => !prev)
  const elements = useMemo(() => <AnimatedContent />, [])

  return (
    <a.div css={theme} style={props}>
      <div
        css={css`
          position: absolute;
          top: 0;
          left: 0;
          pointer-events: none;
        `}
      >
        <Switch onClick={click} />
      </div>
      {elements}
    </a.div>
  )
}

export default Nice

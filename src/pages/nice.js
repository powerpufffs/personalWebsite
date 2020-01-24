/* eslint-disable no-unused-vars */
/**@jsx jsx*/
import React, { useState, useEffect, useMemo } from "react"
import { css, jsx, cx } from "@emotion/core"
import styled from "@emotion/styled"
import Anilink from "gatsby-plugin-transition-link/AniLink"
import { navigate, Link } from "gatsby"
import { useTransition, a, config, useSpring, useTrail } from "react-spring"

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
  cursor: pointer;
`

const AnimatedContent = ({ callback = () => {}, onClick }) => {
  const [show, setShow] = useState(true)
  const [destination, setDestination] = useState("/")

  const handleClick = dest => {
    setDestination(dest)
    setShow(false)
  }

  const transition = useTransition(
    <>
      <Col x>
        <TitlePrimary>Isaac Z Tai</TitlePrimary>
        <Caption
          href="/"
          css={css`
            cursor: pointer;
            pointer-events: all;
            &:hover {
              text-decoration: underline;
            }
          `}
          onClick={() => navigate("/")}
        >
          this is too much
        </Caption>
      </Col>
      <Orbit radius={`445px`} duration={60} delay={30} reverse={true}>
        <Title2 onClick={() => handleClick("/contact")}>Contact</Title2>
      </Orbit>
      <Orbit radius={`525px`} duration={90} delay={30}>
        <Title2 onClick={() => handleClick("/mobile")}>Mobile</Title2>
      </Orbit>
      <Orbit radius={`600px`} duration={50} delay={300} reverse={true}>
        <Title2 onClick={() => handleClick("/web")}>Web</Title2>
      </Orbit>
      <Orbit radius={`675px`} duration={40} delay={420}>
        <Title2 onClick={() => handleClick("/other")}>Other</Title2>
      </Orbit>
    </>,
    {
      from: { transform: "translate3d(0,-40px,0)", opacity: 0 },
      enter: { transform: "translate3d(0,0px,0)", opacity: 1, delay: 800 },
      leave: {
        // transform: "translate3d(0,-40px,0)",
        opacity: 0,
        // onRest: () => callback(destination),
      },
      config: config.slow,
    }
  )

  return transition(
    (values, item) =>
      show && (
        <a.div
          css={css`
            position: relative;
            width: 100vw;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: transparent;
          `}
          style={values}
        >
          {item}
        </a.div>
      )
  )
}

const socials = [
  [`LinkedinLogo.png`, `www.linkedin.com/in/ztai`],
  [`GitHubLogo.png`, `www.github.com/powerpufffs`],
]
const Nice = () => {
  const [isDarkMode, toggleDarkMode] = useState(false)
  const props = useSpring({
    backgroundColor: isDarkMode ? "#21252b" : `white`,
    color: isDarkMode ? "#cccccc" : "black",
  })
  const switchProps = useSpring({
    from: { transform: `translateX(-50px)`, opacity: 0 },
    to: { transform: `translateX(0px)`, opacity: 1 },
    delay: 1500,
  })
  const socialsTrail = useTrail(socials.length, {
    from: { opacity: 1, y: -200 },
    to: { opacity: 1, y: 0 },
    delay: 2000,
  })
  const theme = css`
    pointer-events: none;
  `
  const goTo = dest => {
    navigate(dest)
  }
  const elements = useMemo(() => {
    return <AnimatedContent callback={goTo} />
  }, [])

  return (
    <a.div css={theme} style={props}>
      <a.div
        css={css`
          position: absolute;
          top: 20px;
          left: 20px;
          pointer-events: none;
        `}
        style={switchProps}
      >
        <Switch onClick={() => toggleDarkMode(prev => !prev)} />
        <Col
          y
          space="around"
          css={css`
            margin-left: 10px;
            margin-top: 20px;
            align-self: stretch;
            height: 100px;
          `}
        >
          {socialsTrail.map(({ opacity, y }, i) => {
            const [imageUrl, url] = socials[i]
            return (
              <a.div
                style={{ opacity, transform: y.to(y => `translateY(${y}px)`) }}
              >
                <SquareIcon
                  url={require(`../images/${imageUrl}`)}
                  onClick={() => {
                    typeof window !== `undefined` &&
                      window.open(`https://${url}`)
                  }}
                />
              </a.div>
            )
          })}
        </Col>
      </a.div>
      {elements}
    </a.div>
  )
}

export default Nice

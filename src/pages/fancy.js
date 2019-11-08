/**@jsx jsx*/
import React from "react"
import { css, jsx } from "@emotion/core"
import { overrideLinks } from "../Helpers/styles"
import styled from "@emotion/styled"
import Anilink from "gatsby-plugin-transition-link/AniLink"

import { Col } from "boostly-ui2"
import { TitlePrimary, TitleSecondary, Caption } from "../Helpers/Titles"
import SVGLoader from "../components/SVGLoader"
import Orbit from "../components/Orbit"

const CenterContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f6fcff;
`
const Link = styled(Anilink)`
  ${overrideLinks};
  pointer-events: all;
  color: #21252b;
`
const HoverState = css`
  transition: 0.25s;
  &:hover {
    transform: scale(1.1);
    color: hsl(0, 0%, 50%);
  }
`
const web = () => {
  return (
    <>
      <CenterContainer>
        <Col x>
          <Orbit
            radius="400px"
            duration="10s"
            delay={`-${Math.random() * 20}s`}
          ></Orbit>
          <TitlePrimary>Isaac Z Tai</TitlePrimary>
          <Link
            fade
            to={`/`}
            duration={1}
            css={css`
              color: hsl(0, 0%, 40%);
              &:hover {
                text-decoration: underline;
              }
            `}
          >
            <Caption>Click here for plain view</Caption>
          </Link>
        </Col>
        <Orbit radius="400px" duration="10s" delay={`-${Math.random() * 20}s`}>
          <SVGLoader svg={require("../images/mobilePhone.svg")} />
          <Link fade to={`/testing`} hex="#000000" duration={0.5}>
            Testing
          </Link>
        </Orbit>
        <Orbit
          radius="525px"
          duration="20s"
          delay={`-${Math.random() * 20}s`}
          reverse="true"
        >
          <Link paintDrip to={`/mobile`} hex="#fceb95" duration={0.5}>
            <TitleSecondary css={HoverState}>iOS Projects</TitleSecondary>
          </Link>
        </Orbit>
        <Orbit radius="650px" duration="30s" delay={`-${Math.random() * 20}s`}>
          <Link paintDrip to={`/web`} hex="#fceb95" duration={0.5}>
            <TitleSecondary css={HoverState}>Web Projects</TitleSecondary>
          </Link>
        </Orbit>
        <Orbit
          radius="750px"
          duration="35s"
          delay={`-${Math.random() * 20}s`}
          reverse={true}
        >
          <Link paintDrip to={`/about`} hex="#fceb95" duration={0.5}>
            <TitleSecondary css={HoverState}>About</TitleSecondary>
          </Link>
        </Orbit>
      </CenterContainer>
    </>
  )
}

export default web

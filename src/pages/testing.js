/* eslint-disable no-unused-vars */
/** @jsx jsx */
import React from "react"
import { useSpring, animated } from "react-spring"
import { css, jsx } from "@emotion/core"
import styled from "@emotion/styled"

import { TitlePrimary, TitleSecondary } from "../Helpers/Titles"

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y proximity;
  overflow-y: scroll;
`
const ContentSection = styled.div`
  scroll-snap-align: start;
  height: 500px;
`

const testing = () => {
  // const degrees = useSpring({ degrees: `360deg`, from: { degrees: `0deg` } })
  const { degrees } = useSpring({
    from: { degrees: 0 },
    degrees: 360,
    config: { duration: 10000 },
    reset: true,
  })

  return (
    <Container>
      <animated.div
        style={{
          width: `100px`,
          height: `100px`,
          position: `absolute`,
          background: `black`,
          transform: degrees.interpolate(d => `rotate(${d}deg)`),
        }}
      >hello</animated.div>
      <ContentSection
        css={css`
          background-color: tomato;
        `}
      >
        First Section
      </ContentSection>
      <ContentSection
        css={css`
          background-color: rebeccapurple;
        `}
      >
        Second Section
      </ContentSection>
      <ContentSection
        css={css`
          background-color: gray;
        `}
      >
        Third Section
      </ContentSection>
      <ContentSection
        css={css`
          background-color: tomato;
        `}
      >
        First Section
      </ContentSection>
      <ContentSection
        css={css`
          background-color: rebeccapurple;
        `}
      >
        Second Section
      </ContentSection>
      <ContentSection
        css={css`
          background-color: gray;
        `}
      >
        Third Section
      </ContentSection>
      <ContentSection
        css={css`
          background-color: tomato;
        `}
      >
        First Section
      </ContentSection>
      <ContentSection
        css={css`
          background-color: rebeccapurple;
        `}
      >
        Second Section
      </ContentSection>
      <ContentSection
        css={css`
          background-color: gray;
        `}
      >
        Third Section
      </ContentSection>
      <ContentSection
        css={css`
          background-color: tomato;
        `}
      >
        First Section
      </ContentSection>
      <ContentSection
        css={css`
          background-color: rebeccapurple;
        `}
      >
        Second Section
      </ContentSection>
      <ContentSection
        css={css`
          background-color: gray;
        `}
      >
        Third Section
      </ContentSection>
    </Container>
  )
}

const Orbit = () => {
  return <animated.div></animated.div>
}

export default testing

/** @jsx jsx */
import React from "react"
import styled from "@emotion/styled"
import { css, jsx } from "@emotion/core"

import { Col, Row } from "boostly-ui2"
import { TitlePrimary, TitleSecondary } from "../Helpers/Titles"
import GifLoader from "../components/GifLoader"
import Paragraph from "../components/Paragraph"

const Container = styled.div`
  height: 100%;
  background: linear-gradient(to top, hsla(0, 0%, 0%, 0.05), hsla(0, 0%, 0%, 0));
  scroll-snap-type: y proximity;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Section = styled.section`
  min-height: 500px;
  width: 800px;
  scroll-snap-align: center;
`
const mobileSnap = () => {
  return (
    <Container>
      <TitlePrimary
        css={css`
          padding-top: 40px;
          scroll-snap-align: start;
        `}
      >
        Mobile Projects
      </TitlePrimary>
      <Section
        css={css`
          margin-top: 80px;
        `}
      >
        <Row>
          <GifLoader
            gif={require("../images/ochv2.gif")}
            still={require("../images/ochStill.png")}
            alt="Gif of new OCH feature"
            h={`448px`}
            w={`207px`}
            mt={`20px`}
            bs={true}
            as={`center`}
            css={css`
              min-width: 207px;
            `}
            shadow
          />
          <Col
            css={css`
              margin-top: 40px;
              margin-left: 60px;
            `}
          >
            <TitleSecondary>Off Campus Housing Feature</TitleSecondary>
            <Paragraph mt={`12px`}>
              Commissioned by the Off Campus Housing department to redesign +
              develop existing feature in the app.
            </Paragraph>
          </Col>
        </Row>
      </Section>
      <Section
        css={css`
          margin-top: 80px;
        `}
      >
        <Row>
          <Col
            css={css`
              margin-top: 40px;
              margin-right: 60px;
            `}
          >
            <TitleSecondary>CAAR Animations</TitleSecondary>
            <Paragraph mt={`12px`}>
              Created animations during a department-wide hackathon. Built on
              Kite Compositor, rendered natively as CARR files. Tons of fun.
            </Paragraph>
          </Col>
          <GifLoader
            gif={require("../images/yLoad.gif")}
            still={require("../images/yLoadStill.png")}
            alt="Gif of wheel spinning loading animation."
            h={`444.6px`}
            w={`250px`}
            mt={`20px`}
            bs={true}
            as={`center`}
            css={css`
              min-width: 207px;
            `}
            shadow
          />
        </Row>
      </Section>
      <Section
        css={css`
          margin-top: 80px;
        `}
      >
        <Row>
          <GifLoader
            gif={require("../images/ochv2.gif")}
            still={require("../images/ochStill.png")}
            alt="Gif of new OCH feature"
            h={`448px`}
            w={`207px`}
            mt={`20px`}
            bs={true}
            as={`center`}
            css={css`
              min-width: 207px;
            `}
            shadow
          />
          <Col
            css={css`
              margin-top: 40px;
              margin-left: 60px;
            `}
          >
            <TitleSecondary>Off Campus Housing Feature</TitleSecondary>
            <Paragraph mt={`12px`}>
              Commissioned by the Off Campus Housing department to redesign +
              develop existing feature in the app.
            </Paragraph>
          </Col>
        </Row>
      </Section>
      <Section
        css={css`
          margin-top: 80px;
        `}
      >
        <Row>
          <GifLoader
            gif={require("../images/ochv2.gif")}
            still={require("../images/ochStill.png")}
            alt="Gif of new OCH feature"
            h={`448px`}
            w={`207px`}
            mt={`20px`}
            bs={true}
            as={`center`}
            css={css`
              min-width: 207px;
            `}
            shadow
          />
          <Col
            css={css`
              margin-top: 40px;
              margin-left: 60px;
            `}
          >
            <TitleSecondary>Off Campus Housing Feature</TitleSecondary>
            <Paragraph mt={`12px`}>
              Commissioned by the Off Campus Housing department to redesign +
              develop existing feature in the app.
            </Paragraph>
          </Col>
        </Row>
      </Section>
    </Container>
  )
}

export default mobileSnap

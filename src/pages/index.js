/** @jsx jsx */
import React from "react"
import styled from "@emotion/styled"
import { css, jsx } from "@emotion/core"
import Anilink from "gatsby-plugin-transition-link/AniLink"

import { setup, overrideLinks } from "../Helpers/styles"
import { Row, Col } from "boostly-ui2"
import { TitlePrimary, TitleSecondary, Caption } from "../Helpers/Titles"
import Layout from "../components/Layout"

const Content = styled.div`
  grid-column: 2;
  pointer-events: all;
`
const Link = styled(Anilink)`
  ${overrideLinks};
`
const Index = ({ changeMode, ...props}) => {
  return (
    <Layout>
      <Content>
        <TitlePrimary mt={`40px`}>Isaac Z Tai</TitlePrimary>
        <Link
          fade
          to={`/nice`}
          duration={0.5}
          css={css`
            display: block;
            color: hsl(0, 0%, 40%);
            &:hover {
              text-decoration: underline;
            }
          `}
        >
          <Caption onClick={() => changeMode('nice')}>Click here if you can handle it</Caption>
        </Link>
        <Col mt={`30px`} space={`evenly`}>
          <Link paintDrip to={`/mobile`} hex="#fceb95" duration={0.5}>
            <TitleSecondary>iOS Projects</TitleSecondary>
          </Link>
          <Link paintDrip to={`/web`} hex="#419eeb" duration={0.5}>
            <TitleSecondary
              css={css`
                margin-top: 30px;
              `}
            >
              Web Projects
            </TitleSecondary>
          </Link>
        </Col>
      </Content>
    </Layout>
  )
}

export default Index

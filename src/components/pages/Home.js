import React from "react"
import { css } from "@emotion/core"
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion"
import { Row, Col } from "boostly-ui2"
import { Link, navigate } from "@reach/router"
import { RoughNotation, RoughNotationGroup } from "react-rough-notation"
import { TitleSilly, Title } from "../Titles"

const Spacer = ({ width, height }) => (
  <div
    css={css`
      width: ${width};
      height: ${height};
    `}
  />
)

const Home = (props) => {
  const [showAnnotations, setShowAnnotations] = React.useState(false)
  React.useEffect(() => {
    setTimeout(() => setShowAnnotations(true), 1000)
  }, [])

  const amazing = React.useMemo(() => (
    <RoughNotation type="underline" show={showAnnotations}>
      Amazing
    </RoughNotation>
  ))

  return (
    <div
      css={css`
        min-height: 100vh;
        display: grid;
        grid-template-columns:
          minmax(1.2rem, 1fr)
          minmax(auto, 57ch)
          minmax(1.2rem, 1fr);
      `}
    >
      <Col
        y
        x="end"
        css={css`
          grid-column-start: 2;
        `}
      >
        <TitleSilly size={1}>Z Tai</TitleSilly>
        <Spacer height="20px" />
        <Row>
          <Title onClick={() => navigate("../past-work")}>projects</Title>
          <Spacer width="20px" />
          <Title
            css={css`
              margin-left: 20px;
            `}
          >
            work
          </Title>
          <Spacer width="20px" />
          <Title
            css={css`
              margin-left: 20px;
            `}
          >
            contact
          </Title>
        </Row>
        <Link to="/pretty">Fancy</Link>
      </Col>
    </div>
  )
}

export default Home

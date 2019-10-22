/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'
import { Col } from 'boostly-ui2'
import FontLoader from '../Helpers/FontLoader'

const Layout = ({ bgShape, children }) => (
  <Col
    minHeight={`100vh`}
    p={3}
    css={css`
			display: grid;
      position: relative;
			grid-template-columns:
				minmax(1.2rem, 1fr)
				minmax(auto, 600px)
				minmax(1.2rem, 1fr);
      padding: 16px 0px;
      background-image: url("${bgShape}");
      background-repeat: repeat-x;
      background-attachment: fixed;
      /* background-position: center top; */
      background-color: #f6fcff;
      color: #212429;
      font-family: sans-serif;
    `}
  >
    <FontLoader />
		{ children }
  </Col>
)

export default Layout
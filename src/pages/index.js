/** @jsx jsx */
import React from 'react'
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'
import Anilink from 'gatsby-plugin-transition-link/AniLink'

import { setup, overrideLinks } from '../Helpers/styles'
import { Row, Col } from 'boostly-ui2'
import { TitlePrimary, TitleSecondary } from '../Helpers/Titles'
import Layout from '../components/Layout'

const Content = styled.div`
	grid-column: 2;
	font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`
const PaintLink = styled(Anilink)`
	${overrideLinks};
`
const index = () => {
  return (
    <Layout>
			<Content>
				<TitlePrimary mt={`40px`}>Isaac Z Tai</TitlePrimary>
				<Col mt={`30px`} space={`evenly`}>
					<PaintLink paintDrip
            to={`/mobile`}
            hex='#fceb95'
            duration={0.5}
					>
				<TitleSecondary>iOS Projects</TitleSecondary>
					</PaintLink>
					<PaintLink paintDrip
            to={`/web`}
            hex='#419eeb'
            duration={0.5}
					>
				<TitleSecondary css={css`margin-top: 30px;`}>Web Projects</TitleSecondary>
					</PaintLink>
				</Col>
			</Content>
		</Layout>
	)
}

export default index

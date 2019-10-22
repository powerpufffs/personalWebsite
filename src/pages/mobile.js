/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { Col, Row } from 'boostly-ui2'
import { TitlePrimary, TitleSecondary } from '../Helpers/Titles'
import Paragraph from '../components/Paragraph'
import Layout from '../components/Layout'
import GifLoader from '../components/GifLoader'
import BackButton from '../components/BackButton'

const mobile = () => {
	return (
		<Layout bgShape={require(`../images/whatsappBGLight.png`)}>
			<div css={css`
					grid-column: 2;
					backdrop-filter: blur(1.5px) brightness(97%);
					z-index: 2;
					padding: 32px;
					@media screen and (max-width: 500px) {
						padding: 12px;
					}
				`}
			>
				<BackButton>Home</BackButton>
				<TitlePrimary mt={`4px`}>
					Mobile Projects
				</TitlePrimary>
				<Col mt={`20px`}>
					<TitleSecondary>
						Off Campus Housing Feature
					</TitleSecondary>
					<Paragraph mt={`8px`}>
						Commissioned by the Off Campus Housing department to
						redesign + develop existing feature in the app.
					</Paragraph>
					<GifLoader 
						gif={require('../images/och.gif')} 
						alt="Gif of new OCH feature" 
						h={`444.6px`} 
						w={`250px`}
						mt={`20px`}
						bs={true}
						as={`center`}
					/>
					<TitleSecondary mt={`60px`}>
						Loading Animations
					</TitleSecondary>
					<Paragraph mt={`8px`}>
						Created animations during a departmnet-wide hackathon.
						Built on Kite Compositor, and rendered natively as CARR
						files. Tons of fun.
					</Paragraph>
					<GifLoader 
						gif={require('../images/yLoad.gif')} 
						alt="Gif of wheel spinning loading animation." 
						h={`444.6px`} 
						w={`250px`}
						mt={`20px`}
						bs={true}
						as={`center`}
					/>
					<GifLoader 
						gif={require('../images/cosmos.gif')} 
						alt="Gif of wheel spinning loading animation." 
						h={`444.6px`} 
						w={`250px`}
						mt={`20px`}
						bs={true}
						as={`center`}
					/>
					<GifLoader 
						gif={require('../images/wheel.gif')} 
						alt="Gif of wheel spinning loading animation." 
						h={`444.6px`} 
						w={`250px`}
						mt={`20px`}
						bs={true}
						as={`center`}
					/>
					<TitleSecondary mt={`60px`}>
						Y-Time Feature
					</TitleSecondary>
					<Paragraph mt={`8px`}>
						Revamped job timesheet feature to accept complex retroactive,
						edits and work order switching during a shift.
					</Paragraph>
				</Col>
			</div>
		</Layout>
	)
}

export default mobile

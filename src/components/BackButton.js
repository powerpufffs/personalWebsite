import React from 'react'
import styled from '@emotion/styled'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import { Base } from '../Helpers/Tools'
import { overrideLinks } from '../Helpers/styles'

const Back = styled(AniLink)`
	${overrideLinks};
	font-size: 18px;
	font-weight: normal;
	::before {
		content: '∆';
		display: inline-block;
		transform: rotate(-90deg) translatex(-1px);
		margin-right: 10px;
	}
	:hover {
		text-decoration: underline;
	}
`
const BackButton = ({ children }) => (
	<Back fade to="/" duration={1}>
		{ children }
	</Back>
)

export default BackButton

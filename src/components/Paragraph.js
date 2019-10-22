/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { Base } from '../Helpers/Tools'

const Paragraph = ({ children, ...props }) => (
	<Base 
		as="p" 
		css={css`
			font-size: 20px;
			color: #494f55;
		`} 
		{...props}
	>
		{children}
	</Base>
)

export default Paragraph

/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

const GifLoader = ({ 
	gif, 
	alt = "", 
	h, 
	w, 
	bs=false,
	mt,
	as,
}) => {
	return <
		img src={gif} 
		alt={alt} 
		height={h} 
		width={w} 
		css={css`
			margin-top: ${mt}; 
			box-shadow: ${bs ? '0 4px 30px hsla(0, 0%, 0%, 0.3), 0 5px 10px hsla(0, 0%, 0%, 0.1)' : 'none'};
			align-self: ${as};
		`}
	/>
}

export default GifLoader

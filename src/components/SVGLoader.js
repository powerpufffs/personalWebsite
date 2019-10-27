import React from 'react'
import styled from '@emotion/styled'

const SVGLoader = ({svg, h, w, className, alt, ...props}) => {
	const Container = styled.div``
	console.log(svg)
	return (
		<Container className="className">
			<img
				src={svg}
				alt={alt} 
				height={h} 
				width={w}
			/>
		</Container>
	)
}

export default SVGLoader

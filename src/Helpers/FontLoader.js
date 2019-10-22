import React, { useEffect } from 'react'

const FontLoader = () => {
	useEffect(() => {
		const Webfont = require('webfontloader')
		Webfont.load({
			google: { 
				families: [
					'Work+Sans:400,700', 'proxima nova', 'sans-serif'
				] 
			}
		})
	}, [])
	return <div />
}

export default FontLoader
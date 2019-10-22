import React, { useEffect } from 'react'
import Webfont from 'webfontloader'

const FontLoader = () => {
	useEffect(() => {
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
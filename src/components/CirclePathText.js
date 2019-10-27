/**@jsx jsx */
import React from "react"
import { css, jsx } from '@emotion/core'

const CirclePathText = ({ className, children }) => (
  <svg
    className="className"
    width="400px"
    height="300px"
    viewBox="0 0 437 437"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
		xmlnsXlink="http://www.w3.org/1999/xlink"
		fill="transparent"
  >
		<path
			d="M1,196.004211 C1,98.5937856 87.180025,0.533933534 196.862189,1.17865666 C306.544353,1.8297662 389,90.3965294 389,196.004211 C389,301.611893 302.906569,390.178657 196.862189,390.178657 C90.8178091,390.178657 1,308.576214 1,196.004211 Z"
			id="curve"
		></path>
		<text width="500" fill="black">
			<textPath xlinkHref="#curve">
				{children}
			</textPath>
		</text>
  </svg>
)

export default CirclePathText

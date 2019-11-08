/**@jsx jsx */
import React from "react"
import { css, jsx } from "@emotion/core"

const CirclePathText = ({ className, children }) => (
  <svg
    className={className}
    width="393px"
    height="393px"
    viewBox="0 0 393 393"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <rect
      id="Rectangle"
      fill="transparent"
      x="0"
      y="0"
      width="393"
      height="393"
    />
    <path
      id="curve"
      fill="transparent"
      d="M196.5,47 C306.200251,47 346.90004,136.523831 347.002437,196.5 C347.09996,256.476169 308.142618,347 197,347 C85.8573821,347 47.0999603,256.476169 46.998521,196.5 C46.9000397,136.523831 86.799749,47 196.5,47 Z"
    />
    <text width="393px" fill="black">
      <textPath xlinkHref="#curve">{children}</textPath>
    </text>
  </svg>
)

export default CirclePathText

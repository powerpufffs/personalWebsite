/** @jsx jsx */
import React from "react"
import { jsx, keyframes } from "@emotion/core"
import styled from "@emotion/styled"

const Orbit = ({ radius, duration, children, delay, reverse, isPlaying=true, ...props }) => {
  const OrbitAnimation = keyframes`
		100% {
			transform: rotate(360deg);
		}
	`
  const Orbit = styled.div`
    position: absolute;
    height: ${radius};
    width: auto;
    border-radius: 100%;
    text-align: center;
    pointer-events: none;
    animation: ${OrbitAnimation} ${duration} ${delay} linear infinite ${reverse && `reverse`} ${!isPlaying && `paused`};
  `
  return <Orbit {...props}>{children}</Orbit>
}

export default Orbit

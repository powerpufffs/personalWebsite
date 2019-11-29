/** @jsx jsx */
import React from "react"
import { useSpring, a } from "react-spring"
import { css, jsx } from "@emotion/core"

const Orbit = ({
  radius,
  duration,
  children,
  delay = 0,
  reverse = false,
  ...props
}) => {
  const { degrees } = useSpring({
    from: { degrees: 0, delay: -1 * delay * 1000 },
    to: async next => {
      while (1) {
        await next({ degrees: 360, reset: true, reverse: reverse })
      }
    },
    reverse: reverse,
    config: { duration: duration * 500 },
    reset: true,
  })
  return (
    <a.div
      css={css`
        position: absolute;
        height: ${radius};
        width: auto;
        text-align: center;
        pointer-events: none;
      `}
      style={{ transform: degrees.to(d => `rotate(${d}deg)`) }}
      {...props}
    >
      {children}
    </a.div>
  )
}

export default Orbit

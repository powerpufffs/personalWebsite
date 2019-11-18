/** @jsx jsx */
import React, { useState } from "react"
import { useSpring, a } from "react-spring"
import { css, jsx } from "@emotion/core"

const Switch = ({ h = 15, w = 60, onClick, ...rest }) => {
  const [isOn, toggle] = useState(false)
  const { marginLeft, back, front } = useSpring({
    marginLeft: isOn ? w * 0.5 : 0,
    back: isOn ? `#fefefe` : `#282c34`,
    front: isOn ? `#21252b` : `#7d7d7d`,
  })

  const handleClick = () => {
    toggle(prev => !prev)
    onClick && onClick()
  }

  return (
    <a.div
      css={css`
        /* background-color: ${isOn ? `#fefefe` : `#282c34`}; */
        height: ${h}px;
        width: ${w}px;
        border-radius: 12px;
        pointer-events: all;
        cursor: pointer;
        display: flex;
        align-items: center;
        overflow: visible;
      `}
      style={{ backgroundColor: back.interpolate(b => b) }}
      onClick={handleClick}
    >
      <a.div
        css={css`
          border-radius: 100%;
          /* background: ${isOn ? `#21252b` : `#7d7d7d`}; */
          height: 30px;
          width: 30px;
        `}
        style={{
          backgroundColor: front.interpolate(f => f),
          marginLeft: marginLeft.interpolate(m => `${m}px`),
        }}
      />
    </a.div>
  )
}

export default Switch

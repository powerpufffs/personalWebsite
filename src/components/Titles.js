import React from "react"
import { css } from "@emotion/core"

export const Title = ({ size, ...props }) => {
  const getComponent = (size) => {
    switch (size) {
      case 1:
        return "h1"
      case 2:
        return "h2"
      case 3:
        return "h3"
      default:
        return "h2"
    }
  }

  return React.createElement(getComponent(size), {
    ...props,
  })
}

export const TitleSilly = ({ children, ...props }) => {
  return (
    <Title
      css={css`
        font-family: Peachy Keen, fantasy;
      `}
      {...props}
    >
      {children}
    </Title>
  )
}

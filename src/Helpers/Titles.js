/**@jsx jsx*/
import React from "react"
import styled from "@emotion/styled"
import { css, jsx } from "@emotion/core"

import { setup } from "../Helpers/styles"
import { Base } from "../Helpers/Tools"
import BackButton from "../components/BackButton"

export const TitlePrimary = ({
  fontFamily = "inherit",
  children,
  ...props
}) => {
  const Primary = styled(Base)`
    font-size: 60px;
    font-weight: 300;
    font-family: sans-serif;
    text-align: left;
    font-family: ${fontFamily};
  `
  return (
    <Primary as="h1" {...props}>
      {children}
    </Primary>
  )
}

export const TitleSecondary = ({ children, ...props }) => {
  const Secondary = styled(Base)`
    font-size: 30px;
    font-weight: 300;
    font-family: sans-serif;
  `
  return (
    <Secondary as="h2" {...props}>
      {children}
    </Secondary>
  )
}

export const Caption = ({ children, ...props }) => {
  const Description = styled(Base)`
    font-size: 16px;
    font-weight: 300;
    font-family: sans-serif;
  `
  return (
    <Description as="h3" {...props}>
      {children}
    </Description>
  )
}

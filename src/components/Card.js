import React from "react"
import { css } from "@emotion/core"
import { Title } from "./Titles"
import { navigate } from "@reach/router"

const titleStyle = css`
  font-weight: 300;
`

const Spacer = () => (
  <div
    css={css`
      height: 8px;
    `}
  />
)

const Card = ({ title, bgImage, subtitle, height = "500px", ...props }) => {
  return (
    <>
      <div
        css={css`
            min-width: 280px;
            height: ${height};
            /* min-height: min(${height}, 30vh); */
            background-color: white;
            border-radius: 20px;
            color: black;
            margin: 12px 12px;
            padding: 20px 20px;
            box-sizing: border-box;
            background-image: url(${bgImage});
            background-size: cover;
            background-position: bottom;
            filter: brightness(100%);
            mask-image: linear-gradient(to top, transparent -100px, white);
            mask-repeat: no-repeat;
            color: white;
            text-shadow: 0px 4px 25px black;
            cursor: pointer;
          `}
        {...props}
      >
        <Title size={1} css={titleStyle}>
          {title}
        </Title>
        <Spacer />
        <Title size={3} css={titleStyle}>
          {subtitle}
        </Title>
      </div>
    </>
  )
}

export default Card

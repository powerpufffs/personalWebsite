/**@jsx jsx*/
import React, { useState, useEffect, useMemo } from "react"
import { css, jsx } from "@emotion/core"

const SquareIcon = ({ url, size = "40px", ...props }) => {
  return (
    <div
      css={css`
        background-image: url(${url});
        background-repeat: none;
        background-position: center;
        background-size: cover;
        height: ${size};
        width: ${size};
        pointer-events: all;
        border-radius: 8px;
        transition: 0.2s;
        &:hover{
          transform: scale(1.1);
        }
      `}
      {...props}
    />
  )
}

export default SquareIcon

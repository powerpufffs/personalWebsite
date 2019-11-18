/** @jsx jsx */
import React from "react"
import { css, jsx } from "@emotion/core"

import { setup } from "../Helpers/styles"

export const Base = ({
  className,
  children,
  mt = "none",
  m = "none",
  pt = "none",
  p = "none",
  ...props
}) => {
  return (
    <div
      className={className}
			css={css`
				${setup};
        margin: ${m};
        margin-top: ${mt};
        padding: ${p};
        padding-top: ${pt};
      `}
      {...props}
    >
      {children}
    </div>
  )
}

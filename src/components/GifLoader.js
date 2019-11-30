/** @jsx jsx */
import React, { useState } from "react"
import { css, jsx } from "@emotion/core"

const GifLoader = ({
  gif,
  alt,
  h,
  w,
  bs = false,
  mt,
  as,
  still,
  playing,
  toggle,
  ...rest
}) => {
  const [isPlaying, setPlay] = useState(false)
  const handler = () => {
    setPlay(prev => !prev)
  }
  return (
    <div
      role="button"
      tabIndex="0"
      // className={classNames('gif_player', { 'playing': playing })}
      css={css`
        position: relative;
        margin-top: ${mt};
        box-shadow: ${bs
          ? "0 4px 30px hsla(0, 0%, 0%, 0.3), 0 5px 10px hsla(0, 0%, 0%, 0.1)"
          : "none"};
        align-self: ${as};
        height: ${h};
        width: ${w};
        &::after {
          content: "GIF";
          opacity: ${isPlaying ? 0 : 1};
          position: absolute;
          width: 120px;
          height: 120px;
          left: calc(50% - 60px);
          top: calc(50% - 60px);
          border-radius: 50%;
          border: 2px dashed grey;
          font-size: 36px;
          line-height: 120px;
          letter-spacing: 2px;
          color: darkgray;
          text-align: center;
          background-color: rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(2px);
          transition: 0.5s ease-in-out;
        }
      `}
      onClick={handler}
      onKeyDown={handler}
    >
      <img
        css={css`
          height: 100%;
          width: 100%;
        `}
        {...rest}
        src={isPlaying ? gif || still : still || gif}
        alt={alt}
      />
      <img
        alt="The frame of a hypothetical iphone."
        css={css`
          position: absolute;
          top: -15px;
          left: -17px;
          height: 106.5%;
          width: 115%;
        `}
        src={require("../images/iphoneFrame.png")}
      />
    </div>
  )
}

export default GifLoader

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
  shadow,
  ...rest
}) => {
  const [isPlaying, setPlay] = useState(false)
  const handler = () => {
    setPlay(prev => !prev)
  }
  return (
    <div
      role="button"
      // className={classNames('gif_player', { 'playing': playing })}
      css={css`
        position: relative;
        border-radius: 20px;
        margin-top: ${mt};
        align-self: ${as};
        height: ${h};
        width: ${w};
        box-shadow: ${shadow && `0px 15px 40px rgba(0,0,0,0.5)`};
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
          border-radius: 20px;
        `}
        {...rest}
        src={isPlaying ? gif || still : still || gif}
        alt={alt}
      />
      <img
        alt="The frame of a hypothetical iphone."
        css={css`
          position: absolute;
          top: -14.5px;
          left: -16.5px;
          height: 106.5%;
          width: 116%;
          border-radius: 35px;
          /* background-color: red; */
        `}
        src={require("../images/iphoneXWhite.png")}
      />
    </div>
  )
}

export default GifLoader

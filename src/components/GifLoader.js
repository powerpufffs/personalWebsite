/** @jsx jsx */
import React, { useState } from 'react'
import { css, jsx } from '@emotion/core'

// const GifLoader = ({ 
// 	gif, 
// 	alt = "", 
// 	h, 
// 	w, 
// 	bs=false,
// 	mt,
// 	as,
// }) => {
// 	return <
// 		img src={gif} 
// 		alt={alt} 
// 		height={h} 
// 		width={w} 
// 		css={css`
// 			margin-top: ${mt}; 
// 			box-shadow: ${bs ? '0 4px 30px hsla(0, 0%, 0%, 0.3), 0 5px 10px hsla(0, 0%, 0%, 0.1)' : 'none'};
// 			align-self: ${as};
// 		`}
// 	/>
// }

const GifLoader = ({ 
	gif, 
	alt,
	h,
	w,
	bs=false,
	mt,
	as,
	still, 
	playing, 
	toggle, 
	...rest 
}) => {
	const[isPlaying, setPlay] = useState(false)
  return ( 
		<div
			// className={classNames('gif_player', { 'playing': playing })}
			css={css`
				position: relative;
				margin-top: ${mt}; 
				box-shadow: ${bs ? '0 4px 30px hsla(0, 0%, 0%, 0.3), 0 5px 10px hsla(0, 0%, 0%, 0.1)' : 'none'};
				align-self: ${as};
				&::after{
					content: 'GIF';
					opacity: ${isPlaying ? 0 : 1};
					position: absolute;
					width: 120px;
					height: 120px;
					margin-left: -25%;
					margin-top: -25%;
					left: 50%;
					top: 50%;
					border-radius: 50%;
					border: 2px dashed grey;
					font-size: 36px;
					line-height: 120px;
					letter-spacing: 2px;
					color: #gray;
					text-align: center;
					background-color: rgba(0, 0, 0, 0.1);
					backdrop-filter: blur(2px);
					transition: 0.5s ease-in-out;
				};
			`}
			onClick={() => setPlay(prev => !prev)}
		>
			{/* <div className="play_button" /> */}
			<img 
				{...rest} 
				src={isPlaying ? (gif || still) : (still || gif)} 
				alt={alt} 
				height={h} 
				width={w}
			/>
		</div>
	)}

export default GifLoader

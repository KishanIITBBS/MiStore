import React from 'react'
import '../styles/VideoCard.css'

const playButton = (
  <svg
    version='1.0'
    xmlns='http://www.w3.org/2000/svg'
    width='25'
    height='25'
    viewBox='0 0 225.000000 225.000000'
  >
    <g
      transform='translate(0.000000,225.000000) scale(0.100000,-0.100000)'
      fill='#fff'
    >
      <path
        d='M910 2181 c-87 -19 -205 -58 -263 -87 -85 -43 -210 -136 -284 -209
-425 -425 -427 -1097 -4 -1528 156 -159 361 -267 587 -306 81 -15 296 -15 364
0 243 50 422 142 574 293 302 299 403 733 265 1133 -37 106 -57 146 -127 250
-154 232 -416 404 -699 458 -107 21 -305 18 -413 -4z m241 -647 c178 -103 390
-225 471 -271 154 -87 208 -126 208 -148 0 -16 -37 -40 -240 -157 -91 -52
-253 -146 -360 -208 -489 -284 -461 -273 -471 -180 -8 86 -4 1134 5 1149 5 8
19 11 35 8 15 -3 173 -90 352 -193z'
      />
    </g>
  </svg>
)
const VideoCard = ({ image, name, index }) => {
  return (
    <div className='VideoCard' style={{ backgroundImage: `url(${image})` }}>
      <a href='#/'>{playButton} </a>
      <p>{name}</p>
    </div>
  )
}

export default VideoCard

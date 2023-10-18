import React from 'react'
import { Link } from 'react-router-dom'
import './Botones.css'
export function ButtonRedSocial ({ imgLogo, link }) {
  return (
    <div className='btn' >
      <Link to={link}>
        <img src={imgLogo} alt="" width='40' />
      </Link>
    </div>
  )
}
export function ButtonBack () {
  return (
    <div className='btn-back'>
      <Link to='/antiques'>
        <svg width="40" height="40">
          <path fill="#DD0426" transform="scale(0.078125 0.078125)" d="M253.641 12.6374C287.72 12.4124 321.025 18.8217 352.115 32.6666L370.25 41.2624C440.707 78.8823 489.356 150.694 497.714 230.079C499.155 243.76 499.668 254.983 498.747 268.984C490.52 394.094 385.842 496.99 259.124 497.239C231.232 497.315 206.206 493.532 179.464 484.885C82.1107 453.403 13.8378 360.156 13.5552 257.802L13.6936 241.635C20.1835 114.699 126.967 12.9936 253.641 12.6374Z" />
          <path fill="#DFDDB9" transform="scale(0.078125 0.078125)" d="M241.458 147.346C254.467 146.605 265.907 158.898 262.834 171.695C261.476 177.347 259.015 182.857 256.67 188.152L244.355 217.125C243.878 218.405 243.755 219.954 243.1 221.129L242.882 221.5C243.829 221.973 246.94 221.61 248.111 221.611L373.194 221.648C376.616 221.649 380.469 221.315 383.826 221.961C399.162 224.912 404.185 236.398 404.552 250.957C404.681 256.056 405.032 261.694 404.291 266.75C402.711 277.528 394.565 286.258 383.832 288.247C379.469 289.056 374.365 288.591 369.915 288.589L242.045 288.661C243.113 290.035 243.625 292.786 244.341 294.463L255.905 321.247C258.253 326.37 261.694 331.957 262.761 337.491L262.848 337.958C265.362 351.007 253.232 365.201 239.594 362.089L239.25 362.004C231.047 360.028 218.357 348.759 211.452 343.705L121.482 277.045C114.434 271.688 107.856 266.798 106.651 257.422C105.138 245.655 112.118 239.507 120.586 233.143L219.367 159.887C226.278 154.904 232.59 148.333 241.458 147.346Z" />
        </svg>
      </Link>
    </div>
  )
}

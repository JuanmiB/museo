import React from 'react'
import { REDES } from '../data/data'
import { ButtonRedSocial } from '../components/Botones'
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer'>
          <h2>Mis Redes !!!</h2>
        <div className='btnContainer' >
          <ButtonRedSocial imgLogo="../src/image/facebook-logo.png" link={REDES.facebook}/>
          <ButtonRedSocial imgLogo="../src/image/tik-tok-logo.png" link={REDES.tiktok}/>
        </div>
    </div>
  )
}

export default Footer

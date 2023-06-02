import React from 'react'
import "./sass/Home/Footer.scss"
import Image from 'next/image'
import TMDB from "./images/tmdb-logo.png"

const Footer = () => {
  return (
    <div className='footer-container'>
      <p>Developed with:</p>
      <div className='image-wrapper'><Image src={TMDB} alt='TMDB Logo' /></div>
      <p>The Vibecoder @ 2023</p>
    </div>
  )
}

export default Footer
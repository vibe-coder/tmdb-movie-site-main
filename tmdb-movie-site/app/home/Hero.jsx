import React from 'react'
import "../sass/Home/Hero.scss"
import IronMan from "../images/wallpaperflare.com_wallpaper (23).jpg"

const Hero = () => {
  return (
    <div className='hero-container'>
      <img src={IronMan} alt='Iron Man'/>
      <h1>Hero</h1>

    
    </div>
  )
}

export default Hero
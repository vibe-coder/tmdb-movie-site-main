import React from 'react'
import "../sass/Home/Hero.scss"
import IronMan from "../images/Iron-Man.jpg"
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='hero-container'>
      <Image className='backdrop_image' src={IronMan} alt='Iron Man' />
      
      <div className='item-wrapper'>
        <p>Welcome back!</p>
        <h1>MovieSapce</h1>
      </div>
     </div>
  )
}

export default Hero
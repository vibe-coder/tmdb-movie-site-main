import React from 'react'
import "../sass/Home/Hero.scss"
import IronMan from "../images/Iron-Man.jpg"
import Image from 'next/image'
import { IoChevronDownSharp } from "react-icons/io5";


// import KungFuPanda from "../images/kung-fu-panda.mp4"


const Hero = () => {
  return (
    <div className='hero-container'>
      <Image className='backdrop-image' src={IronMan} alt='Iron Man' />

      {/* <video autoPlay muted loop className="backdrop-video">         
        <source src="../images/kung-fu-panda.mp4" type="video/mp4"/>       
      </video> */}
      
      
      <div className='item-wrapper'>
        <p>Welcome back!</p>
        <h1>MovieSapce</h1>
        <h2>Unlimited movies, TV shows, and more.</h2>
        <button>Ready to explore?</button>
        <IoChevronDownSharp className='arrow-icon'/>
      </div>
     </div>
  )
}

export default Hero
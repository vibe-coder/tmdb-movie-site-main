import React from 'react'
import "../sass/Home/Hero.scss"
import BackDrop from "../images/backdrop-2.jpg"
import Image from 'next/image'
import { IoChevronDownSharp } from "react-icons/io5";


// import KungFuPanda from "../images/kung-fu-panda.mp4"


const Hero = () => {
  return (
    <div className='hero-container'>
      <Image priority={true} className='backdrop-image' src={BackDrop} alt='Iron Man' />

      {/* <video autoPlay muted loop className="backdrop-video">         
        <source src="../images/kung-fu-panda.mp4" type="video/mp4"/>       
      </video> */}
      
      
      <div className='item-wrapper'>
        <p>Welcome back!</p>
        <h1>MovieSpace</h1>
        <h2>Unlimited movies.</h2>
        <input className='search' placeholder='Search for movie'/>
        {/* <button>Ready to explore?</button> */}
        <IoChevronDownSharp className='arrow-icon'/>
      </div>
     </div>
  )
}

export default Hero
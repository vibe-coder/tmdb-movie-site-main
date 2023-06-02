import React from 'react'
import "../sass/Home/Movie-Slider.scss"
import IronMan from "../images/ironman-silver.jpg"
import Image from 'next/image'
import { IoChevronBackSharp } from "react-icons/io5";
import { IoChevronForwardSharp } from "react-icons/io5";


const MovieSlider = () => {
  return (
    <div className='slider-container'>
    <Image priority={true} className='backdrop_image' src={IronMan} alt='Iron Man' />
    
    <div className='item-wrapper'>
      <div className='left'><IoChevronBackSharp/></div>

      <div className='center'>
        <h1 className='now-showing'>Now Showing</h1>
        <h2 className='movie-title'>Iron Man</h2>
        <p className='movie-description'>When Tony Stark, an industrialist, is captured, he constructs a high-tech armoured suit to escape. Once he manages to escape, he decides to use his suit to fight against evil forces to save the world.</p>
        <p className='movie-date'>Realeased: 2023-05-17</p>
      </div>

      <div className='right'><IoChevronForwardSharp/></div>
    </div>
   </div>
  )
}

export default MovieSlider
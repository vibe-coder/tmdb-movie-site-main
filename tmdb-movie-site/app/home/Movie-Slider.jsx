import React from 'react'
import "../sass/Home/Movie-Slider.scss"
import IronMan from "../images/Iron-Man.jpg"
import Image from 'next/image'

const MovieSlider = () => {
  return (
    <div className='slider-container'>
    <Image className='backdrop_image' src={IronMan} alt='Iron Man' />
    
    <div className='item-wrapper'>
      <div className='left'>L</div>

      <div className='center'>
        <p>Now Showing</p>
        <h1>Iron Man</h1>
        <p className='movie-description'>When Tony Stark, an industrialist, is captured, he constructs a high-tech armoured suit to escape. Once he manages to escape, he decides to use his suit to fight against evil forces to save the world.</p>
      </div>

      <div className='right'>R</div>
    </div>
   </div>
  )
}

export default MovieSlider
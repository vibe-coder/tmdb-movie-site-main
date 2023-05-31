import React from 'react'
import "../sass/Home/Top-Rated.scss"
import Image from 'next/image'
import John from "../images/john.jpeg"

const TopRated = () => {
  return (
    <div className='top-rated-container'>
      <h1>Top Rated Movies</h1>

      <div className='top-rated-wrapper'>
      <div className='movie-wrapper-2'>
          <Image priority={true} className='poster-2' src={John} alt='Iron Man' />        
        </div>

        <div className='movie-wrapper-2'>
          <Image priority={true} className='poster-2' src={John} alt='Iron Man' />        
        </div>

        <div className='movie-wrapper-2'>
          <Image priority={true} className='poster-2' src={John} alt='Iron Man' />        
        </div>

        <div className='movie-wrapper-2'>
          <Image priority={true} className='poster-2' src={John} alt='Iron Man' />        
        </div>
                
        <div className='movie-wrapper-2'>
          <Image priority={true} className='poster-2' src={John} alt='Iron Man' />        
        </div>
                
        <div className='movie-wrapper-2'>
          <Image priority={true} className='poster-2' src={John} alt='Iron Man' />        
        </div>

        <div className='movie-wrapper-2'>
          <Image priority={true} className='poster-2' src={John} alt='Iron Man' />        
        </div>

        <div className='movie-wrapper-2'>
          <Image priority={true} className='poster-2' src={John} alt='Iron Man' />        
        </div>

        <div className='movie-wrapper-2'>
          <Image priority={true} className='poster-2' src={John} alt='Iron Man' />        
        </div>

        <div className='movie-wrapper-2'>
          <Image priority={true} className='poster-2' src={John} alt='Iron Man' />        
        </div>
                
        <div className='movie-wrapper-2'>
          <Image priority={true} className='poster-2' src={John} alt='Iron Man' />        
        </div>
                
        <div className='movie-wrapper-2'>
          <Image priority={true} className='poster-2' src={John} alt='Iron Man' />        
        </div>
      </div>
    </div>
  )
}

export default TopRated
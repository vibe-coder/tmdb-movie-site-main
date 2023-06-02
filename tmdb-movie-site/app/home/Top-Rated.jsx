import React from 'react'
import "../sass/Home/Top-Rated.scss"
import Image from 'next/image'
import John from "../images/john.jpeg"

const TopRated = () => {
  return (
    <div className='top-rated-container'>
      <h1>Top Rated</h1>

      <div className='top-rated-movies-wrapper'>
        <div className='top-rated-movie-wrapper'>
          <Image priority={true} className='top-rated-poster' src={John} alt='Iron Man' />        
        </div>

        <div className='top-rated-movie-wrapper'>
          <Image priority={true} className='top-rated-poster' src={John} alt='Iron Man' />        
        </div>

        <div className='top-rated-movie-wrapper'>
          <Image priority={true} className='top-rated-poster' src={John} alt='Iron Man' />        
        </div>

        <div className='top-rated-movie-wrapper'>
          <Image priority={true} className='top-rated-poster' src={John} alt='Iron Man' />        
        </div>

        <div className='top-rated-movie-wrapper'>
          <Image priority={true} className='top-rated-poster' src={John} alt='Iron Man' />        
        </div>

        <div className='top-rated-movie-wrapper'>
          <Image priority={true} className='top-rated-poster' src={John} alt='Iron Man' />        
        </div>

        <div className='top-rated-movie-wrapper'>
          <Image priority={true} className='top-rated-poster' src={John} alt='Iron Man' />        
        </div>

        <div className='top-rated-movie-wrapper'>
          <Image priority={true} className='top-rated-poster' src={John} alt='Iron Man' />        
        </div>

        <div className='top-rated-movie-wrapper'>
          <Image priority={true} className='top-rated-poster' src={John} alt='Iron Man' />        
        </div>

        <div className='top-rated-movie-wrapper'>
          <Image priority={true} className='top-rated-poster' src={John} alt='Iron Man' />        
        </div>

        <div className='top-rated-movie-wrapper'>
          <Image priority={true} className='top-rated-poster' src={John} alt='Iron Man' />        
        </div>

        <div className='top-rated-movie-wrapper'>
          <Image priority={true} className='top-rated-poster' src={John} alt='Iron Man' />        
        </div>

      </div>
    </div>
  )
}

export default TopRated
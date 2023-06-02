import React from 'react'
import Image from 'next/image'
import John from "../images/john.jpeg"
import "../sass/Home/Popular-Movies.scss"

const PopularMovies = () => {
  return (
    <div className='popular-movies-container'>
      <h1>Popular Movies</h1>
      
      <div className='popular-movies-wrapper'>
        <div className='popular-movie-wrapper'>
          <Image priority={true} className='popular-poster' src={John} alt='Iron Man' />        
        </div>

        <div className='popular-movie-wrapper'>
          <Image priority={true} className='popular-poster' src={John} alt='Iron Man' />        
        </div>
        <div className='popular-movie-wrapper'>
          <Image priority={true} className='popular-poster' src={John} alt='Iron Man' />        
        </div>

        <div className='popular-movie-wrapper'>
          <Image priority={true} className='popular-poster' src={John} alt='Iron Man' />        
        </div>

        <div className='popular-movie-wrapper'>
          <Image priority={true} className='popular-poster' src={John} alt='Iron Man' />        
        </div>

        <div className='popular-movie-wrapper'>
          <Image priority={true} className='popular-poster' src={John} alt='Iron Man' />        
        </div>

        <div className='popular-movie-wrapper'>
          <Image priority={true} className='popular-poster' src={John} alt='Iron Man' />        
        </div>

        <div className='popular-movie-wrapper'>
          <Image priority={true} className='popular-poster' src={John} alt='Iron Man' />        
        </div>

        <div className='popular-movie-wrapper'>
          <Image priority={true} className='popular-poster' src={John} alt='Iron Man' />        
        </div>

        <div className='popular-movie-wrapper'>
          <Image priority={true} className='popular-poster' src={John} alt='Iron Man' />        
        </div>

        <div className='popular-movie-wrapper'>
          <Image priority={true} className='popular-poster' src={John} alt='Iron Man' />        
        </div>

        <div className='popular-movie-wrapper'>
          <Image priority={true} className='popular-poster' src={John} alt='Iron Man' />        
        </div>

        <div className='popular-movie-wrapper'>
          <Image priority={true} className='popular-poster' src={John} alt='Iron Man' />        
        </div>

        <div className='popular-movie-wrapper'>
          <Image priority={true} className='popular-poster' src={John} alt='Iron Man' />        
        </div>

        <div className='popular-movie-wrapper'>
          <Image priority={true} className='popular-poster' src={John} alt='Iron Man' />        
        </div>
      </div>
    </div>
  )
}

export default PopularMovies;
import React from 'react'
import "../sass/Home/Upcoming-Movies.scss"
import Image from 'next/image'
import John from "../images/john.jpeg"

const UpcomingMovies = (prop) => {
  return (
    <div className='upcoming-container'>

      <h1>Upcoming</h1>

      <div className='upcoming-movies-wrapper'>
        <div className='upcoming-movie-wrapper'>
          <Image priority={true} className='upcoming-movie-poster' src={John} alt='Iron Man' />        
        </div>

        <div className='upcoming-movie-wrapper'>
          <Image priority={true} className='upcoming-movie-poster' src={John} alt='Iron Man' />        
        </div>

        <div className='upcoming-movie-wrapper'>
          <Image priority={true} className='upcoming-movie-poster' src={John} alt='Iron Man' />        
        </div>

        <div className='upcoming-movie-wrapper'>
          <Image priority={true} className='upcoming-movie-poster' src={John} alt='Iron Man' />        
        </div>

        <div className='upcoming-movie-wrapper'>
          <Image priority={true} className='upcoming-movie-poster' src={John} alt='Iron Man' />        
        </div>

        <div className='upcoming-movie-wrapper'>
          <Image priority={true} className='upcoming-movie-poster' src={John} alt='Iron Man' />        
        </div>

        <div className='upcoming-movie-wrapper'>
          <Image priority={true} className='upcoming-movie-poster' src={John} alt='Iron Man' />        
        </div>

        <div className='upcoming-movie-wrapper'>
          <Image priority={true} className='upcoming-movie-poster' src={John} alt='Iron Man' />        
        </div>

        <div className='upcoming-movie-wrapper'>
          <Image priority={true} className='upcoming-movie-poster' src={John} alt='Iron Man' />        
        </div>
        <div className='upcoming-movie-wrapper'>
          <Image priority={true} className='upcoming-movie-poster' src={John} alt='Iron Man' />        
        </div>
        <div className='upcoming-movie-wrapper'>
          <Image priority={true} className='upcoming-movie-poster' src={John} alt='Iron Man' />        
        </div>

        <div className='upcoming-movie-wrapper'>
          <Image priority={true} className='upcoming-movie-poster' src={John} alt='Iron Man' />        
        </div>

      </div>
    </div>
  )
}

export default UpcomingMovies
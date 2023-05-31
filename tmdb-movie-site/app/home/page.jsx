import React from 'react'
import "../sass/Home/Page.scss"
import Hero from './Hero'
import MovieSlider from './Movie-Slider'
import UpcomingMovies from './Upcoming-Movies'



const Page = () => {
  return (
    <div className='home-container'>
      <Hero/>
      <MovieSlider/>
      <UpcomingMovies/>
      <MovieSlider/>
    </div>
  )
}

export default Page;
import React from 'react'
import "../sass/Home/Page.scss"
import Hero from './Hero'
import MovieSlider from './Movie-Slider'
import UpcomingMovies from './Upcoming-Movies'
import TopRated from './Top-Rated'




const Page = () => {
  return (
    <div className='home-container'>
      <Hero/>
      <MovieSlider/>
      <UpcomingMovies/>
      <TopRated/>
    </div>
  )
}

export default Page;
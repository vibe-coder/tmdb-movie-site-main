import React from 'react'
import "../sass/Home/Page.scss"
import Hero from './Hero'
import MovieSlider from './Movie-Slider'

const Page = () => {
  return (
    <div className='home-container'>
      <Hero/>
      <MovieSlider/>
    </div>
  )
}

export default Page;
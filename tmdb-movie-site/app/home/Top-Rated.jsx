"use client"

import React from 'react'
import "../sass/Home/Top-Rated.scss"
import Image from 'next/image'
import John from "../images/john.jpeg"
import { useState, useEffect } from 'react'

const TopRated = () => {

  const [topRatedMovies, getTopRatedMovies] = useState([])

  const fetchTopRatedMovies = () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZjg4MjY0YTZiZTI2ZWRjODlhNzY5NTJiODM2Y2FmMCIsInN1YiI6IjY0NzBiYjdlNTQzN2Y1MDE0NzVmMWEwNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5kRWVCmYbyP86pKTuEuJAL4UuPTOpA0YpR2It5mTyWU'
      }
    };
    
    fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
      .then(response => response.json())
      .then(data => {
        const newTopRated = data.results.slice(0, -2)
        // console.log(newTopRated)
        getTopRatedMovies(newTopRated)
      })
      .catch(err => console.error(err));
  }

  useEffect(() => {
    fetchTopRatedMovies()
  }, [])

  let imgPref = "https://image.tmdb.org/t/p/w200/"

  return (
    <div className='top-rated-container'>
      <h1>Top Rated</h1>

      <div className='top-rated-movies-wrapper'>

        {
          topRatedMovies.map((topMovies) => {
            return(
              <div className='top-rated-movie-box' key={topMovies.id}>
                <Image priority={true} className='top-rated-poster' src={imgPref + topMovies.poster_path} alt='Iron Man' fill={true} sizes={100} />        
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default TopRated
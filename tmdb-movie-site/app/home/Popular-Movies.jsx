"use client"

import React from 'react'
import Image from 'next/image'
import John from "../images/john.jpeg"
import "../sass/Home/Popular-Movies.scss"
import { useState, useEffect } from 'react'

const PopularMovies = () => {

  const [popularMovies, getPopularMovies] = useState([])

  const fetchPopularMovies = () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZjg4MjY0YTZiZTI2ZWRjODlhNzY5NTJiODM2Y2FmMCIsInN1YiI6IjY0NzBiYjdlNTQzN2Y1MDE0NzVmMWEwNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5kRWVCmYbyP86pKTuEuJAL4UuPTOpA0YpR2It5mTyWU'
      }
    };
    
    fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
      .then(response => response.json())
      .then(data => {
        const newPopularMovies = data.results.slice(0, -2);
        console.log(newPopularMovies)
        getPopularMovies(newPopularMovies)
      })
      .catch(err => console.error(err));
  }

  useEffect(() =>{
    fetchPopularMovies()
  }, [])



  let imgPref = "https://image.tmdb.org/t/p/w200/"



  return (
    <div className='popular-movies-container'>
      <h1>Popular</h1>
      
      <div className='popular-movies-wrapper'>

        {
          popularMovies.map((popularMoviesData) => {
            return(
              <div className='popular-movie-box'>
                <Image priority={true} className='popular-poster' src={imgPref + popularMoviesData.poster_path} alt={popularMoviesData.original_title} fill={true} sizes={100} />        
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default PopularMovies;
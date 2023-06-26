"use client"

import React from 'react'
import "./Animation.scss"
import Image from 'next/image'
import { useState, useEffect } from 'react'
import backdrop from "../images/Animation/animation.jpg"
import Footer from '../Footer'

function page() {


  const [animationMovies, getAnimationMovies] = useState([])

  const fetchAnimationMovies = () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZjg4MjY0YTZiZTI2ZWRjODlhNzY5NTJiODM2Y2FmMCIsInN1YiI6IjY0NzBiYjdlNTQzN2Y1MDE0NzVmMWEwNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5kRWVCmYbyP86pKTuEuJAL4UuPTOpA0YpR2It5mTyWU'
      }
    };
    
    fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=28%2C12%2C16%2C878', options)
      .then(response => response.json())
      .then(data => {

        console.log(data)
        const animationMoviesResult = data.results.slice(0, -2);

        console.log(animationMoviesResult)

        getAnimationMovies(animationMoviesResult)

      })
      .catch(err => console.error(err));
  
  }

  useEffect(()=> {
    fetchAnimationMovies()
  }, [])
                    
  let imgPref = "https://image.tmdb.org/t/p/w200/"


  return (
    <>
      <div className='animation-container'>

        <div className='backdrop'>
          <div className='title-background'>
            <h1>Animation</h1>
          </div>
          <Image priority={true} className='backdrop-poster' src={backdrop} alt="backdrop" fill = {true} sizes={100} />        
        </div>


        <div className='animation-movies-wrapper'>

          {
            animationMovies.map((animationMovieData) => {
              return(
                <div className='animation-movie-box' key={animationMovieData.id}>
                  <Image priority={true} className='animation-poster' src={imgPref + animationMovieData.poster_path} alt={animationMovieData.original_title} fill={true} sizes={100} />        
                </div>
              )
            })
          }


        </div>
      </div>
      <Footer/>
    </>
  )
}

export default page
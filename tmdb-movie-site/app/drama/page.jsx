"use client"

import React from 'react'
import "./Drama.scss"
import Image from 'next/image'
import { useState, useEffect } from 'react'
import backdrop from "../images/Drama/drama.jpg"
import Footer from '../Footer'

function page() {


  const [dramaMovies, getDramaMovies] = useState([])

  const fetchDramaMovies = () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZjg4MjY0YTZiZTI2ZWRjODlhNzY5NTJiODM2Y2FmMCIsInN1YiI6IjY0NzBiYjdlNTQzN2Y1MDE0NzVmMWEwNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5kRWVCmYbyP86pKTuEuJAL4UuPTOpA0YpR2It5mTyWU'
      }
    };
    
    fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=18', options)
      .then(response => response.json())
      .then(data => {

        console.log(data)
        const dramaMoviesResult = data.results.slice(0, -2);

        console.log(dramaMoviesResult)

        getDramaMovies(dramaMoviesResult)

      })
      .catch(err => console.error(err));
  
  }

  useEffect(()=> {
    fetchDramaMovies()
  }, [])
                    
  let imgPref = "https://image.tmdb.org/t/p/w200/"


  return (
    <>
      <div className='drama-container'>

        <div className='backdrop'>
          <div className='title-background'>
            <h1>Drama</h1>
          </div>
          <Image priority={true} className='backdrop-poster' src={backdrop} alt="backdrop" fill = {true} sizes={100} />        
        </div>


        <div className='drama-movies-wrapper'>

          {
            dramaMovies.map((dramaMovieData) => {
              return(
                <div className='drama-movie-box' key={dramaMovieData.id}>
                  <Image priority={true} className='drama-poster' src={imgPref + dramaMovieData.poster_path} alt={dramaMovieData.original_title} fill={true} sizes={100} />        
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
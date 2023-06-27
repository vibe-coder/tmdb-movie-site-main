"use client"

import React from 'react'
import "./Comedy.scss"
import Image from 'next/image'
import { useState, useEffect } from 'react'
import backdrop from "../images/Comedy/comedy.jpeg"
import Footer from '../Footer'

function page() {


  const [comedyMovies, getComedyMovies] = useState([])

  const fetchComedyMovies = () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZjg4MjY0YTZiZTI2ZWRjODlhNzY5NTJiODM2Y2FmMCIsInN1YiI6IjY0NzBiYjdlNTQzN2Y1MDE0NzVmMWEwNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5kRWVCmYbyP86pKTuEuJAL4UuPTOpA0YpR2It5mTyWU'
      }
    };
    
    fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=35', options)
      .then(response => response.json())
      .then(data => {

        console.log(data)
        const comedyMoviesResult = data.results.slice(0, -2);

        console.log(comedyMoviesResult)

        getComedyMovies(comedyMoviesResult)

      })
      .catch(err => console.error(err));
  
  }

  useEffect(()=> {
    fetchComedyMovies()
  }, [])
                    
  let imgPref = "https://image.tmdb.org/t/p/w200/"


  return (
    <>
      <div className='comedy-container'>

        <div className='backdrop'>
          <div className='title-background'>
            <h1>Animation</h1>
          </div>
          <Image priority={true} className='backdrop-poster' src={backdrop} alt="backdrop" fill = {true} sizes={100} />        
        </div>


        <div className='comedy-movies-wrapper'>

          {
            comedyMovies.map((comedyMovieData) => {
              return(
                <div className='comedy-movie-box' key={comedyMovieData.id}>
                  <Image priority={true} className='comedy-poster' src={imgPref + comedyMovieData.poster_path} alt={comedyMovieData.original_title} fill={true} sizes={100} />        
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
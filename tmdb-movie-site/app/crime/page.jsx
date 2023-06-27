"use client"

import React from 'react'
import "./Crime.scss"
import Image from 'next/image'
import { useState, useEffect } from 'react'
import backdrop from "../images/Crime/crime.jpg"
import Footer from '../Footer'

function page() {


  const [crimeMovies, getCrimeMovies] = useState([])

  const fetchCrimeMovies = () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZjg4MjY0YTZiZTI2ZWRjODlhNzY5NTJiODM2Y2FmMCIsInN1YiI6IjY0NzBiYjdlNTQzN2Y1MDE0NzVmMWEwNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5kRWVCmYbyP86pKTuEuJAL4UuPTOpA0YpR2It5mTyWU'
      }
    };
    
    fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=80', options)
      .then(response => response.json())
      .then(data => {

        console.log(data)
        const crimeMoviesResult = data.results.slice(0, -2);

        console.log(crimeMoviesResult)

        getCrimeMovies(crimeMoviesResult)

      })
      .catch(err => console.error(err));
  
  }

  useEffect(()=> {
    fetchCrimeMovies()
  }, [])
                    
  let imgPref = "https://image.tmdb.org/t/p/w200/"


  return (
    <>
      <div className='crime-container'>

        <div className='backdrop'>
          <div className='title-background'>
            <h1>Crime</h1>
          </div>
          <Image priority={true} className='backdrop-poster' src={backdrop} alt="backdrop" fill = {true} sizes={100} />        
        </div>


        <div className='crime-movies-wrapper'>

          {
            crimeMovies.map((crimeMovieData) => {
              return(
                <div className='crime-movie-box' key={crimeMovieData.id}>
                  <Image priority={true} className='crime-poster' src={imgPref + crimeMovieData.poster_path} alt={crimeMovieData.original_title} fill={true} sizes={100} />        
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
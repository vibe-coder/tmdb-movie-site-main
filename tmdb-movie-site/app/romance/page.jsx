"use client"

import React from 'react'
import "../sass/Home/Movie-Genre.scss"
import Image from 'next/image'
import { useState, useEffect } from 'react'
import backdrop from "../images/Romance/romance.jpeg"
import Footer from '../Footer'

function page() {


  const [romanceMovies, getRomanceMovies] = useState([])

  const fetchRomanceMovies = () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZjg4MjY0YTZiZTI2ZWRjODlhNzY5NTJiODM2Y2FmMCIsInN1YiI6IjY0NzBiYjdlNTQzN2Y1MDE0NzVmMWEwNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5kRWVCmYbyP86pKTuEuJAL4UuPTOpA0YpR2It5mTyWU'
      }
    };
    
    fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=10749', options)
      .then(response => response.json())
      .then(data => {

        console.log(data)
        const romanceMoviesResult = data.results.slice(0, -2);

        console.log(romanceMoviesResult)

        getRomanceMovies(romanceMoviesResult)

      })
      .catch(err => console.error(err));
  
  }

  useEffect(()=> {
    fetchRomanceMovies()
  }, [])
                    
  let imgPref = "https://image.tmdb.org/t/p/w200/"


  return (
    <>
      <div className='genre-container'>

        <div className='backdrop'>
          <div className='title-background'>
            <h1>Romance</h1>
          </div>
          <Image priority={true} className='genre-poster' src={backdrop} alt="backdrop" fill = {true} sizes={100} />        
        </div>


        <div className='genre-movies-wrapper'>

          {
            romanceMovies.map((romanceMovieData) => {
              return(
                <div className='genre-movie-box' key={romanceMovieData.id}>
                  <Image priority={true} className='genre-poster' src={imgPref + romanceMovieData.poster_path} alt={romanceMovieData.original_title} fill={true} sizes={100} />        
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
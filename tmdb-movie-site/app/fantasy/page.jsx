"use client"

import React from 'react'
import "../sass/Home/Movie-Genre.scss"
import Image from 'next/image'
import { useState, useEffect } from 'react'
import backdrop from "../images/Fantasy/fantasy.jpg"
import Footer from '../Footer'

function page() {


  const [fantasyMovies, getFantasyMovies] = useState([])

  const fetchFantasyMovies = () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZjg4MjY0YTZiZTI2ZWRjODlhNzY5NTJiODM2Y2FmMCIsInN1YiI6IjY0NzBiYjdlNTQzN2Y1MDE0NzVmMWEwNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5kRWVCmYbyP86pKTuEuJAL4UuPTOpA0YpR2It5mTyWU'
      }
    };
    
    fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=14', options)
      .then(response => response.json())
      .then(data => {

        console.log(data)
        const fantasyMoviesResult = data.results.slice(0, -2);

        console.log(fantasyMoviesResult)

        getFantasyMovies(fantasyMoviesResult)

      })
      .catch(err => console.error(err));
  
  }

  useEffect(()=> {
    fetchFantasyMovies()
  }, [])
                    
  let imgPref = "https://image.tmdb.org/t/p/w200/"


  return (
    <>
      <div className='genre-container'>

        <div className='backdrop'>
          <div className='title-background'>
            <h1>Fantasy</h1>
          </div>
          <Image priority={true} className='genre-poster' src={backdrop} alt="backdrop" fill = {true} sizes={100} />        
        </div>


        <div className='genre-movies-wrapper'>

          {
            fantasyMovies.map((fantasyMovieData) => {
              return(
                <div className='genre-movie-box' key={fantasyMovieData.id}>
                  <Image priority={true} className='genre-poster' src={imgPref + fantasyMovieData.poster_path} alt={fantasyMovieData.original_title} fill={true} sizes={100} />        
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
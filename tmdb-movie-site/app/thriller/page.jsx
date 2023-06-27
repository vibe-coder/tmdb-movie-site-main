"use client"

import React from 'react'
import "../sass/Home/Movie-Genre.scss"
import Image from 'next/image'
import { useState, useEffect } from 'react'
import backdrop from "../images/Thriller/thriller.jpg"
import Footer from '../Footer'

function page() {


  const [thrillerMovies, getThrillerMovies] = useState([])

  const fetchThrillerMovies = () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZjg4MjY0YTZiZTI2ZWRjODlhNzY5NTJiODM2Y2FmMCIsInN1YiI6IjY0NzBiYjdlNTQzN2Y1MDE0NzVmMWEwNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5kRWVCmYbyP86pKTuEuJAL4UuPTOpA0YpR2It5mTyWU'
      }
    };
    
    fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=53', options)
      .then(response => response.json())
      .then(data => {

        console.log(data)
        const thrillerMoviesResult = data.results.slice(0, -2);

        console.log(thrillerMoviesResult)

        getThrillerMovies(thrillerMoviesResult)

      })
      .catch(err => console.error(err));
  
  }

  useEffect(()=> {
    fetchThrillerMovies()
  }, [])
                    
  let imgPref = "https://image.tmdb.org/t/p/w200/"


  return (
    <>
      <div className='genre-container'>

        <div className='backdrop'>
          <div className='title-background'>
            <h1>Thriller</h1>
          </div>
          <Image priority={true} className='genre-poster' src={backdrop} alt="backdrop" fill = {true} sizes={100} />        
        </div>


        <div className='genre-movies-wrapper'>

          {
            thrillerMovies.map((thrillerMovieData) => {
              return(
                <div className='genre-movie-box' key={thrillerMovieData.id}>
                  <Image priority={true} className='genre-poster' src={imgPref + thrillerMovieData.poster_path} alt={thrillerMovieData.original_title} fill={true} sizes={100} />        
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
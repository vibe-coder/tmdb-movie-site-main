"use client"

import React from 'react'
import "./Action.scss"
import Image from 'next/image'
import { useState, useEffect } from 'react'
import backdrop from "../images/action-backdrop.jpg"
import Footer from '../Footer'

function page() {


  const [actionMovies, getActionMovies] = useState([])

  const fetchActionMovies = () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZjg4MjY0YTZiZTI2ZWRjODlhNzY5NTJiODM2Y2FmMCIsInN1YiI6IjY0NzBiYjdlNTQzN2Y1MDE0NzVmMWEwNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5kRWVCmYbyP86pKTuEuJAL4UuPTOpA0YpR2It5mTyWU'
      }
    };
    
    fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=Action', options)
      .then(response => response.json())
      .then(data => {

        console.log(data)
        const actionMoviesResult = data.results.slice(0, -2);

        console.log(actionMoviesResult)

        getActionMovies(actionMoviesResult)

      })
      .catch(err => console.error(err));
  
  }

  useEffect(()=> {
    fetchActionMovies()
  }, [])
                    
  let imgPref = "https://image.tmdb.org/t/p/w200/"


  return (
    <>
      <div className='action-container'>

        <div className='backdrop'>
          <div className='title-background'>
            <h1>Action</h1>
          </div>
          <Image priority={true} className='backdrop-poster' src={backdrop} alt="backdrop" fill = {true} sizes={100} />        
        </div>


        <div className='action-movies-wrapper'>

          {
            actionMovies.map((actionMovieData) => {
              return(
                <div className='action-movie-box' key={actionMovieData.id}>
                <Image priority={true} className='action-poster' src={imgPref + actionMovieData.poster_path} alt={actionMovieData.original_title} fill={true} sizes={100} />        
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
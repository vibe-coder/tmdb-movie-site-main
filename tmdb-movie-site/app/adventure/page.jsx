"use client"

import React from 'react'
import "./Adventure.scss"
import Image from 'next/image'
import { useState, useEffect } from 'react'
import backdrop from "../images/action-backdrop.jpg"
import Footer from '../Footer'

function page() {


  const [adventureMovies, getAdventureMovies] = useState([])

  const fetchAdventureMovies = () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZjg4MjY0YTZiZTI2ZWRjODlhNzY5NTJiODM2Y2FmMCIsInN1YiI6IjY0NzBiYjdlNTQzN2Y1MDE0NzVmMWEwNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5kRWVCmYbyP86pKTuEuJAL4UuPTOpA0YpR2It5mTyWU'
      }
    };
    
    fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=5&sort_by=popularity.desc&with_genres=Adventure', options)
      .then(response => response.json())
      .then(data => {

        console.log(data)
        const adventureMoviesResult = data.results.slice(0, -2);

        console.log(adventureMoviesResult)

        getAdventureMovies(adventureMoviesResult)

      })
      .catch(err => console.error(err));
  
  }

  useEffect(()=> {
    fetchAdventureMovies()
  }, [])
                    
  let imgPref = "https://image.tmdb.org/t/p/w200/"


  return (
    <>
      <div className='adventure-container'>

        <div className='backdrop'>
          <div className='title-background'>
            <h1>Adventure</h1>
          </div>
          <Image priority={true} className='backdrop-poster' src={backdrop} alt="backdrop" fill = {true} sizes={100} />        
        </div>


        <div className='adventure-movies-wrapper'>

          {
            adventureMovies.map((adventureMovieData) => {
              return(
                <div className='adventure-movie-box' key={adventureMovieData.id}>
                  <Image priority={true} className='adventure-poster' src={imgPref + adventureMovieData.poster_path} alt={adventureMovieData.original_title} fill={true} sizes={100} />        
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
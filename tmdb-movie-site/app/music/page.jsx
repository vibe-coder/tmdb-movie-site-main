"use client"

import React from 'react'
import "../sass/Home/Movie-Genre.scss"
import Image from 'next/image'
import { useState, useEffect } from 'react'
import backdrop from "../images/Music/music.jpg"
import Footer from '../Footer'

function page() {


  const [musicMovies, getMusicMovies] = useState([])

  const fetchMusicMovies = () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZjg4MjY0YTZiZTI2ZWRjODlhNzY5NTJiODM2Y2FmMCIsInN1YiI6IjY0NzBiYjdlNTQzN2Y1MDE0NzVmMWEwNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5kRWVCmYbyP86pKTuEuJAL4UuPTOpA0YpR2It5mTyWU'
      }
    };
    
    fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=10402', options)
      .then(response => response.json())
      .then(data => {

        console.log(data)
        const musicMoviesResult = data.results.slice(0, -2);

        console.log(musicMoviesResult)

        getMusicMovies(musicMoviesResult)

      })
      .catch(err => console.error(err));
  
  }

  useEffect(()=> {
    fetchMusicMovies()
  }, [])
                    
  let imgPref = "https://image.tmdb.org/t/p/w200/"


  return (
    <>
      <div className='genre-container'>

        <div className='backdrop'>
          <div className='title-background'>
            <h1>Music</h1>
          </div>
          <Image priority={true} className='genre-poster' src={backdrop} alt="backdrop" fill = {true} sizes={100} />        
        </div>


        <div className='genre-movies-wrapper'>

          {
            musicMovies.map((musicMovieData) => {
              return(
                <div className='genre-movie-box' key={musicMovieData.id}>
                  <Image priority={true} className='genre-poster' src={imgPref + musicMovieData.poster_path} alt={musicMovieData.original_title} fill={true} sizes={100} />        
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
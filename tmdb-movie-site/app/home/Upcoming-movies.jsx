"use client"

import React from 'react'
import "../sass/Home/Upcoming-Movies.scss"
import Image from 'next/image'
import John from "../images/john.jpeg"
import {useState, useEffect} from "react"






const UpcomingMovies = () => {

  // {
  //   fetch(`https://api.themoviedb.org/3/movie/599?api_key=ef88264a6be26edc89a76952b836caf0`)
  //   .then(response => response.json())
  //   .then(json => {
      
  //     console.log(json.original_title)
  //     name = json.original_title
  //     orig = "https://image.tmdb.org/t/p/w200/";
  //     backdrop = orig + json.poster_path

  //   console.log(backdrop)

  //   })
  // }

  let API_KEY = "api_key=ef88264a6be26edc89a76952b836caf0"
  let ACCESS_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZjg4MjY0YTZiZTI2ZWRjODlhNzY5NTJiODM2Y2FmMCIsInN1YiI6IjY0NzBiYjdlNTQzN2Y1MDE0NzVmMWEwNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5kRWVCmYbyP86pKTuEuJAL4UuPTOpA0YpR2It5mTyWU"

  const [movies, getMovies] = useState([])

  let movieResult = [1, 2, 3]
  console.log

  
  const fetchMovies = () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZjg4MjY0YTZiZTI2ZWRjODlhNzY5NTJiODM2Y2FmMCIsInN1YiI6IjY0NzBiYjdlNTQzN2Y1MDE0NzVmMWEwNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5kRWVCmYbyP86pKTuEuJAL4UuPTOpA0YpR2It5mTyWU'
      }
    };
    
    fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
      .then(response => response.json())
      .then(data => {

        // movieResult = Object.entries(data.results)
        console.log(data.results);
        getMovies(data.results)
      })
      .catch(err => console.error(err));
  }

  useEffect(() => { 
    fetchMovies()
  }, [])

  let imgPref = "https://image.tmdb.org/t/p/w200/"

  return (
    <div className='upcoming-container'>

      <h1>Upcoming</h1>
      
      <div className='upcoming-movies-wrapper'>   
        {movies.map((movie) => {
           return (
                <div className="upcoming-movie" key={movie.id}>
                   <Image className='upcoming-movie-poster'  src={imgPref + movie.poster_path} width={120} height={150} alt={movie.original_title}/>
                </div>
           );
        })}
      </div>   
    </div>
  )
}

// "https://image.tmdb.org/t/p/w200//sC4Dpmn87oz9AuxZ15Lmip0Ftgr.jpg"
// {<Image priority={true} className='upcoming-movie-poster' src={`https://image.tmdb.org/t/p/w200/${movies.poster_path}`} width={200} height={200} alt={movies.original_title} />}
// {
//   <p>{movies.original_title}</p>
// }
// style={{objectFit: "cover"}}

export default UpcomingMovies
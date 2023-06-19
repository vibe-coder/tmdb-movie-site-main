"use client"

import React from 'react'
import "../sass/Home/Upcoming-Movies.scss"
import Image from 'next/image'
import John from "../images/john.jpeg"
import {useState, useEffect} from "react"
import { resolve } from 'styled-jsx/css'





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

  const [movies, getMovies] = useState([])
  
  const fetchMovies = () => {
    fetch(`https://api.themoviedb.org/3/movie/598?api_key=ef88264a6be26edc89a76952b836caf0`)
    .then(response => response.json())
    .then(data => {
      getMovies(data)
    })
  }

  useEffect(() => {
    fetchMovies()
  }, [])



  return (
    <div className='upcoming-container'>

      <h1>Upcoming</h1>

      <div className='upcoming-movies-wrapper'>
        
        <div className='upcoming-movie-wrapper'>
          <Image priority={true} className='upcoming-movie-poster' src={John} width={200} height={200} alt='Iron Man' />        
          {
            <p>{movies.original_title}</p>
          }
        </div>



      </div>
    </div>
  )
}

// "https://image.tmdb.org/t/p/w200//sC4Dpmn87oz9AuxZ15Lmip0Ftgr.jpg"

export default UpcomingMovies
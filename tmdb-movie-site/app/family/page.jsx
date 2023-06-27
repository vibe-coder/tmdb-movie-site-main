"use client"

import React from 'react'
import "./Family.scss"
import Image from 'next/image'
import { useState, useEffect } from 'react'
import backdrop from "../images/Family/family.jpg"
import Footer from '../Footer'

function page() {


  const [familyMovies, getFamilyMovies] = useState([])

  const fetchFamilyMovies = () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZjg4MjY0YTZiZTI2ZWRjODlhNzY5NTJiODM2Y2FmMCIsInN1YiI6IjY0NzBiYjdlNTQzN2Y1MDE0NzVmMWEwNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5kRWVCmYbyP86pKTuEuJAL4UuPTOpA0YpR2It5mTyWU'
      }
    };
    
    fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=10751', options)
      .then(response => response.json())
      .then(data => {

        console.log(data)
        const familyMoviesResult = data.results.slice(0, -2);

        console.log(familyMoviesResult)

        getFamilyMovies(familyMoviesResult)

      })
      .catch(err => console.error(err));
  
  }

  useEffect(()=> {
    fetchFamilyMovies()
  }, [])
                    
  let imgPref = "https://image.tmdb.org/t/p/w200/"


  return (
    <>
      <div className='family-container'>

        <div className='backdrop'>
          <div className='title-background'>
            <h1>Family</h1>
          </div>
          <Image priority={true} className='backdrop-poster' src={backdrop} alt="backdrop" fill = {true} sizes={100} />        
        </div>


        <div className='family-movies-wrapper'>

          {
            familyMovies.map((familyMovieData) => {
              return(
                <div className='family-movie-box' key={familyMovieData.id}>
                  <Image priority={true} className='family-poster' src={imgPref + familyMovieData.poster_path} alt={familyMovieData.original_title} fill={true} sizes={100} />        
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
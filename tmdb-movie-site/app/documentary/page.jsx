"use client"

import React from 'react'
import "./Documentary.scss"
import Image from 'next/image'
import { useState, useEffect } from 'react'
import backdrop from "../images/Documentary/documentary.webp"
import Footer from '../Footer'

function page() {


  const [documentaryMovies, getDocumentaryMovies] = useState([])

  const fetchDocumentaryMovies = () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZjg4MjY0YTZiZTI2ZWRjODlhNzY5NTJiODM2Y2FmMCIsInN1YiI6IjY0NzBiYjdlNTQzN2Y1MDE0NzVmMWEwNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5kRWVCmYbyP86pKTuEuJAL4UuPTOpA0YpR2It5mTyWU'
      }
    };
    
    fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=99', options)
      .then(response => response.json())
      .then(data => {

        console.log(data)
        const documentaryMoviesResult = data.results.slice(0, -2);

        console.log(documentaryMoviesResult)

        getDocumentaryMovies(documentaryMoviesResult)

      })
      .catch(err => console.error(err));
  
  }

  useEffect(()=> {
    fetchDocumentaryMovies()
  }, [])
                    
  let imgPref = "https://image.tmdb.org/t/p/w200/"


  return (
    <>
      <div className='documentary-container'>

        <div className='backdrop'>
          <div className='title-background'>
            <h1>Documentary</h1>
          </div>
          <Image priority={true} className='backdrop-poster' src={backdrop} alt="backdrop" fill = {true} sizes={100} />        
        </div>


        <div className='documentary-movies-wrapper'>

          {
            documentaryMovies.map((documentaryMovieData) => {
              return(
                <div className='documentary-movie-box' key={documentaryMovieData.id}>
                  <Image priority={true} className='documentary-poster' src={imgPref + documentaryMovieData.poster_path} alt={documentaryMovieData.original_title} fill={true} sizes={100} />        
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
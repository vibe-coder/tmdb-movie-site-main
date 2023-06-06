import React from 'react'
import "../sass/Home/Upcoming-Movies.scss"
import Image from 'next/image'
import John from "../images/john.jpeg"

const UpcomingMovies = () => {

  
let backdrop = ""

let orig =""
  return (
    <div className='upcoming-container'>

      <h1>Upcoming</h1>

      <div className='upcoming-movies-wrapper'>

        {
          fetch(`https://api.themoviedb.org/3/movie/599?api_key=ef88264a6be26edc89a76952b836caf0`)
          .then(response => response.json())
          .then(json => {
            
            orig = "https://image.tmdb.org/t/p/w200/";
            backdrop = orig + json.poster_path

          console.log(backdrop)

          })
        }
        
        <div className='upcoming-movie-wrapper'>
          <Image priority={true} className='upcoming-movie-poster' src={"https://image.tmdb.org/t/p/w200//sC4Dpmn87oz9AuxZ15Lmip0Ftgr.jpg"} width={200} height={200} alt='Iron Man' />        
        </div>

      </div>
    </div>
  )
}

export default UpcomingMovies
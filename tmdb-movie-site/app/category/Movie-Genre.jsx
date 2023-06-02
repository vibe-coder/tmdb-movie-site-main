import React from 'react'
import "../sass/Category/Movie-Genre.scss"
import Data from './Movie-Genre-Data'

const MovieGenre = (prop) => {
  return (
    <button className="genre">
    <Image className="genre-image" src={Data.img} alt="back drop"/>
    <div className="genre-category">
      <h1>{Data.name}</h1>
    </div>
  </button>
  )
}

export default MovieGenre;
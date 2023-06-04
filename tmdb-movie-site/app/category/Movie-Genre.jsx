import React from 'react'
import "../sass/Category/Movie-Genre.scss"
import Image from 'next/image'

const MovieGenre = (prop) => {
  return (
    <button className="genre">
       <Image className="genre-image" 
       src={prop.backdrop} 
       alt="back drop" 
       width={200} 
       height={200}/>
       <div className="genre-category">
         <h1>{prop.name}</h1>
       </div>
    </button>
  )
}

export default MovieGenre;
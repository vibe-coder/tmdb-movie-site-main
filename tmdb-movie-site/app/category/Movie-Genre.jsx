import React from 'react'
import "../sass/Category/Movie-Genre.scss"
import Image from 'next/image'
import action from "../images/animation.jpg"


const MovieGenre = (props) => {
  return (
    <button className="genre">
       <Image className="genre-image" 
       src= {require("" + props.img)}
       alt="back drop" 
       width={200} 
       height={200}/>
       <div className="genre-category">
         <h1>{props.name}</h1>
       </div>
    </button>
  )
}

export default MovieGenre;
"use client"

import React from 'react'
import "../sass/Category/Movie-Genre.scss"
import Image from 'next/image'
import action from "../images/animation.jpg"
import Data from './Movie-Genre-Data'
import MyImage from "../images/action.jpg"

import { useState } from 'react'


const MovieGenre = (props) => {

  const [isCollapse, setIsCollapse] = React.useState(true)


  return (
    <button onMouseMove={() => setIsCollapse(!isCollapse)} className="genre">
       <Image className="genre-image" 
       src= {MyImage}
       alt="back drop" 
       width={200} 
       height={200}/>
       {isCollapse && <div className="genre-category">
         <h1>{props.name}</h1>
       </div>}
    </button>
  )
}

export default MovieGenre;
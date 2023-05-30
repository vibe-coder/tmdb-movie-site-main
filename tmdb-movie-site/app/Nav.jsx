import React from 'react'
import "./sass/Nav.scss"

import {Raleway} from "next/font/google"

const Nav = () => {
  return (
    <div className='nav-container'>
      <div className='nav-wrapper'>
        <h1><span className='bold-logo'>Movie</span>Space</h1>
        <button tabIndex= "0" >Category</button>
      </div>
    </div>
  )
}

export default Nav
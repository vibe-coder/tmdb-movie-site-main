import React from 'react'
import "./sass/Nav.scss"

import {Raleway} from "next/font/google"

const raleway = Raleway({
  weight: '400',
  subsets: ['latin'],
});

const Nav = () => {
  return (
    <div className='nav-container'>
      <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;1,100&display=swap" rel="stylesheet"></link>
      <div className='nav-wrapper'>
        <h1 className={raleway.className}>MovieSpace</h1>
        <button>Category</button>
      </div>
    </div>
  )
}

export default Nav
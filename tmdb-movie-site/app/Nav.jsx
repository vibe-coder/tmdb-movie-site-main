import React from 'react'
import "./sass/Nav.scss"
import Link from "next/link"

import {Raleway} from "next/font/google"

const Nav = () => {
  return (
    <div className='nav-container'>
      <div className='nav-wrapper'>
        <Link className='logo' href="/"><p>MovieSpace</p></Link>
        {/* <input className='search' placeholder='Search'/> */}
        <Link className='category' href="./category" >Category</Link>
      </div>
    </div>
  )
}

export default Nav
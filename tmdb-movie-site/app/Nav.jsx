import React from 'react'
import "./sass/Nav.scss"
import Link from "next/link"

import {Raleway} from "next/font/google"

const Nav = () => {
  return (
    <div className='nav-container'>
      <div className='nav-wrapper'>
        <Link className='logo' href="/">MovieSpace</Link>
        <Link className='category' href="/" >Category</Link>
      </div>
    </div>
  )
}

export default Nav
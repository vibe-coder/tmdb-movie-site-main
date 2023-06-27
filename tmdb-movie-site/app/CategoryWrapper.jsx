"use client"


import React from 'react'
import "./sass/Home/CategoryList.scss"
import Link from 'next/link'


function CategoryList() {
  return (
    <div className='category-list-container'>
      <div className='black-box'><p>Hey</p></div>
      <p className='LinkWrapper'><Link href="./action" className='link'>Action</Link></p>
      <p className='LinkWrapper'><Link href="./adventure" className='link'>Adventure</Link></p>
      <p className='LinkWrapper'><Link href="./animation" className='link'>Animation</Link></p>
      <p className='LinkWrapper'><Link href="./comedy" className='link'>Comedy</Link></p>
      <p className='LinkWrapper'><Link href="./crime" className='link'>Crime</Link></p>
      <p className='LinkWrapper'><Link href="./documentary" className='link'>Documentary</Link></p>
      <p className='LinkWrapper'><Link href="./drama" className='link'>Drama</Link></p>
      <p className='LinkWrapper'><Link href="./family" className='link'>Family</Link></p>
      <p className='LinkWrapper'><Link href="./fantasy" className='link'>Fantasy</Link></p>
      <p className='LinkWrapper'><Link href="./history" className='link'>History</Link></p>
      <p className='LinkWrapper'><Link href="./horror" className='link'>Horror</Link></p>
      <p className='LinkWrapper'><Link href="./music" className='link'>Music</Link></p>
      <p className='LinkWrapper'><Link href="./mystery" className='link'>Mystery</Link></p>
      <p className='LinkWrapper'><Link href="./romance" className='link'>Romance</Link></p>
      <p className='LinkWrapper'><Link href="./science-fiction" className='link'>Science Fiction</Link></p>
      <p className='LinkWrapper'><Link href="./thriller" className='link'>Thriller</Link></p>
      <p className='LinkWrapper'><Link href="./war" className='link'>War</Link></p>
      <p className='LinkWrapper'><Link href="./western" className='link'>Western</Link></p>
    </div>
  )
}

export default CategoryList;

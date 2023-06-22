import React from 'react'
import "./sass/Home/CategoryList.scss"
import Link from 'next/link'


function CategoryList() {
  return (
    <div className='category-list-container'>
      <div className='black-box'><p>Hey</p></div>
      <p><Link href="./action" className='link'>Action</Link></p>
      <p><Link href="./action" className='link'>Adventure</Link></p>
      <p><Link href="./action" className='link'>Animation</Link></p>
      <p><Link href="./action" className='link'>Comedy</Link></p>
      <p><Link href="./action" className='link'>Crime</Link></p>
      <p><Link href="./action" className='link'>Documentary</Link></p>
      <p><Link href="./action" className='link'>Family</Link></p>
      <p><Link href="./action" className='link'>Fantasy</Link></p>
      <p><Link href="./action" className='link'>History</Link></p>
      <p><Link href="./action" className='link'>Horror</Link></p>
      <p><Link href="./action" className='link'>Music</Link></p>
      <p><Link href="./action" className='link'>Mystery</Link></p>
      <p><Link href="./action" className='link'>Romace</Link></p>
      <p><Link href="./action" className='link'>Science Fiction</Link></p>
      <p><Link href="./action" className='link'>Thriller</Link></p>
      <p><Link href="./action" className='link'>War</Link></p>
      <p><Link href="./action" className='link'>Western</Link></p>
    </div>
  )
}

export default CategoryList
import React from 'react'
import Footer from '../Footer'
import "../sass/Category/Page.scss"
import GenreSelector from './Genre-Selector'

const Page = () => {
  return (
    <div className='category-container'>
      <GenreSelector/>
    </div>
  )
}

export default Page
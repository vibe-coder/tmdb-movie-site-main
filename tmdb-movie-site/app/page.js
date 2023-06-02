import Footer from './Footer'
import Page from './home/page'
import Nav from './Nav'


export default function Home() {
  return (
      <div className='page-container'>
        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;500&display=swap" rel="stylesheet"/>
        <Nav/>
        <Page/>
        <Footer/>
      </div>
  )
}

import "../sass/Category/Genre-Selector.scss"
import MovieGenre from "./Movie-Genre";
import action from "../images/action.jpg"
import Data from "./Movie-Genre-Data";



const GenreSelector = () => {



  const GenreCard = Data.map((data) => {
    <MovieGenre name = {data.name} backdrop={data.img}/>
  })


  return (
    <div className='genre-container'>
      <div className="genre-wrapper">
        {GenreCard}
      </div>
    </div>
  )
}

export default GenreSelector;
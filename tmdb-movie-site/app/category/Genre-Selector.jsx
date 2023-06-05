import "../sass/Category/Genre-Selector.scss"
import MovieGenre from "./Movie-Genre";
import action from "../images/action.jpg"
import Data from "./Movie-Genre-Data";



const GenreSelector = () => {



  const GenreCard = Data.map((data) => {
    return(
      <MovieGenre name={data.name} backdrop={data.backdrop} width={200} height={200}/>
    )
    
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
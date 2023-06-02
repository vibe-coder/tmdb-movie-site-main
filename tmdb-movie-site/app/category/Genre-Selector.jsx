import "../sass/Category/Genre-Selector.scss"
import Image from "next/image";
import action from "../images/action.jpg"
import adventure from "../images/adventure.jpg"
import animation from "../images/animation.jpg"
import comedy from "../images/comedy.jpeg"
import crime from "../images/crime.jpg"
import documentary from "../images/documentary.webp"
import drama from "../images/drama.jpg"
import family from "../images/family.jpg"
import fantasy from "../images/fantasy.jpg"
import history from "../images/history.jpg"
import horror from "../images/horror.jpg"
import music from "../images/music.jpg"
import mystery from "../images/mystery.jpeg"
import romance from "../images/romance.jpeg"
import sciencefiction from "../images/science-fiction.jpg"
import thriller from "../images/thriller.jpg"
import war from "../images/war.jpg"
import western from "../images/western.jpg"


const GenreSelector = (prop) => {
  return (
    <div className='genre-container'>
      <div className="genre-wrapper">
        
        <button className="genre">
          <Image className="genre-image" src={action} alt="back drop"/>
          <div className="genre-category">
            <h1>ACTION</h1>
          </div>
        </button>

        {/* <button className="genre">
          <Image className="genre-image" src={adventure} alt="back drop"/>
          <div className="genre-category">
            <h1>ADVENTURE</h1>
          </div>
        </button>

        <button className="genre">
          <Image className="genre-image" src={animation} alt="back drop"/>
          <div className="genre-category">
            <h1>ANIMATION</h1>
          </div>
        </button>

        <button className="genre">
          <Image className="genre-image" src={comedy} alt="back drop"/>
          <div className="genre-category">
            <h1>COMEDY</h1>
          </div>
        </button>

        <button className="genre">
          <Image className="genre-image" src={crime} alt="back drop"/>
          <div className="genre-category">
            <h1>CRIME</h1>
          </div>
        </button>

        <button className="genre">
          <Image className="genre-image" src={documentary} alt="back drop"/>
          <div className="genre-category">
            <h1>DOCUMENTARY</h1>
          </div>
        </button>

        <button className="genre">
          <Image className="genre-image" src={drama} alt="back drop"/>
          <div className="genre-category">
            <h1>DRAMA</h1>
          </div>
        </button>

        <button className="genre">
          <Image className="genre-image" src={family} alt="back drop"/>
          <div className="genre-category">
            <h1>FAMILY</h1>
          </div>
        </button>

        <button className="genre">
          <Image className="genre-image" src={fantasy} alt="back drop"/>
          <div className="genre-category">
            <h1>FANTASY</h1>
          </div>
        </button>

        <button className="genre">
          <Image className="genre-image" src={history} alt="back drop"/>
          <div className="genre-category">
            <h1>HISTORY</h1>
          </div>
        </button>

        <button className="genre">
          <Image className="genre-image" src={horror} alt="back drop"/>
          <div className="genre-category">
            <h1>HORROR</h1>
          </div>
        </button>

        <button className="genre">
          <Image className="genre-image" src={music} alt="back drop"/>
          <div className="genre-category">
            <h1>MUSIC</h1>
          </div>
        </button>

        <button className="genre">
          <Image className="genre-image" src={mystery} alt="back drop"/>
          <div className="genre-category">
            <h1>MYSTERY</h1>
          </div>
        </button>

        <button className="genre">
          <Image className="genre-image" src={romance} alt="back drop"/>
          <div className="genre-category">
            <h1>ROMANCE</h1>
          </div>
        </button>

        <button className="genre">
          <Image className="genre-image" src={sciencefiction} alt="back drop"/>
          <div className="genre-category">
            <h1>SCIENCE FICTION</h1>
          </div>
        </button>

        <button className="genre">
          <Image className="genre-image" src={thriller} alt="back drop"/>
          <div className="genre-category">
            <h1>THRILLER</h1>
          </div>
        </button>

        <button className="genre">
          <Image className="genre-image" src={war} alt="back drop"/>
          <div className="genre-category">
            <h1>WAR</h1>
          </div>
        </button>

        <button className="genre">
          <Image className="genre-image" src={western} alt="back drop"/>
          <div className="genre-category">
            <h1>WESTERN</h1>
          </div>
        </button> */}

        
      </div>
    </div>
  )
}

export default GenreSelector;
import React from 'react'
import './Movie.css'
function MoviePoster(props) {
  const movie=props.iteam;
    return (
       <>
      
        <div className="container">
          <div className="inner-div1">
          <img src={movie.Poster } className="imeag" alt="Movie Poster"></img>
          </div>
          <div className="inner-div2">
          <h1 className="title">{movie.Title}</h1>
          <h6 className="detail">Actors -{movie.Actors}</h6>
          <h6 className="detail">Awards -{movie.Awards}</h6>
          <h6 className="detail">Writer -{movie.Writer}</h6>
          <h6 className="detail">Language -{movie.Language}</h6>
          <h6 className="detail">Runtime-{movie.Runtime}</h6>
          <h6 className="detail">Released -{movie.Released}</h6>
          <h6 className="detail">Country -{movie.Country}</h6>
          <h6 className="detail">detail-{movie.Plot}</h6>
          </div>
        </div>
             
 
       </>
    )
}

export default MoviePoster



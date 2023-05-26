import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Favbtn } from "../reducer/Favbtn";

export const MovieCard = ({ movie }) => {
  const navigate = useNavigate();
  return (
    <div className="movie-continer">
      <div className="movie-top">
        <Link to={`movie/${movie.id}`}> {movie.title} </Link>
        {/* <h2 onClick={() => navigate(`movie/${movie.id}`)}> */}
         
      </div>
      <div className="movie-bottom">
        <div className="imgcontainer">
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
        </div>
        <p>{movie.overview}</p>
      </div>  <Favbtn movie={movie}/>
    </div>
  );
};

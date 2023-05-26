import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../fetch/useFetch";
import { Favbtn } from "../reducer/Favbtn";

export const MovieInfo = () => {
  const { id } = useParams();
  const [data] = useFetch(`movie/${id}`);
  const backdrop = {
    backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${data?.backdrop_path})`,
  };
  console.log(data);
  return (
    <div className="movie-continer" style={backdrop}>
      <div className="movie-top">
        <h2>{data.title}</h2>
      </div>
      <div className="movie-bottom">
        <div className="imgcontainer">
          {/* <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} /> */}
        </div>
        <p>{data?.title}</p>
        {data?.genres?.map(itm=>(
          <p>{itm.name}</p>
        ))}
      </div>
    
    </div>
  );
};

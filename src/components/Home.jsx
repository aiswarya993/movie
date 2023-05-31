import React, { useContext, useEffect, useState } from "react";
import { useFetch } from "../fetch/useFetch";
import { MovieCard } from "./MovieCard";

import { Pagination } from "./Pagination";
import { AppContext } from "../context/UseContext";
export const Home = () => {
 
  const [tot, settot] = useState(1);
const {state:{page}}=useContext(AppContext)
  const [data, loading, error] = useFetch("movie/popular", { page });
  const { results, total_pages } = data;
// const [page, setpage] = useState(1);
useEffect(()=>{
  
})
  return (
    <div className="movie-bk">
      {loading && <p>loading</p>}
      {error && <p>{error}</p>} 

      {!loading &&

      
        !error &&
        results?.map((movie) => <MovieCard movie={movie} key={movie.id} />)}
      <Pagination
        page={page}
        tot={total_pages}
        settot={settot}
        // setpage={setpage}
      />
    </div>
  );
};

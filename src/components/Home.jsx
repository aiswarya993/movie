import React, { useState } from "react";
import { useFetch } from "../fetch/useFetch";
import { MovieCard } from "./MovieCard";

import { Pagination } from "./Pagination";
export const Home = () => {
  const [page, setpage] = useState(1);
  const [tot, settot] = useState(1);

  const [data, loading, error] = useFetch("movie/popular", { page });
  const { results, total_pages } = data;

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
        setpage={setpage}
      />
    </div>
  );
};

import React, { useContext } from "react";
import { AppContext } from "../context/UseContext";
import { MovieCard } from "../components/MovieCard";

export const Favorites = () => {
  const { state } = useContext(AppContext);
  console.log(state);
  return (
    <div>
      {state?.favorite?.map((movie) => (
        <MovieCard movie={movie} />
      ))}
    </div>
  );
};

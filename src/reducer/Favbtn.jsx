import React, { useContext } from "react";
import { AppContext } from "../context/UseContext";

import empty from '../assets/download.png'
import star from '../assets/downloadg.png'
export const Favbtn = ({ movie }) => {
  const { state, dispatch } = useContext(AppContext);
  let isfav = state.favorite.some((item) => item.id === movie.id);

  const handlefav = () => {{isfav?  dispatch({ type: "DEL_FAVORITE", payload: movie.id })  :
    dispatch({ type: "ADD_FAVORITE", payload: movie })};
  };
  return (
    <div>
      
      {!isfav ? <img src={star} className="fav"onClick={handlefav}/>:<img src={empty}onClick={handlefav} className="fav"/>}
    </div>
  );
};

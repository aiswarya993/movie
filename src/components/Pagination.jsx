import React, { useContext } from "react";
import { AppContext } from "../context/UseContext";

export const Pagination = ({ page, tot, setpage }) => {
  const{dispatch}=useContext(AppContext)
  const next = () => {
    // setpage((pre) => pre + 1);
    dispatch({type:"inc_page"})
  };
  const prev = () => {
    // setpage((pre) => pre - 1);
    dispatch({type:"DESC_page"})

  };
  return (
    <div className="pag">
      <button onClick={prev} disabled={page<=1?true:false}>prev</button>
      <p>
        page {page} of {tot}
      </p>
      <button onClick={next}>next</button>
    </div>
  );
};

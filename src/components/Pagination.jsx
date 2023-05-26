import React from "react";

export const Pagination = ({ page, tot, settot, setpage }) => {
  const next = () => {
    setpage((pre) => pre + 1);
  };
  const prev = () => {
    setpage((pre) => pre - 1);
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

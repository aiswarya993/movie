import React, { useEffect } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { Srch } from "./Srch";
export const Header = () => {
  return (
    <div className="header-container">
      <div className="header-left">
        
          <Link to="/">React Flix</Link>
        
        
          <Link to="/fav">Favorites</Link>
        
      </div> <div className="headr-right">
      <Srch/></div>
     
    </div>
  );
};

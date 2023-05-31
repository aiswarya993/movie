import React, { useContext } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { Srch } from "./Srch";
import { AppContext } from "../context/UseContext";

export const Header = () => {
  const {state} = useContext(AppContext);

  return (
    <div className="header-container">
      <div className="header-left">
        <Link to="/">React Flix</Link>

        <Link to="/fav">
          <div>
            <span>{state?.favorite?.length}</span> Favorites
          </div>
        </Link>
      </div>{" "}
      <div className="headr-right">
        <Srch />
      </div>
    </div>
  );
};

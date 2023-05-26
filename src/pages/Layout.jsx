import React from "react";
import { Header } from "../components/Header";
import { Main } from "../components/Main";
import { Footr } from "../components/Footr";

export const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <Main>{children}</Main>
      <Footr />
    </div>
  );
};

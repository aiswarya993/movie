import { createContext, useEffect, useReducer } from "react";
import { initialstate, reducer } from "../reducer/Appreducr";

export const AppContext = createContext();
export const AppcontextWrapper = ({ children }) => {
  let initilal = localStorage.getItem("appstate");
  let initialvale = initilal ? JSON.parse(initilal ): initialstate;
  const [state, dispatch] = useReducer(reducer, initialvale);
  const contextvalue = { state, dispatch };
  console.log(state);
  useEffect(() => {
    localStorage.setItem("appstate", JSON.stringify(state));
  }, [state]);

  return (
    <AppContext.Provider value={contextvalue}>{children}</AppContext.Provider>
  );
};

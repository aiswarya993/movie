import { createContext, useReducer } from "react";
import { initialstate, reducer } from "../reducer/Appreducr";

export const AppContext = createContext();
export const AppcontextWrapper = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialstate);
  const contextvalue = { state, dispatch };
  console.log(state);
  return (
    <AppContext.Provider value={contextvalue}>{children}</AppContext.Provider>
  );
};

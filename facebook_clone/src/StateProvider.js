import React from "react";
import { Children } from "react";
import { useContext, createContext, useReducer } from "react";

// prepare the datalayer
export const StateContext = createContext();

//wrap our app and provider the data
export const StateProvider = ({ reducer, initialState, children }) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};

//pull information from the data
export const useStateValue = () => useContext(StateContext);

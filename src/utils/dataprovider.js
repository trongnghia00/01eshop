import React, { createContext, useContext, useReducer } from "react";

export const MyContext = createContext();

export const MyProvider = ({reducer, initState, children}) => (
    <MyContext.Provider value={useReducer(reducer, initState)}>
        {children}
    </MyContext.Provider>
);

export const useDataValue = () => useContext(MyContext);
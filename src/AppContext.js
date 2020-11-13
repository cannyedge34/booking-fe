import React from "react";
export const AppContext = React.createContext({});

export const AppProvider = ({ children }) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "LOAD_BOOKINGS":
        return { ...state, bookings: action.bookings };
      case "SET_SPACE_FILTER":
        return { ...state, spaceFilter: action.spaceFilter };
      default:
        return state;
    }
  };
  const [appData, appDispatch] = React.useReducer(reducer, {
    bookings: [],
    spaceFilter: []
  });
  return (
    <AppContext.Provider value={{ appData, appDispatch }}>
      {children}
    </AppContext.Provider>
  );
};

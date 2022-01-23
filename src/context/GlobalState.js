import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
// Initial state of the component

const initialState = {
  transactions: [],
};

// create context

export const GlobalContext = createContext(initialState);

// provider

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // actions

  function deleteTransactions(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  function addTransactions(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransactions,
        addTransactions,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

const GlobalState = () => {
  return <></>;
};

export default GlobalState;

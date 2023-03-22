// @ts-nocheck
import React from 'react';
import listoftables from '../listoftables.json';

export const RestaurantContext = React.createContext({});

const RestaurantContextProvider = ({ children }) => {
  // eslint-disable-next-line no-unused-vars
  const tableList = listoftables;

  return <RestaurantContext.Provider value={{ tableList }}>{children}</RestaurantContext.Provider>;
};

export default RestaurantContextProvider;

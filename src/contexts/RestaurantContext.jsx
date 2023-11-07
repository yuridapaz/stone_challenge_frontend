import React, { useEffect, useState } from 'react';
import listoftables from '../listoftables.json';
// eslint-disable-next-line import/no-unresolved
import RefactoringTableList from '../utils/RefactoringTableList';

export const RestaurantContext = React.createContext({});

const RestaurantContextProvider = ({ children }) => {
  const [tableList, setTableList] = useState(() => {
    const data = localStorage.getItem('restaurantTables');
    return data ? JSON.parse(data) : RefactoringTableList(listoftables);
  });

  useEffect(() => {
    localStorage.setItem('restaurantTables', JSON.stringify(tableList));
  }, [tableList]);

  return (
    <RestaurantContext.Provider value={{ tableList, setTableList }}>
      {children}
    </RestaurantContext.Provider>
  );
};

export default RestaurantContextProvider;

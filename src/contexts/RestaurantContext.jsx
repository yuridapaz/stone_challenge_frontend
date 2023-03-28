// @ts-nocheck
import React, { useEffect, useState } from 'react';
import listoftables from '../listoftables.json';
import RefactoringTableList from '../utils/RefactoringTableList';
export const RestaurantContext = React.createContext({});

const RestaurantContextProvider = ({ children }) => {
  // Criei um estado onde posso fazer a busca da lista no localStorage do browser.
  const [tableList, setTableList] = useState(() => {
    // Aqui faço a busca no local storage
    const data = localStorage.getItem('restaurantTables');
    // Caso tenha alguma coisa salva no browser será mostrado, caso contrário o estado vai ser iniciado com a lista "tableListRefactored"
    return data ? JSON.parse(data) : RefactoringTableList(listoftables);
  });

  const [listOfClosedTables, setListOfClosedTables] = useState([]);

  useEffect(() => {
    // Quando o estado "tableList" for modificado ele vai ser salvo no local storage.
    localStorage.setItem('restaurantTables', JSON.stringify(tableList));
  }, [tableList]);

  return (
    <RestaurantContext.Provider value={{ tableList, tableList, setTableList }}>
      {children}
    </RestaurantContext.Provider>
  );
};

export default RestaurantContextProvider;

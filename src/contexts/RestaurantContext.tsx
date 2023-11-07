import React, { useEffect } from 'react';
import listoftables from '../listoftables.json';
import RefactoringTableList from '../utils/RefactoringTableList';
import { ITable } from '../types/types';

export type RestaurantContextType = {
  tableList: ITable[];
  setTableList: (table: ITable[]) => void;
};

export type Props = {
  children: React.ReactNode;
};

export const RestaurantContext =
  React.createContext<RestaurantContextType | null>(null);

const RestaurantContextProvider = ({ children }: Props) => {
  const [tableList, setTableList] = React.useState<ITable[]>(() => {
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

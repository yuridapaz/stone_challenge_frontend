import React, { useState } from 'react';
import products from '../products.json';

export const RestaurantContext = React.createContext([]);

const RestaurantContextProvider = ({ children }) => {
  // eslint-disable-next-line no-unused-vars
  const [tableList, setTableList] = useState(products);

  const totalBillPrice = (tableBillItens) => {
    if (tableBillItens.length === 0) return 0;
    return tableBillItens
      .map((item) => {
        return item.valor * item.quantidade;
      })
      .reduce((acc, p) => {
        return (acc = acc + p);
      });
  };

  return (
    <RestaurantContext.Provider value={{ tableList, totalBillPrice }}>
      {children}
    </RestaurantContext.Provider>
  );
};

export default RestaurantContextProvider;

import React, { useState } from 'react';
import { FullBodyContainer } from './App.styled';
import { HeaderComponent } from './components/Header';
import { TableCard } from './components/TableCard';
import products from './services/products.json';

function App() {
  const [tableList, setTableList] = useState(products);

  return (
    <FullBodyContainer>
      <HeaderComponent />

      <TableCard comanda={tableList[0]} />
    </FullBodyContainer>
  );
}

export default App;

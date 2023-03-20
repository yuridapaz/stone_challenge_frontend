import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RestaurantContextProvider from './contexts/RestaurantContext';
import IndexPage from './pages/IndexPage';
import TablePage from './pages/TablePage';

function App() {
  return (
    <RestaurantContextProvider>
      <Router>
        <Routes>
          <Route path='/' element={<IndexPage />} />
          <Route path='/:nomedamesa' element={<TablePage />} />
        </Routes>
      </Router>
    </RestaurantContextProvider>
  );
}

export default App;

import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';

import RestaurantContextProvider from './contexts/RestaurantContext';
import IndexPage from './pages/IndexPage';
import TablePage from './pages/TablePage';

function App() {
  return (
    <RestaurantContextProvider>
      <Router>
        <Routes>
          <Route
            path='/'
            element={<IndexPage />}
          />
          <Route
            path='/:tabletitle'
            element={<TablePage />}
          />
        </Routes>
      </Router>
    </RestaurantContextProvider>
  );
}

export default App;

import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Header } from './components';
import { Home, Cart, NotFound } from './pages';

export const SearchContext = React.createContext('');
console.log(SearchContext);

function App() {
  const [searchValue, setSearchValue] = React.useState('');
  console.log(searchValue);

  return (
    <div className="wrapper">
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </SearchContext.Provider>
    </div>
  );
}

export default App;

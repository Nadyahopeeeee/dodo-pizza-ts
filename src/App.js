import React, { useState, createContext } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Header } from './components';
import { Home, Cart, NotFound } from './pages';

export const SearchContext = createContext('');

function App() {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="wrapper">
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/cart" element={<Cart />} /> */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </SearchContext.Provider>
    </div>
  );
}

export default App;

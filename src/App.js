import React, { useState, createContext } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Header } from './components';
// import { Home, Cart, NotFound } from './pages';
import Cart from './pages/Cart';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Test from './pages/Test';

export const SearchContext = createContext('');

function App() {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="wrapper">
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/cart" element={<Cart />} />
            <Route path="/test" element={<Test />} />
            <Route path="/" element={<Home />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </div>
      </SearchContext.Provider>
    </div>
  );
}

export default App;

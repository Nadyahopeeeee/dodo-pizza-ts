import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { decrement, increment } from './redux/slices/filterSlice';
import { Route, Routes } from 'react-router-dom';

import { Header } from './components';
import { Home, Cart, NotFound } from './pages';

export const SearchContext = React.createContext('');

function App() {
  const [searchValue, setSearchValue] = React.useState('');

  // const filter = useSelector((state) => state.filter.value);
  // const dispatch = useDispatch();

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

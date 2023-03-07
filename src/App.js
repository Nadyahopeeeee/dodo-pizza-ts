import { Route, Routes } from 'react-router-dom';
import { Header } from './components';
import { Home, Cart, NotFound } from './pages';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/notfound" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header } from './components';
import { Home, Cart, NotFound } from './pages';

function App() {
  const [pizzas, setPizzas] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    fetch('http://localhost:3001/pizzas')
      .then((resp) => resp.json())
      .then((json) => {
        console.log(json);
        setPizzas(json);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home pizzas={pizzas} isLoading={isLoading} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/notfound" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

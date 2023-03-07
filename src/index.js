import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './scss/app.scss';

import App from './App';
// import { Home } from './pages';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App></App>
    </BrowserRouter>
    {/* <Routes>
        <Route path="/" element={<App />} />
      </Routes> */}
  </React.StrictMode>,
);

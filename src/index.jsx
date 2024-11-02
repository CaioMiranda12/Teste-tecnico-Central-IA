import React from 'react';
import ReactDOM from 'react-dom/client';

import { Header } from './components/Header';
import Home from './pages/Home';
import GlobalStyle from './styles/globalStyles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <Header />
    <Home />
  </React.StrictMode>,
);

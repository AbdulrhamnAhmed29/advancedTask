import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// Bootstrap CSS Style
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// context provider
import { CartProvider } from './component/contextapi/context';
// faveorite 
import { FavoriteProvider } from './component/favoriteContext/favoriteContext';







const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FavoriteProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </FavoriteProvider>

  </React.StrictMode>
);

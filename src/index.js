import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import ProductQuantityProvider from './context/ProductQuantity'

ReactDOM.render(
  <React.StrictMode>
	  <ProductQuantityProvider>
	    <App />
	  </ProductQuantityProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
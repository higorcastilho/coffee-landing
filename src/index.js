import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import ProductQuantityProvider from './context/ProductQuantity'
import OrderIdProvider from './context/OrderId'

ReactDOM.render(
  <React.StrictMode>
	  <ProductQuantityProvider>
	  	<OrderIdProvider>
	    	<App />
	  	</OrderIdProvider>
	  </ProductQuantityProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
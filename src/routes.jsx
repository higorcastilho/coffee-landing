import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Landing from './pages/Landing'

const Payment = lazy(() => import('./pages/Payment'))
const CheckoutStatus = lazy(() => import('./pages/CheckoutStatus'))
const renderLoader = () => <p>Loading</p>

function Routes() {
	return (
		<BrowserRouter>
			<Route path="/" exact component={Landing}/>
			<Suspense fallback={renderLoader()}>
				<Route path="/payment" component={Payment}/>
				<Route path="/checkout" component={CheckoutStatus}/>
			</Suspense>
		</BrowserRouter>
	)
}

export default Routes
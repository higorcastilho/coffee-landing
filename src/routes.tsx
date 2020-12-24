import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Landing from './pages/Landing'

const Payment = lazy(() => import('./pages/Payment'))
const CheckoutStatus = lazy(() => import('./pages/CheckoutStatus'))
const renderLoader = () => <p>Loading</p>
const a =4
const Routes = () => {
	return (
		<Router>
			<Route path="/" exact component={Landing}/>
			<Suspense fallback={renderLoader()}>
				<Route path="/payment" component={Payment}/>
				<Route path="/checkout" component={CheckoutStatus}/>
			</Suspense>
		</Router>
	)
}

export default Routes
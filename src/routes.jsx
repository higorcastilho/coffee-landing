import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Landing from './pages/Landing'

const Payment = lazy(() => import('./pages/Payment'))
const renderLoader = () => <p>Loading</p>

function Routes() {
	return (
		<BrowserRouter>
			<Route path="/" exact component={Landing}/>
			<Suspense fallback={renderLoader()}>
				<Route path="/payment" component={Payment}/>
			</Suspense>
		</BrowserRouter>
	)
}

export default Routes
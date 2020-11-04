import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Landing from './pages/Landing'
import Payment from './pages/Payment'

function Routes() {
	return (
		<BrowserRouter>
			<Route path="/" exact component={Landing}/>
			<Route path="/payment" component={Payment}/>
		</BrowserRouter>
	)
}

export default Routes
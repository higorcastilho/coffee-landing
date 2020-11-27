import React, { lazy, Suspense } from 'react'

import MainSection from '../MainSection'
import ProductDetailsSection from '../ProductDetailsSection'

import './styles.css'

const SecuritySection = lazy(() => import('../SecuritySection'))
const ProductPrice = lazy(() => import('../ProductPrice'))
const Footer = lazy(() => import('../Footer'))
const renderLoader = () => <p>Loading</p>


function Landing() {
	return (
		<div id="landing">
			<MainSection />
			<ProductDetailsSection />
			<Suspense fallback={renderLoader()}>
				<ProductPrice />
				<SecuritySection />
				<Footer />
			</Suspense>
		</div>
	)
}

export default Landing
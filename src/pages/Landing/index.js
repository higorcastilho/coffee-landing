import React from 'react'

import MainSection from '../MainSection'
import ProductDetailsSection from '../ProductDetailsSection'
import SecuritySection from '../SecuritySection'
import ProductPrice from '../ProductPrice'

import './styles.css'
//Agora seu café também é fonte de proteínas
function Landing() {
	return (
		<div id="landing">
			<MainSection />
			<ProductDetailsSection />
			<ProductPrice />
			<SecuritySection />
		</div>
	)
}

export default Landing
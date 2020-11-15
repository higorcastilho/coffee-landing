import React from 'react'

import Dna from '../../assets/images/dna.svg'
import CoffeeCup from '../../assets/images/coffee-cup.svg'
import Strong from '../../assets/images/strong.svg'

import './styles.css'

function ProductDetailsSection() {
	return (
	<div id="product-details-section">
		<main>
			<h1>Agora seu café também é fonte de proteínas</h1>
			<section>
				<img src={Dna} alt=""/>
				<img src={CoffeeCup} alt=""/>
				<img src={Strong} alt=""/>
			</section>
			<p> Cada porção de 30 gramas do Whey Coffee contém 22 gramas de proteína. </p>
		</main>
	</div>

	)
}

export default ProductDetailsSection
import React from 'react'

import Button from '../../components/Button'

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
					<img src={Dna} width="50" height="50" alt=""/>
					<img src={CoffeeCup} width="50" height="50" alt=""/>
					<img src={Strong} width="50" height="50" alt=""/>
				</section>
				<p> Cada porção de 30 gramas do Whey Coffee contém 22 gramas de proteína. </p>
				<h2>Por apenas</h2>
				<div id="product-details-price">
					<div id="currency-symbol">R$</div>
					<div id="integer-fraction">49</div>
					<div id="decimal-fraction">,90</div>
				</div>
				<div id="details-button">
					<Button route="/payment" name="Fazer pedido"/>
				</div>
			</main>
		</div>
	)
}

export default ProductDetailsSection
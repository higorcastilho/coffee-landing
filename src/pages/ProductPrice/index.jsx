import React from 'react'

import WheyCoffee from '../../assets/images/whey_coffee.webp'
import Workout from '../../assets/images/workout.svg'
import Running from '../../assets/images/running.svg'

import './styles.css'

function ProductPrice() {
	return (
	<div id="product-price-section">
		<main>
			<img id="product-float-left" src={WheyCoffee} width="200" height="182" alt=""/>
			<article>
				<div id="text-workout-undraw">
					<h4> + Força</h4>
					<p>
						A ingestão de proteínas de alto valor biológico
					 	cria um ambiente favorável para a hipertrofia muscular. 
					</p>
				</div>
				<img id="workout-undraw" src={Workout} width="180" height="140" alt=""/>
				
				<img id="running-undraw" src={Running} width="180" height="140" alt=""/>
				<div id="text-running-undraw">
					<h4> + Disposição</h4>
					<p>
						Seu Whey Coffee, além de proteínas de alto valor biológico,
						contém também a cafeína, um dos melhores termogênicos estimulantes do mundo.
					</p>
				</div>
			</article>
		</main>
	</div>

	)
}

export default ProductPrice
import React from 'react'

import WheyCoffee from '../../assets/images/whey_coffee.png'
import Workout from '../../assets/images/workout.svg'
import Running from '../../assets/images/running.svg'

import './styles.css'

function ProductPrice() {
	return (
	<div id="product-price-section">
		<main>
			<img id="product-float-left" src={WheyCoffee} alt=""/>
			<section>
				<div>
					<h4> + Força</h4>
					<p>
						A ingestão de proteínas de alto valor biológico
					 	cria um ambiente favorável para a hipertrofia muscular. 
					</p>
				</div>
				<img id="workout-undraw" src={Workout} alt=""/>
			</section>

			<section>
				<img id="running-undraw" src={Running} alt=""/>
				<div>
					<h4> + Disposição</h4>
					<p>
						Seu Whey Coffee, além de proteínas de alto valor biológico,
						contém também um dos melhores termogênicos estimulantes do mundo:
						a cafeína.
					</p>
				</div>
			</section>
		</main>
	</div>

	)
}

export default ProductPrice
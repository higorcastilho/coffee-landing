import React from 'react'

import Button from '../../components/Button'

import './styles.css'

function Landing() {
	return (
		<div>
			<main>
				<section>
					<h1>
						<span>Leve.</span>	
						<span>Cremoso.</span>	
						<span>Saudável.</span>	
					</h1>
					<Button route="/payment" name="Fazer pedido"/>
				</section>
				<section class="hero_image">
					
				</section>
			</main>
		</div>
	)
}

export default Landing
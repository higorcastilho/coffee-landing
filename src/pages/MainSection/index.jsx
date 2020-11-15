import React from 'react'

import Button from '../../components/Button'

import './styles.css'
//Agora seu café também é fonte de proteínas
function MainSection() {
	return (
		<div>
			<main>
				<section className="hero-slogan">
					<h1>
						<span>Leve.</span>	
						<span>Cremoso.</span>	
						<span>Saudável.</span>	
					</h1>
					<Button route="/payment" name="Fazer pedido"/>
				</section>
				<section className="hero_image">	
				</section>
			</main>
		</div>
	)
}

export default MainSection
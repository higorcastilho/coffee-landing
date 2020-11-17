import React from 'react'

import Padlock from '../../assets/images/padlock.svg'
import Shield from '../../assets/images/shield.svg'
import DeliveryTruck from '../../assets/images/delivery_truck.svg'

import './styles.css'

function SecuritySection() {
	return (
		<div id="security-section">
			<main>
				<h2>Segurança</h2>
				<div id="security-section-articles">
					<article>
						<section>
							<img src={Padlock} width="30" height="30" alt=""/>
							<h3>Certificado TLS</h3>
						</section>
						<p>Nosso site possui certificado TLS 
						(verifique o cadeado próximo à URL no navegador). Esse certificado é a garantia de que seus dados trafegam criptografados de ponta a ponta.</p>
					</article>
					<article>
						<section>
							<img src={Shield} width="30" height="30" alt=""/>
							<h3>Pagamento Seguro</h3>
						</section>
						<p>Utilizamos métodos de pagamento largamente utilizados e seguros, garantindo 
						a segurança de suas transações na compra do nosso produto.</p>
					</article>
					<article>
						<section>
							<img src={DeliveryTruck} width="30" height="30" alt=""/>
							<h3>Reebolso Garantido</h3>
						</section>
						<p>Devolvemos o valor integral pago caso o produto não chegue no prazo estipulado.</p>
					</article>
				</div>
			</main>
		</div>
	)
}

export default SecuritySection
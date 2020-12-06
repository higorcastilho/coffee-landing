import React, { useEffect } from 'react'

import Http from '../../services/http'

import Box from '../../assets/images/box.svg'
import BoxHeart from '../../assets/images/box_heart.svg'

import './styles.css'

//thanks to good ware / flaticons / Freepik
function CheckoutStatus () {
	
	useEffect(() => {
		async function getOrderId () {
			const urlParams = new URLSearchParams(window.location.search)
			const success = urlParams.get('success')
			const canceled = urlParams.get('canceled')
			const orderId = urlParams.get('order')
			
			const payload = { path: '/customer-order/update-order-status', body: { success, canceled, orderId }}
			await Http.post(payload)
		}
		getOrderId()
	}, [])

	return (
		<div id="checkout-page">
			<article className="checkout-page-success">
				<img src={Box} alt="a delivery box" />
				<section>
					<h1>Obrigado por comprar conosco :)</h1>
					<p>Já já postaremos seu pedido nos correios.</p>
					<p>Enquanto isso, dá uma olhadinha no seu e-mail. Enviamos os detalhes do seu pedido!</p>
				</section>
				<img src={BoxHeart} alt="a delivery box with a heart popping up from its inner" />
			</article>	
		</div>
	)
}

export default CheckoutStatus
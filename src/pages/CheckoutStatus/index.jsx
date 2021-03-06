import React, { useEffect, useState } from 'react'

import Http from '../../services/http'
import Emitter from '../../services/emitter'

import Box from '../../assets/images/box.svg'
import BoxHeart from '../../assets/images/box_heart.svg'

import './styles.css'

//thanks to good ware / flaticons / Freepik
function CheckoutStatus () {
	const [orderId, setOrderId] = useState('')
	useEffect(() => {
		async function getOrderId () {
			const urlParams = new URLSearchParams(window.location.search)
			let success = urlParams.get('success')
			let canceled = urlParams.get('canceled')
			setOrderId(urlParams.get('order'))
			
			if (!success) {
				success= "false"
			}

			if (!canceled) {
				canceled = "false"
			}

			const payload = { path: '/update-order-status', body: { success, canceled, orderId }}

			Http.post(payload).then( async () => {
				const emitterPayload = { path: '/update-order-status', body: { notificationName: 'updateStatus', data: orderId }}
				const response = await Emitter.post(emitterPayload)
				const data = await response.json()
			})
		}
		getOrderId()
	}, [orderId])

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
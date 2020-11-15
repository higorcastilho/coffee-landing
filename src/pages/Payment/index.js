import React, { useEffect, useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'

import PaymentMethod from '../../components/PaymentMethod'

import PaypalLogo from '../../assets/images/paypal_logo.svg'
import PagseguroLogo from '../../assets/images/pagseguro_logo.svg'
import MercadoPagoLogo from '../../assets/images/mercado_pago_logo.svg'
import StripeLogo from '../../assets/images/stripe_logo.svg'

import WheyCoffee from '../../assets/images/whey_coffee.png'

import './styles.css'

const stripePromise = loadStripe("pk_test_51HkktyJc2DIm0ASQXNJkULs2w7SFabjvHbdC6Xi5koXGQxWU4JGfU9AFdvnpsssQ009i6MYyHZalYM3E8IMQJ62b008eLiJPxk")

const ProductDisplay = ({ handleClick }) => (

	<section>
		<div className="product">
			<img src="https://www.corpoevidashop.com.br/images/products/full/f1211-whey-protein-coffee-gourmet-700g-performance-nutrition.1593539033.jpg" alt="The cover of Stubborn Attachments"/>
		</div>
		<div className="description">
			<h3>Stubborn Attachments</h3>
			<h5>$20.00</h5>
		</div>
		<button id="checkout-button" type="button" role="link" onClick={ handleClick }>Checkout</button>
	</section>
)

const Message = ({ message }) => (
	<section>
		<p>{ message }</p>
	</section>
)

function Payment() {

	const [paymentMethod, setPaymentMethod] = useState('paypal')
	const [message, setMessage] = useState('')

	function handleSelectedPaymentMethod(e) {
		e.preventDefault()

		if (e.target.tagName === 'IMG') {
			setPaymentMethod(e.target.parentNode.id)

		} else if (e.target.tagName === 'DIV') {
			setPaymentMethod(e.target.childNodes[0].id)
		
		} else {
			setPaymentMethod(e.target.id)
		}
	}

	function handleFindAvaiablePaymentMethods() {
		const paymentMethodElements = document.getElementsByClassName('payment_method') 
		const avaiablePaymentMethods = []
		for (let i = 0; i < paymentMethodElements.length; i++) {
			avaiablePaymentMethods.push(paymentMethodElements[i].childNodes[0].id)
		}
		return avaiablePaymentMethods
	}

	const handleClick = async (event) => {
		const stripe = await stripePromise

		const response = await fetch('http://localhost:5000/api/v1/stripe/create-session', {
			method: "POST"
		})

		console.log(response)

		const session = await response.json()

		// When the customer clicks on the button, redirect them to Checkout.
		const result = await stripe.redirectToCheckout({
			sessionId: session.id,
		})

		if (result.error) {
			console.log(result.error.message)
		}
	}

	useEffect(() => {

		//styles selected payment method button
		const selectedPaymentMethod = document.getElementById(paymentMethod)
		selectedPaymentMethod.parentNode.style.boxShadow = "0 0 3rem #808080"
		
		const avaiablePaymentMethods = handleFindAvaiablePaymentMethods()
		const notSelectedPaymentMethod = avaiablePaymentMethods.filter(item => item !== paymentMethod)
		notSelectedPaymentMethod.forEach(item => {
			document.getElementById(item).parentNode.style.boxShadow = "0 0 .7rem #949494"
		})

		const query = new URLSearchParams(window.location.search)

		if (query.get("canceled")) {
			setMessage(
				"Pedido cancelado"
			)
		}

		console.log(paymentMethod)

	}, [paymentMethod])
	// Must contain at least one number and one uppercase and lowercase
	//letter, and at least 8 or more characters
	// (?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}
	return (
		<div className="payment_page">
			<form>
				<section>
					<p>Passo 1 de 3</p>
					<h2>Informações de envio</h2>

					<fieldset>
						<input id="complete_name" placeholder="Nome completo" type="text"/>
						<input id="email" placeholder="Email" type="text"/>
						<input id="phone" placeholder="Telefone" type="text"/>
						<input id="adress" placeholder="Endereço para Entrega" type="text"/>
						<input 
							id="zip_code" 
							placeholder="CEP (Ex: 00000-000)" 
							type="text"
							pattern="\d{5}-\d{3}" // or [0-9]{5}[-][0-9]{3}
							title="Formato 00000-000"
						/>
						<button>Clique</button>
					</fieldset>
				</section>

				<section>
					<p>Passo 2 de 3</p>
					<h2>Método de Pagamento</h2>

					<PaymentMethod id="paypal" logo={PaypalLogo} onClick={handleSelectedPaymentMethod} />
					<PaymentMethod id="pagseguro" logo={PagseguroLogo} onClick={handleSelectedPaymentMethod} />
					<PaymentMethod id="mercadopago" logo={MercadoPagoLogo} onClick={handleSelectedPaymentMethod} />
					<PaymentMethod id="stripe" logo={StripeLogo} onClick={handleSelectedPaymentMethod} />
				</section>

				<section>
					<p>Passo 3 de 3</p>
					<h2>Revisão do pedido</h2>
					<ProductDisplay handleClick={handleClick} />
				</section>
			</form>
		</div>
	)
}
export default Payment
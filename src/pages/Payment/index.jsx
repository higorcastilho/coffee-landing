import React, { useEffect, useState } from 'react'

import stripe from '../../services/payment/stripe'
import Order from '../../services/api/Order'

import { useProductQuantifier } from '../../context/ProductQuantity'

import PaymentMethod from '../../components/PaymentMethod'
import ProductDisplay from '../../components/ProductDisplay'

import PaypalLogo from '../../assets/images/paypal_logo.svg'
import PagseguroLogo from '../../assets/images/pagseguro_logo.svg'
import MercadoPagoLogo from '../../assets/images/mercado_pago_logo.svg'
import StripeLogo from '../../assets/images/stripe_logo.svg'

import './styles.css'

function Payment() {

	const { quantifier } = useProductQuantifier()
	const [paymentMethod, setPaymentMethod] = useState('paypal')
	
	const [orderInfo, setOrderInfo ] = useState({
		name: '',
		email: '',
		phone: '',
		address: '',
		zip: '',
		paymentMethod: '',
		price: 49.90,
		quantity: '',
		orderStatus: 'pendente'
	})

	const [productDetails] = useState({
		image: "https://www.corpoevidashop.com.br/images/products/full/f1211-whey-protein-coffee-gourmet-700g-performance-nutrition.1593539033.jpg",
		name: "Whey Coffee",
		price: 49.90
	})

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
	
	const activateSelectedPayment = async (orderId) => {
		switch(paymentMethod) {
			case ('stripe'):
				return await stripe(productDetails.price, quantifier, orderId)
			default:
				return true
		}
	}

	const handleCreateOrder = async () => {
		Order.createOrder(orderInfo).then( res => {
			activateSelectedPayment(res)
		})
	}

	//4000000760000002
	const handleClick = async () => {
		await handleCreateOrder()
	}

	function handleFindAvaiablePaymentMethods() {

		const paymentMethodElements = document.getElementsByClassName('payment_method') 
		const avaiablePaymentMethods = []
		for (let i = 0; i < paymentMethodElements.length; i++) {
			avaiablePaymentMethods.push(paymentMethodElements[i].childNodes[0].id)
		}
		return avaiablePaymentMethods
	}

	useEffect(() => {

		setOrderInfo( orderInfo => ({...orderInfo, paymentMethod, quantity: quantifier}))

		//styles with a shadow the selected payment method button
		const selectedPaymentMethod = document.getElementById(paymentMethod)
		selectedPaymentMethod.parentNode.style.boxShadow = "0 0 3rem #808080"
		
		const avaiablePaymentMethods = handleFindAvaiablePaymentMethods()
		const notSelectedPaymentMethod = avaiablePaymentMethods.filter(item => item !== paymentMethod)
		
		notSelectedPaymentMethod.forEach(item => {
			document.getElementById(item).parentNode.style.boxShadow = "0 0 .7rem #949494"
		})
	}, [paymentMethod, quantifier])

	return (
		<div className="payment_page">
			<form>
				<section>
					<p>Passo 1 de 3</p>
					<h2>Informações de envio</h2>
					<fieldset>
						<input 
							id="complete_name" 
							placeholder="Nome completo" 
							type="text"
							onChange={ e => {
								setOrderInfo({...orderInfo, name: e.target.value})
							}}
						/>
						<input 
							id="email" 
							placeholder="Email" 
							type="text"
							onChange={ e => {
								setOrderInfo({...orderInfo, email: e.target.value})
							}}
						/>
						<input 
							id="phone" 
							placeholder="Telefone" 
							type="text"
							onChange={ e => {
								setOrderInfo({...orderInfo, phone: e.target.value})
							}}
						/>
						<input 
							id="address" 
							placeholder="Endereço para Entrega" 
							type="text"
							onChange={ e => {
								setOrderInfo({...orderInfo, address: e.target.value})
							}}
						/>
						<input 
							id="zip_code" 
							placeholder="CEP (Ex: 00000-000)" 
							type="text"
							pattern="\d{5}-\d{3}"
							title="Formato 00000-000"
							onChange={ e => {
								setOrderInfo({...orderInfo, zip: e.target.value})
							}}
						/>
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
					<ProductDisplay 
						handleClick={handleClick}
						image={productDetails.image}
						name={productDetails.name}
						price={productDetails.price}
						paymentMethod={paymentMethod}
					/>
				</section>
			</form>
		</div>
	)
}
export default Payment
import React, { useEffect, useState } from 'react'

import stripe from '../../services/payment/stripe'
import Order from '../../services/api/Order'
import Emitter from '../../services/emitter'

import { useProductQuantifier } from '../../context/ProductQuantity'

import PaymentMethod from '../../components/PaymentMethod'
import ProductDisplay from '../../components/ProductDisplay'
import Input from '../../components/Input'

import PaypalLogo from '../../assets/images/paypal_logo.svg'
import PagseguroLogo from '../../assets/images/pagseguro_logo.svg'
import MercadoPagoLogo from '../../assets/images/mercado_pago_logo.svg'
import StripeLogo from '../../assets/images/stripe_logo.svg'

import { phoneMask, cepMask, nameMask, addressMask } from '../../utils/masks'
import { emailValidator } from '../../utils/validators'

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
		orderStatus: 'não'
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
	
	const handleCreateOrder = () => {
		Order.createOrder(orderInfo).then( async res => {
			try {
				const emitterPayload = { 
					path: '/pop-up-order', 
					body: { 
						notificationName: 'popUpOrder', 
						data: {
							_id: res,
							email: orderInfo.email,
							price: orderInfo.price,
							quantity: orderInfo.quantity,
							orderStatus: orderInfo.orderStatus
						} 
					}
				}

				const response = await Emitter.post(emitterPayload)
				await response.json()

				await activateSelectedPayment(res)
			} catch (error) {
				console.log(error)
			}
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
						<Input 
							id="name"
							placeholder="Nome completo"
							type="text"
							mask={nameMask}
							value={ orderInfo.name }
							orderInfo={orderInfo}
							setOrderInfo={setOrderInfo}
						/>
						<Input 
							id="email" 
							placeholder="Email" 
							type="text"
							validator={emailValidator}
							value={ orderInfo.email }
							orderInfo={orderInfo}
							setOrderInfo={setOrderInfo}	
						/>
						<Input 
							id="phone" 
							placeholder="Telefone (Apenas números)" 
							type="text"
							mask={phoneMask}
							value={ orderInfo.phone }
							orderInfo={orderInfo}
							setOrderInfo={setOrderInfo}
						/>
						<Input 
							id="address" 
							placeholder="Endereço para Entrega" 
							type="text"
							mask={addressMask}
							value={ orderInfo.address }
							orderInfo={orderInfo}
							setOrderInfo={setOrderInfo}
						/>
						<Input 
							id="zip" 
							placeholder="CEP (Apenas números)" 
							type="text"
							mask={cepMask}
							value={ orderInfo.zip }
							orderInfo={orderInfo}
							setOrderInfo={setOrderInfo}
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
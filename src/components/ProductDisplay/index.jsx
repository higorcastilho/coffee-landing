import React from 'react'

import QuantifierButton from '../QuantifierButton'

import { useProductQuantifier } from '../../context/ProductQuantity'

import './styles.css'

const ProductDisplay = ({ handleClick, image, name, price, paymentMethod }) => {

	const { quantifier } = useProductQuantifier()
	
	return (

	<div className="product-display">
		<div className="product-image">
			<img src={image} alt=""/>
		</div>

		<section>
			<div className="product-description">
				<h4>{name}</h4>
				<h3>R${price * quantifier}</h3>
				<h4>Qtd {quantifier}. R${price} cada</h4>
			</div>
			<QuantifierButton />
		</section>
		<button 
			className="checkout-button" 
			type="button" 
			role="link" 
			onClick={ handleClick }
		>
			Pagar com {paymentMethod.toUpperCase()}
		</button>
		<p>Ao clicar neste botão você será redirecionado para a página de confirmação do método de pagamento que escolheu.</p>
	</div>
)}

export default ProductDisplay
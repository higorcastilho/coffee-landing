import React from 'react'

import './styles.css'

const ProductDisplay = ({ handleClick, image, name, price, quantity, paymentMethod }) => (

	<div className="product-display">
		<div className="product-image">
			<img src={image} alt=""/>
		</div>
		<div className="product-description">
			<h4>{name}</h4>
			<h3>R${price * quantity}</h3>
			<h4>Qtd {quantity}. R${price} cada</h4>
		</div>
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
)

export default ProductDisplay
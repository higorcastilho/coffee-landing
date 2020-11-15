import React from 'react'

import './styles.css'

function PaymentMethod(props) {
	return (
		<div className="payment_method" onClick={props.onClick} >
			<button id={props.id}>
				<img src={props.logo} alt=""/>
			</button>
		</div>
	)
}

export default PaymentMethod
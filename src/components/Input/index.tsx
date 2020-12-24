import  React, { InputHTMLAttributes, ChangeEvent } from 'react'

import './styles.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	id: string
	orderInfo: object
	setOrderInfo: ({}) => void
}

interface OrderInfoProps {
	[name: string]: string
	email: string
	phone: string
	address: string
	zip: string
	paymentMethod: string
	price: any
	quantity: string
	orderStatus: string
}

const Input: React.FC<InputProps> = ({ id, orderInfo, setOrderInfo, ...rest }) => {
	
	let newOrderInfo = orderInfo as OrderInfoProps

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		
		newOrderInfo[id] = event.target.value
		
		setOrderInfo({
			...newOrderInfo,
		})
	}
	
	return (
		<div>
			<input id="input-component" onChange={ handleChange } { ...rest } />
		</div>
	)
}

export default Input
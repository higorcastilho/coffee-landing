import  React, { InputHTMLAttributes, ChangeEvent } from 'react'

import './styles.css'

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

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	id: string
	orderInfo: OrderInfoProps
	setOrderInfo: (OrderInfoProps: OrderInfoProps) => void
	mask: (value: string) => string
}


const Input: React.FC<InputProps> = ({ id, orderInfo, setOrderInfo, mask, ...rest }) => {
	
	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		
		orderInfo[id] = mask(event.target.value)
		
		setOrderInfo({ ...orderInfo })
	}
	
	return (
		<div>
			<input id="input-component" onChange={ handleChange } { ...rest } />
		</div>
	)
}

export default Input
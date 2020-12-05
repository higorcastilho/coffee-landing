import React, { createContext, useState, useContext } from 'react'

const OrderIdContext = createContext()

export default function OrderIdProvider ({ children }) {

	const [ orderId, setOrderId ] = useState('')
	return (
		<OrderIdContext.Provider
			value={{orderId, setOrderId}}
		>
			{children}
		</OrderIdContext.Provider>
	)
}

export function useOrderId () {
	const { orderId, setOrderId } = useContext(OrderIdContext)
	return {
		orderId,
		setOrderId
	}
}
import React, { createContext, useContext, useState } from 'react'

const ProductQuantityContext = createContext()

export default function ProductQuantityProvider ({ children }) {
		
	const [quantifier, setQuantifier] = useState(1)

	return (
		<ProductQuantityContext.Provider 
		value={{
			quantifier,
			setQuantifier
		}}
		>
			{children}
		</ProductQuantityContext.Provider>
	)
}

export function useProductQuantifier () {
	const context = useContext(ProductQuantityContext)
	const { quantifier, setQuantifier } = context
	return {
		quantifier,
		setQuantifier
	}
}
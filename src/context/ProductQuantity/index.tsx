import * as React from 'react'

type QuantifierContextType = {
	quantifier: number
	setQuantifier: (quantifierPlusOne) => void
}

const ProductQuantityContext = React.createContext<QuantifierContextType>({} as QuantifierContextType)

const ProductQuantityProvider: React.FC = ({ children }) => {
		
	const [quantifier, setQuantifier] = React.useState(1)

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

export default ProductQuantityProvider

export function useProductQuantifier () {
	const context = React.useContext(ProductQuantityContext)
	const { quantifier, setQuantifier } = context
	return {
		quantifier,
		setQuantifier
	}
}
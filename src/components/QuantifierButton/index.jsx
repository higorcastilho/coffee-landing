import React from 'react'

import { useProductQuantifier } from '../../context/ProductQuantity'

import './styles.css'

function QuantifierButton () {

	const { quantifier, setQuantifier } = useProductQuantifier()

	const handleRemoveButton = () => {
		if (quantifier <= 1) {
			return null
		}

		setQuantifier(quantifier - 1)		
	}

	const handleAddButton = () => {
		setQuantifier(quantifier + 1)
	}	

	return (
		<div id="button-quantifier">
			
			<button type="button" 
				onClick={ handleRemoveButton }
			> - </button>
			
			<p>{quantifier}</p>

			<button type="button"
				onClick={ handleAddButton }
			> + </button>
			
		</div>
	)
}

export default QuantifierButton
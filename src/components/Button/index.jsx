import React from 'react'
import { Link } from 'react-router-dom'

import './styles.css'

function Button(props) {
	return (
		<div className="hero_button">
			<Link to={props.route}>{props.name}</Link>
		</div>
	)
}

export default Button

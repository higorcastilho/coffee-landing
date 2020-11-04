import React from 'react'
import { Link } from 'react-router-dom'

function Button(props) {
	return (
		<div>
			<Link to={props.route}>{props.name}</Link>
		</div>
	)
}

export default Button

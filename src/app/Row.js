import React from 'react'

const Row = props => {
	return (
		<tr>
			<td>{props.change.when}</td>
			<td>{props.change.who}</td>
			<td>{props.change.description}</td>
		</tr>
	)
}

export default Row

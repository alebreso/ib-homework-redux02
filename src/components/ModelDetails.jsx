import React from 'react'
import store from '../Store'

export default function ModelDetails() {
	const renderData = (elem) => {
		return(
			<ul key={elem.value}>
					<li>name:{elem.value}</li>
					<li>manufacturer:{elem.manufacturer}</li>
					<li>year:{elem.year}</li>
					<li>origin:{elem.origin}</li>
			</ul>
		)
	}

	const myStore = store.getState()
	if (!myStore.length) return null
		return (
			myStore.map(elem => renderData(elem))
		)
	}



import React, { Component } from 'react'
import {connect} from 'react-redux'
import store from '../Store'

class ModelDetails extends Component {
	state={store:store.getState()}

  render() {
		const myStore = store.getState()
		console.log(myStore)
		return(
			<form>
				<label>Name:{this.props.data.value}</label>
				<label>manufacturer:{this.props.manufacturer}</label>
			</form>
		)
	}
}

const  mapStateToProps = (state) => {
	return{
			manufacturer: state.manufacturer,
			year: state.year,
			origin: state.origin,
	}
}

export default connect(mapStateToProps)(ModelDetails);


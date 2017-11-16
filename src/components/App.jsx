import React, { Component } from 'react'
import { connect } from 'react-redux'

import { makeNewNum } from '../ducks/reducer'

class App extends Component {
	render(){
		return (
			<div className='App'>
				<button onClick={this.props.makeNewNum}></button>
				{ this.props.num }
			</div>

		)
	}
}

let outputActions = {
	makeNewNum
}

function mapStoreToProps(store) {
	console.log(store)
	/*
		@param {Object} store = {
			num: new,
			names: [],
			phones: {}
		}
	*/

	return { num: store.num }
}

export default connect(mapStoreToProps, outputActions)(App)
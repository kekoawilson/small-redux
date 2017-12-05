import React, { Component } from 'react'
/*
	STEP ONE - import connect
*/
import { connect } from 'react-redux'

/*
	STEP TWO - import action creator
*/
import { makeNewNum, getNewQuote } from '../ducks/reducer'

class App extends Component {
	render(){
		return (
			<div className='App'>
				{/*
					STEP SIX - use the action creator FROM PROPS
					in your JSX. --You have to use it from props or 
					it isn't connected to redux--
				*/}
				<button onClick={this.props.makeNewNum}>new number!</button>
				{ this.props.num }
				<button onClick={this.props.getNewQuote}>new quote!</button>
				{/*
					notice in our browser that for a second the word 
					'pending' appears where we render our quote? That's 
					because redux is updating the quote property with the string
					'pending' while it waits for a response from the API
				*/}
				{ this.props.quote }
			</div>

		)
	}
}

/*
	STEP THREE - define action creators you 
	want connected to redux
*/
let outputActions = {
	makeNewNum,
	getNewQuote
}

/*
	STEP FOUR - define what parts of the 
	store you want mapped to props
*/
function mapStoreToProps(store) {
	console.log(store)
	/*
		@param {Object} store = {
			num: new
		}
	*/

	return { num: store.num, quote: store.quote }
}


/*
	STEP FIVE - connect! (this part
	is actually magic, sorry)
*/
export default connect(mapStoreToProps, outputActions)(App)
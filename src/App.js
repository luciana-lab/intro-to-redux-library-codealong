import React, { Component } from 'react';
import './App.css';

// this.props.store is the store props passed in the index.js file
// store contains 2 methods: dispatch and getState
class App extends Component {
	handleOnClick = () => {
		this.props.store.dispatch({
			type: 'INCREASE_COUNT',
		});
	}

	// We use getState method in our render method to get the current state so we can display it on the page
	// We also have an event handler that calls the dispatch method, passing in our action, when the btn is clicked
	render() {
		return (
			<div className="App">
				<button onClick={this.handleOnClick}>Click</button>
				<p>{this.props.store.getState().clicks}</p>
			</div>
		);
	}
}

export default App;

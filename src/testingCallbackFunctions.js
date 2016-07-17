import React from 'react';

export default class Testing extends React.Component {

	constructor(props) {
		super(props);
		this.klickHandler = this.props.klickHandler.bind(this);
	}
	testHandler() {
		this.klickHandler(this);
	}

	render() {
		return (
			<button onClick={this.testHandler.bind(this)}>
				Testing
			</button>
			);
	}
}
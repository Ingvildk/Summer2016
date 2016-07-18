import React from 'react';

export default class Testing extends React.Component {

	constructor(props) {
		super(props);
		this.klickHandler = this.props.klickHandler.bind(this);
	}
	testHandler(i) {
		console.log("testHandler running. I should be 4");
		console.log(i);
		this.klickHandler.bind(this,i);
	}

	render() {
		let i = 4;
		return (
			<button onClick={this.testHandler.bind(this,i)}>
				Testing
			</button>
			);
	}
}
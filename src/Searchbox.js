import React from 'react';
export default class Searchbox extends React.Component {
	
	constructor() {
		super();
		this.state = {
			data: []
		};
		this.submitHandler = this.submitHandler.bind(this);

	}

	submitHandler() {
		console.log("submitHandler is running");
		let stateInfo = this.state;
		stateInfo.data.push("California");
		this.setState({stateInfo});
	}

	render() {
		let elements = this.state.data.map( el => (<li> {el} </li>) );
		console.log("RENDER---------RENDER");
		console.log(elements);
		return (
			<div>
				<button type="submit" value="Submit" onClick={this.submitHandler}> </button>
				<ol> {elements} </ol>
			</div>
			);
	}
}
import React from 'react';
export default class Searchbox extends React.Component {
	
	constructor() {
		super();
		this.state = {
			data: "heisann"
		};
		this.submitHandler = this.submitHandler.bind(this);

	}

	submitHandler() {
		console.log("submitHandler is running");
		this.setState({data: "California"});
	}

	render() {
		return (
			<div>
				<button type="submit" value="Submit" onClick={t65bfnthis.submitHandler}> </button>
				<p> {this.state.data} </p>
			</div>
			);
	}
}
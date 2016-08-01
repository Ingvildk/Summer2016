import React from 'react';
export default class Searchbox extends React.Component {
	
	constructor() {
		super();
		this.state = {
			data: [],
			value: ''
		};
		this.submitHandler = this.submitHandler.bind(this);
		this.changeHandler = this.changeHandler.bind(this);

	}

	changeHandler() {
		let input = this.refs.myInput;
		let inputValue = input.value;
		let stateData = this.state;	
		stateData.value = inputValue;
		this.setState({stateData});	
	}

	submitHandler() {
		console.log("submitHandler is running");
		let input = this.refs.myInput;
		let inputValue = input.value;
		console.log("-----submitHandler-----");
		console.log(inputValue);
		let stateInfo = this.state;
		stateInfo.data.push(inputValue);
		stateInfo.value = '';
		this.setState({stateInfo});
	}

	render() {
		let count = 0;
		let elements = this.state.data.map( el =>  (<li key={count++}> {el} </li>));
		let inputValue = this.state.value;
		console.log("RENDER---------RENDER");
		console.log(elements);
		return (
			<div>
				<input type="text" ref="myInput" value={inputValue} onChange={this.changeHandler}/>
				<br/>
				<button type="submit" value="Submit" onClick={this.submitHandler}> </button>
				<ol> {elements} </ol>
			</div>
			);
	}
}
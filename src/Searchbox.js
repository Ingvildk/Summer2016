import React from 'react';
import _ from 'underscore';
export default class Searchbox extends React.Component {
	
	constructor() {
		super();
		this.state = {
			data: [{name:"Ingvild", age:22},{name:"Erik", age:61},{name:"Wenke", age:60},{name: "Kyrre", age: 30},{name: "Haavard", age: 32}],
			searchFilter:[]
		};
//		this.submitHandler = this.submitHandler.bind(this);
		this.changeHandler = this.changeHandler.bind(this);
		this.checkSearch = this.checkSearch.bind(this);

	}

	checkSearch() {
		let elements = this.state.data;

		//return true; 
	}	

	changeHandler() {

		let input = this.refs.myInput;
		let inputValue = input.value;
		let dataValue = this.state.data;
		let newSearchFilter = [];
		dataValue.map(element => {
		let el = element.name.toLowerCase();	
		if (el.includes(inputValue)) {
			newSearchFilter.push(element);			
		}
		})
		//this.state.data.filter(checkSearch);
		this.state.searchFilter = newSearchFilter;
		let newState = this.state
		this.setState({newState});

		console.log("--searchFilter--");
		console.log(this.state.searchFilter);
		/*
		let stateData = this.state;	
		stateData.value = inputValue;
		this.setState({stateData});	*/
	}

/*
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
*/
	render() {
		let count = 0;
		//let elements = this.state.data.map( el =>  (<li key={count++}> {el.name} </li>));
		let elements = this.state.searchFilter.map(el=> <li key={count++}> {el.name} </li>);
		let inputValue = this.state.value;
		return (
			<div>
				<input type="text" ref="myInput" onChange={this.changeHandler}/>
				<br/>
				<button type="submit" value="Submit" onClick={this.submitHandler}> </button>
				<ol> {elements} </ol>
			</div>
			);
	}
}
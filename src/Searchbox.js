import React from 'react';
import _ from 'underscore';
export default class Searchbox extends React.Component {
	
	constructor() {
		super();
		this.state = {
			data: [{name:"Ingvild", age:22},{name:"Erik", age:61},{name:"Wenke", age:60},{name: "Kyrre", age: 30},{name: "Haavard", age: 32}],
			searchFilter:[{name:"Ingvild", age:22},{name:"Erik", age:61},{name:"Wenke", age:60},{name: "Kyrre", age: 30},{name: "Haavard", age: 32}]
		};
		this.changeHandler = this.changeHandler.bind(this);

	}

	componentWillMount() {


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
		this.state.searchFilter = newSearchFilter;
		let newState = this.state
		this.setState({newState});

		console.log("--searchFilter--");
		console.log(this.state.searchFilter);

	}

	render() {
		let count = 0;
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
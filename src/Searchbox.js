import React from 'react';
import _ from 'underscore';
export default class Searchbox extends React.Component {
	
	constructor() {
		super();
		this.state = {
			data: [{name:"Abeillia", age:22, photo:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Archilochus-alexandri-002-edit.jpg/250px-Archilochus-alexandri-002-edit.jpg" },{name:"rhinoceros", age:61, photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Rhinoceros_unicornis,_Kaziranga_(2006).jpg/250px-Rhinoceros_unicornis,_Kaziranga_(2006).jpg"},{name:"leopard", age:60, photo:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/African_Leopard_5.JPG/250px-African_Leopard_5.JPG"},{name: "leopard", age: 30, photo:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/African_Leopard_5.JPG/250px-African_Leopard_5.JPG"},{name: "giraf", age: 32, photo:"http://static.newworldencyclopedia.org/thumb/0/02/Giraffe08_-_melbourne_zoo_edit.jpg/250px-Giraffe08_-_melbourne_zoo_edit.jpg"}],
			searchFilter:[{name:"Abeillia", age:22, photo:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Archilochus-alexandri-002-edit.jpg/250px-Archilochus-alexandri-002-edit.jpg" },{name:"rhinoceros", age:61, photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Rhinoceros_unicornis,_Kaziranga_(2006).jpg/250px-Rhinoceros_unicornis,_Kaziranga_(2006).jpg"},{name:"leopard", age:60, photo:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/African_Leopard_5.JPG/250px-African_Leopard_5.JPG"},{name: "leopard", age: 30, photo:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/African_Leopard_5.JPG/250px-African_Leopard_5.JPG"},{name: "giraf", age: 32, photo:"http://static.newworldencyclopedia.org/thumb/0/02/Giraffe08_-_melbourne_zoo_edit.jpg/250px-Giraffe08_-_melbourne_zoo_edit.jpg"}]
		};
		this.changeHandler = this.changeHandler.bind(this);

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
		let elements = this.state.searchFilter.map(el=> <div> <li key={count++}> {el.name} </li> <img src={el.photo} /> </div>);
		let inputValue = this.state.value;
		return (
			<div>
			  <h3>Illegal things to buys</h3>
				<input type="text" ref="myInput" onChange={this.changeHandler}/>
				<br/>
				<ol> {elements} </ol>
			</div>
			);
	}
}
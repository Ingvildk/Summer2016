import React from 'react';

export default class Color extends React.Component {

	constructor() {
		super();
	}

	componentWillMount() {
		console.log("componentWillMount");
		console.log(this.props);				
	}

	render() {
		console.log("inside render");
		console.log(this.props);
		const style = {
			margin: '0.5em',
			paddingLeft: 0,
			listStyle: 'none',
			background: 'yellow'
		};
		return (
				<p style={style}>Farger</p>
			);
		}
	}
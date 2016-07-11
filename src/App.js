import React from 'react';
import Color from './Color';
import Searchbox from './Searchbox';
import ToDoBox from './ToDoBox';

export default class App extends React.Component {
	
  constructor() {
    super();
    this.state = {country: "California" };
  }

  componentWillMount() {
    this.setState({name:"Design"});
  }
	
  render() {
    const style = {
      paddingLeft: 200,
      font: "Times New Roman",
    };

    return (
      <div>
      	<h1 style={style}> {this.state.name}</h1>
      	<Color test = {this.state.country}/>
        <ToDoBox />
      </div>
    );
  }
}

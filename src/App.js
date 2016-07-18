import React from 'react';
import Color from './Color';
import Searchbox from './Searchbox';
import ToDoBox from './ToDoBox';
import Testing from './testingCallbackFunctions';

export default class App extends React.Component {
	
  constructor() {
    super();
    this.state = {country: "California" };
    this.clickHandler = this.clickHandler.bind(this);
  }

  componentWillMount() {
    this.setState({name:"Design"});
  }

  clickHandler(id) {
    console.log("clickHandler callback working. The id should print 4");
    console.log(id);
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
        <Testing klickHandler={this.clickHandler.bind(this)}/>
          <br/>
          <br/>
          <h2> Searchbox</h2>
          <Searchbox />
          <br/>
          <br/>
          <br/>
        <h2>TO  DO   BOX</h2>
        <ToDoBox />
      </div>
    );
  }
}

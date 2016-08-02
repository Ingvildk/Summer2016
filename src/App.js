import React from 'react';
import Color from './Color';
import Searchbox from './Searchbox';
import ToDoBox from './ToDoBox';
import Testing from './testingCallbackFunctions';
import { Link } from 'react-router';

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
      	<h1 style={style}> {this.state.country}</h1>
      	 <ul className="header">
          <Link to="color"><li>Color</li> </Link>
          <Link to="searchbox"><li>Searchbox</li></Link>
          <Link to="todobox"><li>ToDoBox</li></Link>
          <Link to="testing"><li>Testing</li></Link>
         </ul>
      </div>
    );
  }
}

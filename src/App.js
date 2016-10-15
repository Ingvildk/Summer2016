import React from 'react';
import Color from './Color';
import Searchbox from './Searchbox';
import ToDoBox from './ToDoBox';
import Testing from './testingCallbackFunctions';
import { Link } from 'react-router';

export default class App extends React.Component {
	
  constructor() {
    super();
    this.state = {name: "Girl Force US" };
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

const styleLI = {
	display: "inline",
	paddingLeft: 200,
}; 


    return (
      <div className="bgdiv">
      	<div style={style}> ..</div>
      	<p></p>
      	<div className="top-bar-right">
      	 <ul  className="vertical medium-horizontal menu" data-responsive-menu="drilldown medium-dropdown">
          <Link to="color"><li style = {styleLI}>About</li> </Link>
          <Link to="searchbox"><li style = {styleLI} >Searchbox</li></Link>
          <Link to="todobox"><li style = {styleLI} >Todo</li></Link>
          <Link to="testing"><li style = {styleLI} > Email</li></Link>
         </ul>
        </div>
        .........................
        .........
        ..
        ..                 
        <div className="bgdiv">
        </div>
      </div>
    );
  }
}

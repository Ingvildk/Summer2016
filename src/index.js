import React from 'react';
import ReactDOM from 'react-dom';
//importing the components for the router path
import App from './App';
import Color from './Color';
import Searchbox from './Searchbox';
import ToDoBox from './ToDoBox';
import Testing from './testingCallbackFunctions';
//importing the components I need to create a redux system 
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Router,
      Route,
      IndexRoute,
      IndexLink,
      Link,
      hashHistory } from 'react-router';

const reducer = function(state, action) {
	return state;
}

const store = createStore(reducer, 0); 

store.subscribe(() => {
	console.log("store changes", store.getState())
})

store.dispatch({type: "nothing special, but all actions need a type keyword"});

ReactDOM.render(
	<Provider store={store}>
		<Router history={hashHistory}>
			<Route path="/" component={App} />
			<Route path="color" component={Color} />
			<Route path="searchbox" component={Searchbox} />
			<Route path="todobox" component={ToDoBox} />
			<Route path="testing" component={Testing} />
		</Router>
	</Provider>, document.getElementById('root')
	);

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Client from './client';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

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
		<App> </App> 
	</Provider>, document.getElementById('root')
	);

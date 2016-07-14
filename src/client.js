import React from 'react';
import { createStore } from 'redux';

const reducer = function(state,action) {
	if (action.type == "INC") {
		return state+action.payload;
	}
	return state;
}

const store = createStore(reducer, 0);

store.subscribe(() => {
	console.log("store changes", store.getState())
})

store.dispatch({type: "YOLO"});
store.dispatch({type: "INC", payload: 2});
store.dispatch({type:"INC", payload: 2});


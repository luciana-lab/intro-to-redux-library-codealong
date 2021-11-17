// ./src/index.js

import React from 'react';
import ReactDOM from 'react-dom';

// createStore() is a function provided by Redux
// when invoked, it returns an instance of the Redux store
// import it in our src/index.js file, where ReactDOM renders our application
// use that function to crrate the store (store variable, line 24)
import { createStore } from 'redux';

// instead of having all of our functions encapsulated in a closure within index.js
// we've separated out the reducer function, giving it a relevant name (counterReducer)
// let the Redux library take care of our createStore function (importing it, line 10)
// and import the counterReducer function here (line 17)
// use both pieces (createStore and counterReducer) to create store (line 24)
import counterReducer from './reducers/counterReducer.js';
import App from './App';
import './index.css';

// call createStore() method
// pass a reducer argument (counterReducer)
// the reducer in is ./src/reducers/counterReducer.js
const store = createStore(
    counterReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //chrome extensios to see the action type and state changes
)

// pass store down to App as a prop so it can access the Redux store
ReactDOM.render(<App store={store} />, document.getElementById('root'));
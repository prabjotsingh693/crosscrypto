import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';

import {createStore, applyMiddleware, compose } from 'redux';
import reducer from './store/reducer';

import thunk from 'redux-thunk';

import App from './App';
import registerServiceWorker from './registerServiceWorker';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(
	applyMiddleware(thunk)
	));

const app =(
	<Provider store={store}>
		<App/>
	</Provider>
	);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();

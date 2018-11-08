import React from 'react'
import ReactDOM from 'react-dom';
import './index.css';
import Search from './components/Search';
import Home from './components/Home';
// import * as serviceWorker from './serviceWorker';
// import { BrowserRouter } from 'react-router-dom';

ReactDOM.render((
	// <BrowserRouter>
	<Home />
	// </BrowserRouter>
), document.getElementById('root'));

// serviceWorker.unregister();
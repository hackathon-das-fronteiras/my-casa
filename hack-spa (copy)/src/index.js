import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

// Routes imports
import createBrowserHistory from 'history/createBrowserHistory';
import { Router } from 'react-router-dom';
const history = createBrowserHistory();

ReactDOM.render(
	<Router history={history}>
    <App />
  </Router>,
	document.getElementById('root')
);
registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<BrowserRouter><MuiThemeProvider><App/></MuiThemeProvider></BrowserRouter>, document.getElementById('root'))
registerServiceWorker();

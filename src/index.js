import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

const Firebase = require("firebase");
const Config = require('./config/configs');

Firebase.initializeApp(Config);

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();

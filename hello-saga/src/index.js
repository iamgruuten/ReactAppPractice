import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios'

import { Provider } from 'react-redux'
import configureStore from './configureStore'
import 'bootstrap/dist/css/bootstrap.min.css'

axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://rem-rest-api.herokuapp.com/api"

const store = configureStore();

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider >,
  document.getElementById('root')
);

reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from 'axios';
import './style.css';
import {} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

axios.defaults.withCredentials = true;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

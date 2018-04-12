import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.css';
import App from './components/App'
import { BrowserRouter } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';

const router = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

ReactDOM.render(router, document.getElementById('app'));

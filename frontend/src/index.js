import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; 
import App from './App';
import './index.css';
import { disableReactDevTools } from '@fvilers/disable-react-devtools';

const API_URL = process.env.REACT_APP_API_BASE_URL;

if (API_URL === 'https://localhost:5000') {
  disableReactDevTools();
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

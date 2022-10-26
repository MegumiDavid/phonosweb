import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { AuthProvider } from './context/AuthProvider';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
          <App />
      </AuthProvider>
    </Router>
  </React.StrictMode>
);

reportWebVitals();

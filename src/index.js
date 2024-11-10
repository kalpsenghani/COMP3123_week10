import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Ensure this file exists in the same directory
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// For performance measurements
reportWebVitals();

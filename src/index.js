import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'boxicons/css/boxicons.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Log web vitals in development only
if (process.env.NODE_ENV === 'development') {
  reportWebVitals(console.log);
}

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as Sentry from "@sentry/browser";

Sentry.init({ dsn: 'https://9c6d348e60f94b47aeb025e017576172@glitch.flipp.space/2' });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
    <App />
  //</React.StrictMode>
);

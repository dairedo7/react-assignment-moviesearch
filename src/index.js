// import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
// Abstraction with logic to observer address field,
// updating address field and parsing it.Under the hood - the context which throws trhe data from consumer

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/react-assignment-moviesearch/">
    <App />
  </BrowserRouter>
);

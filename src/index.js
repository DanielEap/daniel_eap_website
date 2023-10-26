import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ReactGA from 'react-ga';

ReactGA.initialize('G-27M3ECWMX2');
ReactGA.pageview(window.location.pathname + window.location.search);
ReactGA.event({
  category: 'User',
  action: 'Visited Website',
});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


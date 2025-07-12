
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom'; // ✅ changed from BrowserRouter
import App from './App';
import './index.css';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter> {/* ✅ HashRouter ensures compatibility with GitHub Pages */}
    <App />
  </HashRouter>
);

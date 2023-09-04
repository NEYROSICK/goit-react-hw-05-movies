import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import GlobalContext from 'context/GlobalContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <GlobalContext>
        <App />
      </GlobalContext>
    </React.StrictMode>
  </BrowserRouter>
);

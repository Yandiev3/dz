import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.sass';
import {BrowserRouter as BrouserRouter} from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrouserRouter>
    <App />
    </BrouserRouter>
  </React.StrictMode>
);

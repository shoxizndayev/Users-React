import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {BrowserRouter} from 'react-router-dom';
import { Provider as AuthendicatedProvider } from "./Context/Authentication";



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthendicatedProvider>
    <App />    
    </AuthendicatedProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


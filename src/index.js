import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './css/index.css';
import { MyProvider } from './utils/dataprovider';
import reducer, { initState } from './utils/reducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MyProvider initState={initState} reducer={reducer}>
    <App />
  </MyProvider>
  
);


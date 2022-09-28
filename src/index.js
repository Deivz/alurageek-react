import React from 'react';
import ReactDOM from 'react-dom/client';
import Banner from './assets/components/Banner';
import Topo from './assets/components/Topo';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Topo />
    <Banner />
  </React.StrictMode>
);

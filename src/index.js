import React from 'react';
import ReactDOM from 'react-dom/client';
import { Container } from './App';
import './index.css';
import Nav from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Nav />
  </React.StrictMode>
);

const con1 = ReactDOM.createRoot(document.getElementById('con1'));
con1.render(
  <React.StrictMode>
    <Container />
  </React.StrictMode>
);

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import AppRouter from './router/AppRouter';
import './assets/sass/style.css';



ReactDOM.render(<AppRouter />,document.querySelector('#root'));
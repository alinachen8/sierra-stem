import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyA0_jA7LaqBJ8HHBwzFe_E8FxfYxeaJ0QY",
  authDomain: "sierra-stem.firebaseapp.com",
  projectId: "sierra-stem",
  storageBucket: "sierra-stem.appspot.com",
  messagingSenderId: "968526197127",
  appId: "1:968526197127:web:3f5c3dbbcac9cb6f07e322",
  measurementId: "G-ZDX4CSRX40"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

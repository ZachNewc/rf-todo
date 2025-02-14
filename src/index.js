import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.css';
import Editor from './Editor';

const App = () => {
  <React.StrictMode>
    <Editor />
  </React.StrictMode>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);
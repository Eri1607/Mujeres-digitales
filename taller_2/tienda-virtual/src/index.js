import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';    // Importación de estilos generales
import './App.css';      // Importación de estilos de App
import App from './App'; // Asegúrate de importar el componente App
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();

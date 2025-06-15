import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app.jsx'; // Importás el componente principal de la aplicación
import './styles/estilos.css'; // Importás estilos globales

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
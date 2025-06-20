import React from 'react';

const ControlDeGastos = () => {
  return (
    <div>
      <head>
        <meta charSet="UTF-8" />
        <title>Control de Gastos</title>
      </head>
      <body>
        <header>
          <a href="ingreso.jsx">
            <button>Ingresar</button>
          </a>
        </header>

        <div className="main-content">
          <h1>Control de Gastos</h1>
          <p>Organizate de manera practica</p>
          <img src="" alt="" />
          <div className="button-container">
            <a href="registro.jsx">
              <button>Registrarse</button>
            </a>
          </div>
        </div>
      </body>
    </div>
  );
};

export default ControlDeGastos;
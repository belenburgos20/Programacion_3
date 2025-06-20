import React from 'react';

const IngresarUsuario = () => {
  return (
    <div className="container">
      <h2>Iniciar Sesión</h2>
      <form action="#" method="POST">
        <label htmlFor="email">Correo electrónico</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="password">Contraseña</label>
        <input type="password" id="password" name="password" required />

        <button type="submit">Ingresar</button>
      </form>
      <div className="black-link">
      </div>
    </div>
  );
};

export default IngresarUsuario;

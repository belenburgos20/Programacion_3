import React from 'react';

const RegistroUsuario = () => {
  return (
    <div className="container">
      <h2>Registrarse</h2>
      <form action="#" method="POST">
        <label htmlFor="nombre">Nombre</label>
        <input type="text" id="nombre" name="nombre" required />

        <label htmlFor="email">Correo electrónico</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="password">Contraseña</label>
        <input type="password" id="password" name="password" required />

        <button type="submit">Crear cuenta</button>
      </form>
      <div className="black-link">
      </div>
    </div>
  );
};

export default RegistroUsuario;

//formulario de registro.

import React from "react";
import { registrarUsuario } from "../../services/api";
import { useNavigate } from "react-router-dom";
import "../../styles/registro.css";

const RegistroUsuario = () => {
  const [nombre, setNombre] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [, setError] = React.useState("");

  const navigate = useNavigate(); //  para redirigir dsi esta bien

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    setNombre("");
    setEmail("");
    setPassword("");

    try {
      const datos = { nombre, email, password };
      const response = await registrarUsuario(datos);
      console.log("Usuario registrado:", response.data);
      navigate("/ingreso"); // se va a la pagina de inicio de sesion si esta bien
    } catch (err) {
      console.error(err);
      if (err.response && err.response.data && err.response.data.error) {
        setError(err.response.data.error);
      } else {
        setError("Error al registrar usuario");
      }
    }
  };

  return (
    <div className="container">
      <h2>Regustrarse</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />

        <label htmlFor="email">Correo electrónico</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Crear cuenta</button>
      </form>
    </div>
  );
};

export default RegistroUsuario;

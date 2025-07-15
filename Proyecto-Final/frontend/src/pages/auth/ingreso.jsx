//formulario de inicio de sesión.

import React from "react";
import { useNavigate } from "react-router-dom";
import { iniciarSesion } from "../../services/api";
import "../../styles/ingreso.css";

const IngresarUsuario = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [, setError] = React.useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    setEmail("");
    setPassword("");

    try {
      const datos = { email, password };
      const response = await iniciarSesion(datos);

      localStorage.setItem("token", response.data.token);
      console.log("Token guardado", response.data.token);

      navigate("/inicio");
    } catch (err) {
      console.error(err);
      setError("correo o contraseña incorrectos");
    }
  };

  return (
    <div className="container">
      <h2>Ingresar</h2>
      <form onSubmit={handleLogin}>
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
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default IngresarUsuario;

//formulario de inicio de sesión.

import React from "react";
import { useNavigate } from "react-router-dom";
import { iniciarSesion } from "../../services/api";
import "../../styles/ingreso.css";
import RegistroUsuario from "./registro";

const IngresarUsuario = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const datos = { email, password };
      const response = await iniciarSesion(datos);

      localStorage.setItem("token", response.data.token);
      console.log("Token guardado", response.data.token);

      setEmail("");
      setPassword("");

      navigate("/inicio");
    } catch (err) {
      console.error(err);
      setError("Error al iniciar sesión");
    }
  };

  return (
    <div className="container">
      <h2>Ingresar</h2>

      {error && <p className="error">{error}</p>}

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
      <form onSubmit={RegistroUsuario.handleSubmit}>
        <p>
          ¿No tenes cuenta?{" "}
          <button type="submit">
            <a href="/registro">Crear cuenta</a>
          </button>
        </p>
      </form>
    </div>
  );
};

export default IngresarUsuario;

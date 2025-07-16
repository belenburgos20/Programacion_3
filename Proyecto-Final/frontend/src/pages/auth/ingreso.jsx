import React from "react";
import { useNavigate } from "react-router-dom";
import { iniciarSesion } from "../../services/api";
import "../../styles/ingreso.css";

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
      if (err.response) {
        const status = err.response.status;
        const mensaje = err.response.data?.error || "Error al iniciar sesión";

        if (status === 404) {
          setError(mensaje);
          setTimeout(() => navigate("/registro"), 2000);
        } else if (status === 401) {
          setError(mensaje);
        } else {
          setError("Error no manejable");
        }
      } else {
        setError("No se pudo conectar con el servidor");
      }
    }
  };

  return (
    <>
      <div className="presentacion-app">
        <h1>Control de Gastos</h1>
        <p>Gestiona tus gastos y mantenete organizado</p>
      </div>

      <div className="pagina-ingreso">
        <div className="header-ingreso">
          <h1 className="titulo-ingreso"> Iniciá sesión</h1>
          <p className="subtitulo">
            Accedé a tu cuenta para ver tus movimientos
          </p>
        </div>

        <div className="contenido-ingreso">
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

          <div className="registro-link">
            <p>¿No tenés cuenta?</p>
            <button type="button" onClick={() => navigate("/registro")}>
              Crear cuenta
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default IngresarUsuario;

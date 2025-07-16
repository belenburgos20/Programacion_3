import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "./pages/inicio";
import RegistroUsuario from "./pages/auth/registro";
import IngresarUsuario from "./pages/auth/ingreso";
import CargaIngreso from "./pages/cargaIngresos";
import CargaEgreso from "./pages/cargaEgresos";
import EditarMovimiento from "./pages/editarMovimiento";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IngresarUsuario />} />
        <Route path="/registro" element={<RegistroUsuario />} />
        <Route path="/ingreso" element={<IngresarUsuario />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/carga-ingreso" element={<CargaIngreso />} />
        <Route path="/carga-egreso" element={<CargaEgreso />} />
        <Route path="/editar/:id" element={<EditarMovimiento />} />
      </Routes>
    </Router>
  );
}

export default App;

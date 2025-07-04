import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "./pages/inicio";
import RegistroUsuario from "./pages/auth/registro";
import IngresarUsuario from "./pages/auth/ingreso";
import CargaIngreso from "./pages/cargaIngreso";
import CargaEgreso from "./pages/cargaEgreso";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IngresarUsuario />} />
        <Route path="/registro" element={<RegistroUsuario />} />
        <Route path="/ingreso" element={<IngresarUsuario />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/cargaIngreso" element={<CargaIngreso />} />
        <Route path="/cargaEgreso" element={<CargaEgreso />} />
      </Routes>
    </Router>
  );
}

export default App;

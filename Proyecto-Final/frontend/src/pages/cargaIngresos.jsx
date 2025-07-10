//muestra ingresosForm

import React from "react";
import "../styles/carga-ingreso.css";
import { useNavigate } from "react-router-dom";
import IngresosForm from "../components/common/ingresosForm";
import { guardarIngreso } from "../services/api";

const CargaIngreso = () => {
  const navigate = useNavigate();

  const handleAgregarIngreso = async (nuevoIngreso) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("No estás logueado");
        return;
      }

      await guardarIngreso(nuevoIngreso, token);
      alert("Ingreso guardado correctamente");
      navigate("/inicio");
    } catch (error) {
      console.error(error);
      alert("Error al guardar el ingreso");
    }
  };

  return (
    <div className="pagina-ingreso">
      <h1 className="titulo-ingreso">Nuevo Ingreso</h1>
      <IngresosForm onAgregar={handleAgregarIngreso} />
      <button className="btn-volver" onClick={() => navigate("/inicio")}>
        ← Volver al inicio
      </button>
    </div>
  );
};

export default CargaIngreso;

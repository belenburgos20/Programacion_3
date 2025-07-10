//muestra egresosForm
import React from "react";
import "../styles/carga-egreso.css";
import GastosForm from "../components/common/egresosForm";
import { useNavigate } from "react-router-dom";
import { guardarEgreso } from "../services/api";

const CargaEgreso = () => {
  const navigate = useNavigate();

  const handleAgregarEgreso = async (nuevoGasto) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("No estás logueado");
        return;
      }

      await guardarEgreso(nuevoGasto, token);
      alert("Egreso guardado correctamente");
      navigate("/inicio");
    } catch (error) {
      console.error(error);
      alert("Error al guardar el egreso");
    }
  };

  return (
    <div className="pagina-egreso">
      <h1 className="titulo-egreso">Nuevo Egreso</h1>

      <div className="formulario-egreso">
        <GastosForm onAgregar={handleAgregarEgreso} />
      </div>

      <button className="btn-volver" onClick={() => navigate("/inicio")}>
        ← Volver al inicio
      </button>
    </div>
  );
};

export default CargaEgreso;

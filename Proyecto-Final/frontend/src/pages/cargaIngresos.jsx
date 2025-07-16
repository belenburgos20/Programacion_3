"use client";
import "../styles/carga-ingreso.css";
import { useNavigate } from "react-router-dom";
import IngresosForm from "../components/common/ingresosForm";
import { guardarIngreso } from "../services/api";

const CargaIngreso = () => {
  const navigate = useNavigate();

  const handleAgregarIngreso = async (nuevoIngreso) => {
    if (
      !nuevoIngreso.descripcion ||
      !nuevoIngreso.total ||
      !nuevoIngreso.id_categoria ||
      !nuevoIngreso.fecha
    ) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    try {
      const response = await guardarIngreso(nuevoIngreso);
      console.log("Ingreso guardado:", response.data);
      alert("Ingreso guardado correctamente");
      navigate("/inicio");
    } catch (error) {
      console.error("Error completo:", error);
      if (error.response) {
        alert(
          `Error: ${error.response.data.error || "Error al guardar el ingreso"}`
        );
      } else {
        alert("Error de conexión al guardar el ingreso");
      }
    }
  };

  return (
    <div className="pagina-ingreso">
      <div className="header-ingreso">
        <h1 className="titulo-ingreso"> Nuevo Ingreso</h1>
        <p className="subtitulo">
          Registra tus ingresos para llevar un mejor control
        </p>
      </div>

      <div className="contenido-ingreso">
        <IngresosForm onAgregar={handleAgregarIngreso} />
      </div>

      <div className="acciones-ingreso">
        <button className="btn-volver" onClick={() => navigate("/inicio")}>
          ← Volver al inicio
        </button>
      </div>
    </div>
  );
};

export default CargaIngreso;

"use client"
import "../styles/carga-egreso.css"
import GastosForm from "../components/common/egresosForm"
import { useNavigate } from "react-router-dom"
import { guardarEgreso } from "../services/api"

const CargaEgreso = () => {
  const navigate = useNavigate()

  const handleAgregarEgreso = async (nuevoGasto) => {
    try {
      const response = await guardarEgreso(nuevoGasto)
      console.log("Egreso guardado:", response.data)
      alert("✅ Egreso guardado correctamente")
      navigate("/inicio")
    } catch (error) {
      console.error("Error completo:", error)
      if (error.response) {
        alert(`❌ Error: ${error.response.data.error || "Error al guardar el egreso"}`)
      } else {
        alert("❌ Error de conexión al guardar el egreso")
      }
    }
  }

  return (
    <div className="pagina-egreso">
      <div className="header-egreso">
        <h1 className="titulo-egreso">💸 Nuevo Egreso</h1>
        <p className="subtitulo">Registra tus gastos para mantener el control</p>
      </div>

      <div className="contenido-egreso">
        <GastosForm onAgregar={handleAgregarEgreso} />
      </div>

      <div className="acciones-egreso">
        <button className="btn-volver" onClick={() => navigate("/inicio")}>
          ← Volver al inicio
        </button>
      </div>
    </div>
  )
}

export default CargaEgreso

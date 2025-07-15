//muestra la tabla de con los movimientos.
// se puede eliminar movimientos y editarlos.

import React from "react";
import { useNavigate } from "react-router-dom";
import { eliminarMovimiento } from "../../services/api";
import { actualizarMovimiento } from "../../services/api";

const Movimientos = ({ lista, onEliminar }) => {
  const navigate = useNavigate();
  if (!lista || lista.length === 0) {
    return <p>No hay movimientos registrados todavía</p>;
  }
  const handleEditar = async (id) => {
    const confirmacion = window.confirm(
      "¿Estás seguro de editar este movimiento?"
    );
    if (!confirmacion) return;

    navigate(`/editar/${id}`);
  };
  const handleEliminar = async (id) => {
    const confirmacion = window.confirm(
      "¿Estás seguro de eliminar este movimiento?"
    );
    if (!confirmacion) return;

    try {
      const token = localStorage.getItem("token");
      await eliminarMovimiento(id, token);
      onEliminar(id);
    } catch (error) {
      console.error("Error al eliminar movimiento", error);
      alert("No se pudo eliminar");
    }
  };

  return (
    <div className="tabla-movimientos">
      <h2 className="titulo-seccion">Últimos movimientos</h2>
      <table>
        <thead>
          <tr>
            <th>Descripción</th>
            <th>Monto</th>
            <th>Categoría</th>
            <th>Fecha</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {lista.map((mov, i) => (
            <tr key={i}>
              <td>{mov.descripcion}</td>
              <td>${mov.total}</td>
              <td>{mov.categoria?.nombre || "Sin categoría"}</td>
              <td>{mov.fecha}</td>
              <td>
                <button onClick={() => handleEditar(mov.id)}>✏️</button>{" "}
                <button onClick={() => handleEliminar(mov.id)}>🗑️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Movimientos;

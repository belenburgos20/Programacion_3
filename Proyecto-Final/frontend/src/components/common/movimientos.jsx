//muestra la tabla de con los movimientos.
// se puede eliminar movimientos y editarlos.

import React from "react";
import { useNavigate } from "react-router-dom";
import { eliminarMovimiento } from "../../services/api";

const Movimientos = ({ lista, onEliminar }) => {
  const navigate = useNavigate();

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
    <div>
      <h2>Ultimos movimientos</h2>
      {lista.length === 0 ? (
        <p>No hay movimientos registrados todavia</p>
      ) : (
        <ul>
          {lista.map((mov, i) => (
            <li key={i}>
              <span>{mov.descripcion}</span>
              <span>{mov.total}</span>
              <span>{mov.categoria?.nombre || "Sin categoria"}</span>
              <span>{mov.fecha}</span>
              <button onClick={() => handleEliminar(mov.id)}>🗑️</button>
              <button onClick={() => navigate(`/editar/${mov.id}`)}>
                Editar
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Movimientos;

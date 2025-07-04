//muestra la tabla de últimos movimientos.

import React from "react";
import { eliminarMovimiento } from "../../services/api";

const Movimientos = ({ lista, onEliminar }) => {
  const handleEliminar = async (id) => {
    const confirmacion = window.confirm(
      "¿Estás seguro de eliminar este movimiento?"
    );
    if (!confirmacion) return;

    try {
      const token = localStorage.getItem("token");
      await eliminarMovimiento(id, token);
      onEliminar(id); // actualiza el estado desde el padre
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
              <span>{mov.categoria}</span>
              <span>{mov.fecha}</span>
              <button onClick={() => handleEliminar(mov.id)}>🗑️</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Movimientos;
// Este componente recibe una lista de movimientos y los muestra en una lista.
// Si no hay movimientos, muestra un mensaje indicando que no hay registros.

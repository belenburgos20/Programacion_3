// formulario con campos: fecha, categoría, descripción, total.

import React, { useState } from "react";
import { useEffect } from "react";
import { obtenerCategorias } from "../../services/api";

const IngresoForm = ({ onAgregar }) => {
  const [descripcion, setDescripcion] = useState("");
  const [monto, setMonto] = useState("");
  const [categorias, setCategorias] = useState([]);
  const [categoria, setCategoria] = useState("");
  const [fecha, setFecha] = useState("");

  useEffect(() => {
    const fetchCategorias = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await obtenerCategorias(token);
        setCategorias(response.data); // arreglo de objetos con id y nombre
      } catch (error) {
        console.error("Error al cargar las categorías", error);
      }
    };

    fetchCategorias();
  }, []);

  const handleCreate = (e) => {
    e.preventDefault();
    if (!descripcion || !monto || !categoria || !fecha) return;

    const nuevoIngreso = {
      descripcion,
      total: parseFloat(monto),
      id_categoria: parseFloat(categoria),
      fecha,
      tipo: "ingreso",
    };

    onAgregar(nuevoIngreso);
    
    setDescripcion("");
    setMonto("");
    setCategoria("");
    setFecha("");
  };

  return (
    <form onSubmit={handleCreate}>
      <h2>Cargar ingreso</h2>
      <input
        type="text"
        placeholder="Descripción"
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Monto"
        value={monto}
        onChange={(e) => setMonto(e.target.value)}
        required
      />
      <label>Categoría</label>
      <select
        value={categoria}
        onChange={(e) => setCategoria(e.target.value)}
        required
      >
        <option value="">-- Seleccionar categoría --</option>
        {categorias.map((cat) => (
          <option key={cat.id} value={cat.id}>
            {cat.nombre}
          </option>
        ))}
      </select>
      <input
        type="date"
        value={fecha}
        onChange={(e) => setFecha(e.target.value)}
        required
      />
      <button type="submit">Agregar</button>
    </form>
  );
};

export default IngresoForm;

//para filtrar por categoría, fechas, etc.

import React, { useEffect, useState } from "react";
import { obtenerCategorias } from "../../services/api";

const Filtros = ({ onFiltrar }) => {
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

  const handleFiltrar = () => {
    onFiltrar({ categoria, fecha });
  };

  const handleLimpiar = () => {
    setCategoria("");
    setFecha("");
    onFiltrar({ categoria: "", fecha: "" });
  };
  return (
    <div>
      <label>Categoria:</label>
      <select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
        <option value="">Todas</option>
        {categorias.map((cat) => (
          <option key={cat.id} value={cat.id}>
            {cat.nombre}
          </option>
        ))}
      </select>
      <label>Fecha:</label>
      <input
        type="date"
        value={fecha}
        onChange={(e) => setFecha(e.target.value)}
      />
      <button onClick={handleFiltrar}>filtros</button>
      <button onClick={handleLimpiar}>Limpiar filtros </button>
    </div>
  );
};

export default Filtros;

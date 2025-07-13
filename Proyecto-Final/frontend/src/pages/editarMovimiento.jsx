//Cambiar los valores que ya tenia ingresados por nuevos
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  obtenerMovimientoPorId,
  actualizarMovimiento,
  obtenerCategorias,
} from "../services/api";

const EditarMovimiento = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movimiento, setMovimiento] = useState(null);
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const mov = await obtenerMovimientoPorId(id, token);
        const cats = await obtenerCategorias(token);
        setMovimiento(mov.data);
        setCategorias(cats.data);
      } catch (error) {
        console.error("Error al cargar movimiento", error);
        alert("Error al cargar el movimiento");
        navigate("/inicio");
      }
    };
    fetchData();
  }, [navigate, id]);
  if (!movimiento) {
    return <p>No se encontró el movimiento</p>;
  }
  const handleChange = (e) => {
    setMovimiento({
      ...movimiento,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("No estás logueado");
        return;
      }
      await actualizarMovimiento(id, movimiento, token);
      alert("Movimiento actualizado correctamente");
      navigate("/inicio");
    } catch (error) {
      console.error("Error al actualizar el movimiento", error);
      alert("Error al actualizar el movimiento");
    }
  };

  return (
    <div>
      <h2>Editar Movimiento</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="descripcion"
          value={movimiento.descripcion}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="total"
          value={movimiento.total}
          onChange={handleChange}
          required
        />
        <select
          name="id_categoria"
          value={movimiento.id_categoria}
          onChange={handleChange}
          required
        >
          <option value="">Seleccionar categoría</option>
          {categorias.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.nombre}
            </option>
          ))}
        </select>
        <input
          type="date"
          name="fecha"
          value={movimiento.fecha}
          onChange={handleChange}
          required
        />
        <select
          name="tipo"
          value={movimiento.tipo}
          onChange={handleChange}
          required
        >
          <option value="ingreso">Ingreso</option>
          <option value="egreso">Egreso</option>
        </select>
        <button type="submit">Guardar cambios</button>
      </form>
      <button onClick={() => navigate("/inicio")}>Cancelar</button>
    </div>
  );
};

export default EditarMovimiento;

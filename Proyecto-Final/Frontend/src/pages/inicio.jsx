//vista principal, con los componentes de resumen y movimientos.

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Movimientos from "../components/common/movimientos";
import Resumen from "../components/common/resumen";
import Filtros from "../components/common/filtros";
import { obtenerMovimientos } from "../services/api";

const Inicio = () => {
  const [movimientos, setMovimientos] = useState([]);
  const [filtros, setFiltros] = useState({ categoria: "", fecha: "" });
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  useEffect(() => {
    const fetchMovimientos = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          navigate("/login"); //  si no está logueado
          return;
        }

        const response = await obtenerMovimientos(token);
        setMovimientos(response.data); // arreglo de movimientos
      } catch (error) {
        console.error("Error al cargar movimientos", error);
        alert("Error al obtener los movimientos");
      }
    };

    fetchMovimientos();
  }, []);

  const filtrarMovimientos = () => {
    return movimientos.filter((mov) => {
      const coincideCategoria =
        !filtros.categoria || mov.id_categoria === parseInt(filtros.categoria);
      const coincideFecha = !filtros.fecha || mov.fecha === filtros.fecha;
      return coincideCategoria && coincideFecha;
    });
  };
  const movimientosFiltrados = filtrarMovimientos();

  const handleEliminarMovimiento = (idEliminado) => {
    const nuevaLista = movimientos.filter((mov) => mov.id !== idEliminado);
    setMovimientos(nuevaLista);
  };

  const ingresos = movimientosFiltrados.filter((mov) => mov.tipo === "ingreso");
  const egresos = movimientosFiltrados.filter((mov) => mov.tipo === "egreso");

  return (
    <div>
      <h1>Control de gastos - inicio</h1>
      <button onClick={handleLogout}>Cerrar sesión</button>

      <div>
        <button onClick={() => navigate("/carga-ingreso")}>+ Ingreso</button>
        <button onClick={() => navigate("/carga-egreso")}>+ Egreso</button>
      </div>

      <div>
        <Movimientos
          lista={movimientosFiltrados}
          onEliminar={handleEliminarMovimiento}
        />
        <Resumen ingresos={ingresos} egresos={egresos} />
      </div>
      <Filtros onFiltrar={setFiltros} />
    </div>
  );
};

export default Inicio;

//vista principal, con los componentes de resumen y movimientos.

import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Movimientos from "../components/common/movimientos";
import Resumen from "../components/common/resumen";
import Filtros from "../components/common/filtros";
import { obtenerMovimientos } from "../services/api";

const Inicio = () => {
  const [movimientos, setMovimientos] = useState([]);
  const navigate = useNavigate();

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

  const handleEliminarMovimiento = (idEliminado) => {
    const nuevaLista = movimientos.filter((mov) => mov.id !== idEliminado);
    setMovimientos(nuevaLista);
  };

  const ingresos = movimientos.filter((m) => m.tipo === "ingreso");
  const egresos = movimientos.filter((m) => m.tipo === "egreso");

  return (
    <div>
      <h1>Control de gastos - inicio</h1>

      <div>
        <button onClick={() => navigate("/carga-ingreso")}>+ Ingreso</button>
        <button onClick={() => navigate("/carga-egreso")}>+ Egreso</button>
      </div>

      <div>
        <Movimientos
          lista={movimientos}
          onEliminar={handleEliminarMovimiento}
        />
        <Resumen ingresos={ingresos} egresos={egresos} />
      </div>
      <Filtros />
    </div>
  );
};

export default Inicio;

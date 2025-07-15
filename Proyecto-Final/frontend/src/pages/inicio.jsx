"use client";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/inicio.css";
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
    navigate("/");
  };

  const fetchMovimientos = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/");
        return;
      }

      const response = await obtenerMovimientos(token);
      setMovimientos(response.data); // arreglo de movimientos
    } catch (error) {
      console.error("Error al cargar movimientos", error);
      alert("Error al obtener los movimientos");
    }
  };

  useEffect(() => {
    fetchMovimientos();
  }, [navigate]);

  const filtrarMovimientos = () => {
    return movimientos.filter((mov) => {
      const coincideCategoria =
        !filtros.categoria ||
        mov.id_categoria === Number.parseInt(filtros.categoria);
      const coincideFecha = !filtros.fecha || mov.fecha === filtros.fecha;
      return coincideCategoria && coincideFecha;
    });
  };
  const movimientosFiltrados = filtrarMovimientos();

  const handleEliminarMovimiento = (idEliminado) => {
    const nuevaLista = movimientos.filter((mov) => mov.id !== idEliminado);
    setMovimientos(nuevaLista);
  };

  const actualizarMovimientos = () => {
    fetchMovimientos();
  };

  const ingresos = movimientosFiltrados.filter((mov) => mov.tipo === "ingreso");
  const egresos = movimientosFiltrados.filter((mov) => mov.tipo === "egreso");

  return (
    <div className="pagina-inicio">
      <header className="encabezado">
        <h1>Control de gastos</h1>
        <button className="btn-cerrar" onClick={handleLogout}>
          Cerrar sesión
        </button>
      </header>

      <section className="acciones">
        <button
          className="btn-ingreso"
          onClick={() => navigate("/carga-ingreso")}
        >
          + Nuevo Ingreso
        </button>
        <button
          className="btn-egreso"
          onClick={() => navigate("/carga-egreso")}
        >
          - Nuevo Egreso
        </button>
      </section>

      <main className="contenido-principal">
        <section className="movimientos">
          <Movimientos
            lista={movimientosFiltrados}
            onEliminar={handleEliminarMovimiento}
          />
          <div className="filtros">
            <Filtros onFiltrar={setFiltros} />
          </div>
        </section>
        <section className="resumen">
          <Resumen ingresos={ingresos} egresos={egresos} />
        </section>
      </main>

      <footer className="footer">Technova 2025</footer>
    </div>
  );
};

export default Inicio;

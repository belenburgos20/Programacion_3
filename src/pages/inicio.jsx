import React, { useState } from 'react';
import Movimientos from '../components/common/movimientos';
import IngresoForm from '../components/common/ingresosForm'
import Resumen from '../components/common/resumen'
import Filtros from '../components/common/filtros';

const Inicio = () => {
  const [ingresos, setIngresos] = useState([]);

  const agregarIngreso = (nuevo) => {
    setIngresos([nuevo, ...ingresos]);
  };
  return (
    <div className="min-h-screen bg-[#fff7ed] p-6">
      <h1 className="text-3xl font-bold mb-6">Control de gastos - inicio</h1>

      <IngresoForm onAgregar={agregarIngreso} />
      <div>
        <Movimientos lista={ingresos}/>
        <Resumen ingresos={ingresos}/>
      </div>
      <Filtros />
    </div>
  );
};

export default Inicio;
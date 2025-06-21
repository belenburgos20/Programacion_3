import React from 'react';

const Resumen = ({ ingresos }) => {
  const totalIngresos = ingresos.reduce((acc, mov) => acc + mov.total, 0);
  const gastosFijos = 0;
  const gastosVariables = 0;
  const diferencia = totalIngresos - gastosFijos - gastosVariables;

  return (
    <div className="bg-white p-4 rounded shadow mt-6">
      <h2 className="text-xl font-semibold mb-4">Resumen</h2>
      <ul className="text-sm space-y-1">
        <li>Ingresos netos: <span className="text-green-600">${totalIngresos.toFixed(2)}</span></li>
        <li>Gastos fijos: <span className="text-red-500">${gastosFijos.toFixed(2)}</span></li>
        <li>Gastos variables: <span className="text-red-500">${gastosVariables.toFixed(2)}</span></li>
        <li>Diferencia: <span className="text-green-600">${diferencia.toFixed(2)}</span></li>
      </ul>
    </div>
  );
};

export default Resumen;
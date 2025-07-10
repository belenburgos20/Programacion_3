//muestra ingresos totales, gastos y diferencia.

import React from "react";

const Resumen = ({ ingresos, egresos }) => {
  const totalIngresos = ingresos.reduce(
    (acc, mov) => acc + parseFloat(mov.total),
    0
  );
  const gastosFijos = egresos
    .filter((mov) => mov.categoria === "fijo")
    .reduce((acc, mov) => acc + mov.total, 0);
  const gastosVariables = egresos
    .filter((mov) => mov.categoria === "variable")
    .reduce((acc, mov) => acc + mov.total, 0);
  const diferencia = totalIngresos - gastosFijos - gastosVariables;

  return (
    <div>
      <h2>Resumen</h2>
      <ul>
        <li>
          Total Ingresos: <span>${Number(totalIngresos).toFixed(2)}</span>
        </li>
        <li>
          Gastos fijos: <span>${gastosFijos.toFixed(2)}</span>
        </li>
        <li>
          Gastos variables: <span>${gastosVariables.toFixed(2)}</span>
        </li>
        <li>
          Diferencia: <span>${diferencia.toFixed(2)}</span>
        </li>
      </ul>
    </div>
  );
};

export default Resumen;

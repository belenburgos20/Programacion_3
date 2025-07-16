const Resumen = ({ ingresos, egresos }) => {
  const totalIngresos = ingresos.reduce((acc, mov) => acc + Number.parseFloat(mov.total || 0), 0)

  const totalEgresos = egresos.reduce((acc, mov) => acc + Number.parseFloat(mov.total || 0), 0)

  const diferencia = totalIngresos - totalEgresos

  const egresosPorCategoria = egresos.reduce((acc, mov) => {
    const categoria = mov.categoria?.nombre || "Sin categoría"
    if (!acc[categoria]) {
      acc[categoria] = 0
    }
    acc[categoria] += Number.parseFloat(mov.total || 0)
    return acc
  }, {})

  const movimientos = [...ingresos, ...egresos]

  return (
    <div className="resumen-container">
      <h2>Resumen Financiero</h2>

      <div className="resumen-totales">
        <div className="resumen-item ingreso">
          <h3>💰 Total Ingresos</h3>
          <span className="monto positivo">${totalIngresos.toFixed(2)}</span>
          <small>{ingresos.length} movimiento(s)</small>
        </div>

        <div className="resumen-item egreso">
          <h3>💸 Total Egresos</h3>
          <span className="monto negativo">${totalEgresos.toFixed(2)}</span>
          <small>{egresos.length} movimiento(s)</small>
        </div>

        <div className="resumen-item balance">
          <h3>📊 Balance</h3>
          <span className={`monto ${diferencia >= 0 ? "positivo" : "negativo"}`}>${diferencia.toFixed(2)}</span>
          <small>{diferencia >= 0 ? "Superávit" : "Déficit"}</small>
        </div>
      </div>

      {Object.keys(egresosPorCategoria).length > 0 && (
        <div className="desglose-categorias">
          <h4>Egresos por Categoría</h4>
          <ul className="lista-categorias">
            {Object.entries(egresosPorCategoria).map(([categoria, total]) => (
              <li key={categoria} className="categoria-item">
                <span className="categoria-nombre">{categoria}</span>
                <span className="categoria-monto">${total.toFixed(2)}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {movimientos.length === 0 && (
        <div className="sin-datos">
          <p>No hay movimientos registrados</p>
          <small>Comienza agregando tus primeros ingresos y egresos</small>
        </div>
      )}
    </div>
  )
}

export default Resumen

import React, { useState } from 'react';

const IngresoForm = ({ onAgregar }) => {
  const [descripcion, setDescripcion] = useState('');
  const [monto, setMonto] = useState('');
  const [categoria, setCategoria] = useState('');
  const [fecha, setFecha] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!descripcion || !monto || !categoria || !fecha) return;

    const nuevoIngreso = {
      descripcion,
      total: parseFloat(monto),
      categoria,
      fecha,
    };

    onAgregar(nuevoIngreso);

    setDescripcion('');
    setMonto('');
    setCategoria('');
    setFecha('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow space-y-4">
      <h2 className="text-xl font-semibold">Cargar ingreso</h2>
      <input type="text" placeholder="Descripción" className="w-full p-2 border rounded"
        value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
      <input type="number" placeholder="Monto" className="w-full p-2 border rounded"
        value={monto} onChange={(e) => setMonto(e.target.value)} />
      <input type="text" placeholder="Categoría" className="w-full p-2 border rounded"
        value={categoria} onChange={(e) => setCategoria(e.target.value)} />
      <input type="date" className="w-full p-2 border rounded"
        value={fecha} onChange={(e) => setFecha(e.target.value)} />
      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Agregar</button>
    </form>
  );
};

export default IngresoForm;
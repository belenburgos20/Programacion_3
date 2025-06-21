import React from 'react';

const Movimientos = ({ lista }) => {
    return (
        <div className="bg-white p-4 rounded shadow mt-6">
            <h2 className="text-xl font-semibold mb-4">Ultimos movimientos</h2>
            {lista.lenght === 0 ? (
                <p className="text-gray-500">No hay ingresos registrados todavia</p>
            ) : (
                <ul className="space-y-2 text-sm">
                    {lista.map((mov, i) => (
                        <li key={i} className="flex justify-between border-b pb-1">
                            <span>{mov.descripcion}</span>
                            <span>{mov.total}</span>
                            <span>{mov.categoria}</span>
                            <span>{mov.fecha}</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Movimientos;
import React from "react";

const Filtros = () => {
    const handleClick = () => {
        alert('funcionalidad de filtros muy pronto');
    };

    return (
        <div className="text-center mt-6">
            <button
            onClick={handleClick}
            className="bg-yellow-300 hover:bg-yellow-400 px-4 py-2 rounded shadow"
            >Filtros</button>
        </div>
    );
};

export default Filtros
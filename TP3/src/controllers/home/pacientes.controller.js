const pacientesModel = require("../../models/sqlite/paciente.model.js");

const mostrarPaciente = async (req, res) => {
    try {
        const pacientes = await pacientesModel.list();
        res.render('pacientes', { 
            title: 'Portal Pacientes',
            pacientes: pacientes
        });
    } catch (error) {
        res.render('pacientes', { 
            title: 'Portal Pacientes',
            pacientes: null,
            error: error.message
        });
    }
};

module.exports = {
    mostrarPaciente
};
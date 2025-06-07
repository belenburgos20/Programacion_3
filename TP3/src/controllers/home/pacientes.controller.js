const db=require('../../models/sqlite/config/db.js');

const pacientesControllers = {
  mostrarPaciente: (req, res) => {
    try {
      const { Paciente } = require('../../models/sqlite/entities/paciente.entity.js');
      const pacientes = Paciente.findAll();
      res.render('pacientes', { pacientes, title: 'Pacientes' });
    } catch (error) {
      console.error('Error al obtener los pacientes:', error);
      res.status(500).send('Error al obtener los pacientes');
    }
  }
}


module.exports = pacientesControllers;
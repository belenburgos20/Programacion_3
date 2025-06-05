const {Paciente} = require('../sqlite/entities/paciente.entity.js');

const getPacientesModel =  ()=>{
  const users = Paciente.findAll();
  return users;
}

//TODO: agregar operaciones CRUD

const getPacienteById = (id) => {
  return Paciente.findByPk(id);
}

const createPaciente = (paciente) => {
  return Paciente.create(paciente);
}

const updatePaciente = (id, paciente) => {
  return Paciente.update(paciente, {
    where: { id: id }
  });
}

const deletePaciente = (id) => {
  return Paciente.destroy({
    where: { id: id }
  });
}

const getPacientesByDni = (dni) => {
  return Paciente.findAll({
    where: { dni: dni }
  });
}

module.exports = {
  getPacientesModel,
  getPacienteById,
  createPaciente,
  updatePaciente,
  deletePaciente,
  getPacientesByDni
};

const {Turno} = require('../sqlite/entities/turno.entity.js');

// CRUDS

const getTurnosModel = () => {
  const turnos = Turno.findAll();
  return turnos;
}

const getTurnoById = (id) => {
  return Turno.findByPk(id);
}

const createTurno = (turno) => {
  return Turno.create(turno);
}

const updateTurno = (id, turno) => {
  return Turno.update(turno, {
    where: { id: id }
  });
}

const deleteTurno = (id) => {
  return Turno.destroy({
    where: { id: id }
  });
}

const getTurnosByDni = (dni) => {
  return Turno.findAll({
    where: { dni: dni }
  });
}

module.exports = {
  getTurnosModel,
  getTurnoById,
  createTurno,
  updateTurno,
  deleteTurno,
  getTurnosByDni
};

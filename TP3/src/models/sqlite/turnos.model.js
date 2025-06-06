const {Turno} = require("../sqlite/entities/turno.entity.js")
const {Paciente} = require("../sqlite/entities/paciente.entity.js")

const getTurnosModel = async () => {
  const turnos = await Turno.findAll({
    include: [
      {
        model: Paciente,
        as: "paciente",
        attributes: ["id", "dni", "nombre", "apellido", "email"],
      },
    ],
  })
  return turnos
}

const getTurnoPorIdModel = async (id) => {
  const turno = await Turno.findByPk(id, {
    include: [
      {
        model: Paciente,
        as: "paciente",
        attributes: ["id", "dni", "nombre", "apellido", "email"],
      },
    ],
  })
  return turno
}

const createTurnoModel = async (turno) => {
  const newTurno = await Turno.create(turno)
  return newTurno
}

const updateTurnoModel = async (id, turno) => {
  const [updated] = await Turno.update(turno, {
    where: { id: id },
  })
  if (updated) {
    const updatedTurno = await Turno.findByPk(id)
    return updatedTurno
  }
  throw new Error("Turno no encontrado")
}

const deleteTurnoModel = async (id) => {
  const deleted = await Turno.destroy({
    where: { id: id },
  })
  if (deleted) {
    return { message: "Turno borrado con exito" }
  }
  throw new Error("Turno no encontrado")
}

const getTurnosPorPacienteModel = async (pacienteId) => {
  const turnos = await Turno.findAll({
    where: { pacienteId: pacienteId },
    include: [
      {
        model: Paciente,
        as: "paciente",
        attributes: ["id", "dni", "nombre", "apellido", "email"],
      },
    ],
  })
  return turnos
}

module.exports = {
  getTurnosModel,
  getTurnoPorIdModel,
  createTurnoModel,
  updateTurnoModel,
  getTurnosPorPacienteModel,
  deleteTurnoModel,
}


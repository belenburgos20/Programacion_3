const { Paciente } = require("../sqlite/entities/paciente.entity.js")
const jwt = require("jsonwebtoken")
const config = require("../../config/config.js")

const getPacientesModel = async () => {
  return await Paciente.findAll()
}

const getPacientePorIdModel = async (id) => {
  return await Paciente.findByPk(id)
}

const validate = async (email, password) => {
  const paciente = await Paciente.findOne({ where: { email: email } })
  if (!paciente || paciente.password !== password) {
    return null
  }
  return paciente
}

const list = async () => {
  return await Paciente.findAll({
    attributes: ["id", "name", "email"],
  })
}

const create = async (pacienteData) => {
  const newPaciente = await Paciente.create({
    name: `${pacienteData.nombre} ${pacienteData.apellido}`,
    email: pacienteData.email,
  })
  return newPaciente
}

const update = async (id, pacienteData) => {
  const [updated] = await Paciente.update(
    {
      name: `${pacienteData.nombre} ${pacienteData.apellido}`,
      email: pacienteData.email,
    },
    {
      where: { id: id },
    },
  )

  if (updated) {
    return await Paciente.findByPk(id)
  }
  throw new Error("Paciente no encontrado")
}

const deleteById = async (id) => {
  const deleted = await Paciente.destroy({
    where: { id: id },
  })

  if (deleted) {
    return { message: "Paciente eliminado correctamente" }
  }
  throw new Error("Paciente no encontrado")
}

module.exports = {
  getPacientesModel,
  getPacientePorIdModel,
  validate,
  list,
  create,
  update,
  deleteById,
}

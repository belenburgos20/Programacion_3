const {Paciente} = require("../sqlite/entities/paciente.entity.js")

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
    attributes: ["id", "dni", "nombre", "apellido", "email"],
  })
}

const create = async (pacienteData) => {
  const newPaciente = await Paciente.create({
    dni: pacienteData.dni,
    nombre: pacienteData.nombre,
    apellido: pacienteData.apellido,
    email: pacienteData.email,
    password: pacienteData.password || "123456",
  })
  return newPaciente
}

const update = async (id, pacienteData) => {
  const [updated] = await Paciente.update(
    {
      dni: pacienteData.dni,
      nombre: pacienteData.nombre,
      apellido: pacienteData.apellido,
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

const deletePorId = async (id) => {
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
  deletePorId,
}



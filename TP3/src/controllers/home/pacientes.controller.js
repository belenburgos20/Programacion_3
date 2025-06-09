const pacientesModel = require("../../models/sqlite/paciente.model.js")
const turnosModel = require("../../models/sqlite/turnos.model.js")

const mostrarPaciente = async (req, res) => {
  try {
    const pacientes = await pacientesModel.list()
    const turnos = await turnosModel.getTurnosModel()

    res.render("pacientes", {
      title: "Gestión de Pacientes y Turnos",
      pacientes: pacientes,
      turnos: turnos,
    })
  } catch (error) {
    console.error("Error al cargar pacientes:", error)
    res.render("pacientes", {
      title: "Gestión de Pacientes y Turnos",
      pacientes: [],
      turnos: [],
      error: "Error al cargar los datos",
    })
  }
}

module.exports = {
  mostrarPaciente,
}


const pacientesModel = require("../../models/sqlite/paciente.model.js")
const jwt = require("jsonwebtoken")
const Config = require("../../config/config.js")

class PacientesController {
  async login(req, res) {
    try {
      const { email, password } = req.body

      const paciente = await pacientesModel.validate(email, password)

      if (!paciente) {
        return res.status(401).json({ message: "Email o contraseña incorrectos" })
      }

      const payload = {
        id: paciente.id,
        email: paciente.email,
        nombre: paciente.nombre,
        apellido: paciente.apellido,
        role: "paciente",
      }

      const token = jwt.sign(payload, Config.secretWord, { expiresIn: Config.expiresIn })

      res.status(200).json({
        token,
        user: {
          id: paciente.id,
          email: paciente.email,
          nombre: paciente.nombre,
          apellido: paciente.apellido,
        },
      })
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }

  async list(req, res) {
    try {
      const pacientes = await pacientesModel.list()
      res.status(200).json(pacientes)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }

  async create(req, res) {
    try {
      const { dni, nombre, apellido, email } = req.body

      const nuevoPaciente = await pacientesModel.create({
        dni,
        nombre,
        apellido,
        email,
      })

      res.status(201).json(nuevoPaciente)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }

  async delete(req, res) {
    try {
      const id = req.params.id
      const resultado = await pacientesModel.deletePorId(id)
      res.status(200).json(resultado)
    } catch (error) {
      res.status(404).json({ message: error.message })
    }
  }

  async update(req, res) {
    try {
      const id = req.params.id
      const { dni, nombre, apellido, email } = req.body

      const pacienteActualizado = await pacientesModel.update(id, {
        dni,
        nombre,
        apellido,
        email,
      })

      res.status(200).json(pacienteActualizado)
    } catch (error) {
      res.status(404).json({ message: error.message })
    }
  }

  async getPacientePorId(req, res) {
    try {
      const id = req.params.id
      const paciente = await pacientesModel.getPacientePorId(id)
      res.status(200).json(paciente)
    } catch (error) {
      res.status(404).json({ message: error.message })
    }
  }

  async mostrarPagina(req, res) {
    try {
      const pacientes = await pacientesModel.list()
      const turnosModel = require("../../models/sqlite/turnos.model.js")
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
}

module.exports = new PacientesController()


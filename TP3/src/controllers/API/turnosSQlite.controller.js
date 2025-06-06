const turnosModel = require("../../models/sqlite/turnos.model")
const Turno = require("../../models/sqlite/entities/turno.entity")

class TurnosController {
  async list(req, res) {
    try {
      const turnos = await turnosModel.getTurnosModel()
      res.status(200).json(turnos)
    } catch (error) {
      res.status(500).json({ message: "Error al obtener los turnos", error })
    }
  }

  async create(req, res) {
    try {
      const { fecha, hora, pacienteId, especialistaId } = req.body
      const nuevoTurno = new Turno(fecha, hora, pacienteId, especialistaId)
      const turnoCreado = await turnosModel.create(nuevoTurno)
      res.status(201).json(turnoCreado)
    } catch (error) {
      res.status(500).json({ message: "Error al crear el turno", error })
    }
  }

  async delete(req, res) {
    try {
      const id = req.params.id
      const turnoBorrado = await turnosModel.deleteTurnoModel(id)
      res.status(200).json(turnoBorrado)
    } catch (error) {
      res.status(404).json({ message: `No existe el turno con el id: ${id}`, error })
    }
  }

  async update(req, res) {
    try {
      const id = req.params.id
      const { fecha, hora, pacienteId, especialistaId } = req.body
      const turnoActualizado = await turnosModel.updateTurnoModel(id, { fecha, hora, pacienteId, especialistaId })
      res.status(200).json(turnoActualizado)
    } catch (error) {
      res.status(404).json({ message: `No existe el turno con el id: ${id}`, error })
    }
  }

  async getTurnoPorId(req, res) {
    try {
      const id = req.params.id
      const turno = await turnosModel.getTurnoByIdModel(id)
      if (!turno) {
        return res.status(404).json({ message: `No existe el turno con el id: ${id}` })
      }
      res.status(200).json(turno)
    } catch (error) {
      res.status(500).json({ message: "Error al obtener el turno", error })
    }
  }

  async getTurnosPorPaciente(req, res) {
    try {
      const pacienteId = req.params.pacienteId
      const turnos = await turnosModel.getTurnosPorPacienteModel(pacienteId)
      if (!turnos || turnos.length === 0) {
        return res.status(404).json({ message: `No existen turnos para el paciente con id: ${pacienteId}` })
      }
      res.status(200).json(turnos)
    } catch (error) {
      res.status(500).json({ message: "Error al obtener los turnos del paciente", error })
    }
  }

  //TODO: problemas con el delete, no se borra bien el turno
}

module.exports = new TurnosController()

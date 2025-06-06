const turnosModel = require("../../models/sqlite/turnos.model")

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
      const { fecha, hora, pacienteId } = req.body

      if (!fecha || !hora || !pacienteId) {
        return res.status(400).json({
          message: "Fecha, hora y pacienteId son requeridos",
        })
      }

      const nuevoTurno = {
        fecha,
        hora,
        pacienteId,
        estado: "reservado",
      }

      const turnoCreado = await turnosModel.createTurnoModel(nuevoTurno)
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
      const id = req.params.id
      res.status(404).json({ message: `No existe el turno con el id: ${id}`, error })
    }
  }

  async update(req, res) {
    try {
      const id = req.params.id
      const { fecha, hora, pacienteId, estado } = req.body

      const turnoData = { fecha, hora, pacienteId }
      if (estado) {
        turnoData.estado = estado
      }

      const turnoActualizado = await turnosModel.updateTurnoModel(id, turnoData)
      res.status(200).json(turnoActualizado)
    } catch (error) {
      const id = req.params.id
      res.status(404).json({ message: `No existe el turno con el id: ${id}`, error })
    }
  }

  async getTurnoPorId(req, res) {
    try {
      const id = req.params.id
      const turno = await turnosModel.getTurnoPorIdModel(id)
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
}

module.exports = new TurnosController()


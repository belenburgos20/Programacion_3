const turnosmodel = require("./../../models/mock/turnos.models.js")
const Turno = require("../../models/mock/entities/turnos.entity.js")

class TurnosController {
  async list(req, res) {
    try {
      const turnos = await turnosmodel.list()
      res.status(200).json(turnos)
    } catch (error) {
      res.status(500).json({ message: "Error al obtener turnos", error: error.message })
    }
  }

  async create(req, res) {
    try {
      const { fecha, hora, pacienteId } = req.body

      if (!fecha || !hora || !pacienteId) {
        return res.status(400).json({ message: "Fecha, hora y pacienteId son requeridos" })
      }

      const nuevoTurno = new Turno(fecha, hora, pacienteId)
      const info = await turnosmodel.create(nuevoTurno)
      res.status(201).json(info)
    } catch (error) {
      res.status(500).json({ message: "Error al crear turno", error: error.message })
    }
  }

  update(req, res) {
    const id = req.params.id
    const { fecha, hora, pacienteId, estado } = req.body

    if (!fecha || !hora || !pacienteId) {
      return res.status(400).json({ message: "Fecha, hora y pacienteId son requeridos" })
    }

    const turnoActualizado = new Turno(fecha, hora, pacienteId, estado)
    turnosmodel
      .update(id, turnoActualizado)
      .then((resultado) => {
        res.status(200).json(resultado)
      })
      .catch((error) => {
        res.status(404).json({ message: `No se pudo actualizar el turno con id: ${id}`, error })
      })
  }

  async listByPaciente(req, res) {
    try {
      const pacienteId = req.params.id
      const turnos = await turnosmodel.getTurnosPorPaciente(pacienteId)
      res.status(200).json(turnos)
    } catch (error) {
      res.status(500).json({ message: "Error al obtener turnos del paciente", error: error.message })
    }
  }

  getTurnoById(req, res) {
    const id = req.params.id
    const turno = turnosmodel.getTurnoById(id)
    turno
      .then((turnoEncontrado) => {
        res.status(200).json(turnoEncontrado)
      })
      .catch((error) => {
        res.status(404).json({ message: `No existe el turno con id: ${id}`, error })
      })
  }

  async cancel(req, res) {
    const id = req.params.id;
    try {
      const cancelado = await turnosmodel.cancel(id);
      res.status(200).json({ message: "Turno cancelado correctamente", turno: cancelado });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}

module.exports = new TurnosController()


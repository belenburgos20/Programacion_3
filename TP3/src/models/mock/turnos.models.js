const Turno = require("./entities/turnos.entity.js")

class TurnosModel {
  constructor() {
    this.data = []
    this.id = 1

    // datos usados para prueba
    this.data.push(
      new Turno("2024-06-10", "09:00", 1, "reservado", 1),
      new Turno("2024-06-15", "14:30", 1, "reservado", 2),
      new Turno("2024-06-20", "10:15", 1, "cancelado", 3),
    )
    this.id = 4
  }

  list() {
    return new Promise((resolve, reject) => {
      try {
        resolve(this.data.filter((turno) => turno.estado !== "cancelado"))
      } catch (error) {
        reject(error)
      }
    })
  }

  getTurnosByPaciente(idPaciente) {
    return new Promise((resolve, reject) => {
      try {
        const turnos = this.data.filter((turno) => turno.pacienteId == idPaciente && turno.estado !== "cancelado")
        resolve(turnos)
      } catch (error) {
        reject(error)
      }
    })
  }

  listByPaciente(idPaciente) {
    return this.getTurnosByPaciente(idPaciente)
  }

  create(turno) {
    return new Promise((resolve, reject) => {
      try {
        if (!turno) {
          throw new Error("El turno no puede ser nulo")
        }

        turno.id = this.id++
        this.data.push(turno)
        resolve(turno)
      } catch (error) {
        reject(error)
      }
    })
  }

  update(idTurno, turnoActualizado) {
    return new Promise((resolve, reject) => {
      try {
        const turno = this.data.find((t) => t.id == idTurno)

        if (!turno) {
          throw new Error("Turno no encontrado")
        }

        if (turno.estado === "cancelado") {
          throw new Error("No se puede actualizar un turno cancelado")
        }

        turno.fecha = turnoActualizado.fecha
        turno.hora = turnoActualizado.hora
        turno.pacienteId = turnoActualizado.pacienteId
        if (turnoActualizado.estado) {
          turno.estado = turnoActualizado.estado
        }

        resolve(turno)
      } catch (error) {
        reject(error)
      }
    })
  }

  cancel(idTurno) {
    return new Promise((resolve, reject) => {
      try {
        const turno = this.data.find((t) => t.id == idTurno)

        if (!turno) {
          throw new Error("Turno no encontrado")
        }

        if (turno.estado === "cancelado") {
          throw new Error("El turno ya está cancelado")
        }

        turno.estado = "cancelado"
        resolve(turno)
      } catch (error) {
        reject(error)
      }
    })
  }

  getTurnoById(id) {
    return new Promise((resolve, reject) => {
      try {
        const turno = this.data.find((t) => t.id == id)
        if (!turno) {
          throw new Error("Turno no encontrado")
        }
        resolve(turno)
      } catch (error) {
        reject(error)
      }
    })
  }

  // TODO: Problemas con delete, no borra el turno.

}

module.exports = new TurnosModel()


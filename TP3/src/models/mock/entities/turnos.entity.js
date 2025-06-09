const identificador = require("./identificador.entity");

class Turno extends identificador {
  constructor(fecha, hora, pacienteId, estado='reservado', id=0) {
    super(id);
    this.fecha = fecha;
    this.hora = hora;
    this.pacienteId = pacienteId;
    this.estado = estado;
  }
}

module.exports = Turno;
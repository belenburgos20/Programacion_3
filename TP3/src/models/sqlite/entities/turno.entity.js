const { DataTypes } = require("sequelize")
const { sequelize } = require("./../config/db.js")

const Turno = sequelize.define("Turno", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  fecha: DataTypes.DATE,
  hora: DataTypes.TIME,
  pacienteId: {
    type: DataTypes.INTEGER,
    references: {
      model: "Pacientes",
      key: "id",
    },
  },
  profesionalId: {
    type: DataTypes.INTEGER,
    references: {
      model: "Profesionales",
      key: "id",
    },
  },
})

module.exports = { Turno }

const {DataTypes} = require("sequelize")
const {sequelize} = require("./../config/db.js")

const Turno = sequelize.define("Turno", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  fecha: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  hora: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pacienteId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "Pacientes",
      key: "id",
    },
  },
  estado: {
    type: DataTypes.STRING,
    defaultValue: "reservado",
    allowNull: false,
  },
})

module.exports = {Turno}

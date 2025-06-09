const { Sequelize } = require("sequelize")
const path = require("path")

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: path.join(__dirname, "db", "clinica.sqlite"),
  logging: false,
})

const connectDB = async () => {
  try {
    
    await sequelize.authenticate()
    console.log("Conexión a la base de datos establecida correctamente.")

    const { Paciente } = require("../entities/paciente.entity.js")
    const { Turno } = require("../entities/turno.entity.js")

    Paciente.hasMany(Turno, { foreignKey: "pacienteId", as: "turnos" })
    Turno.belongsTo(Paciente, { foreignKey: "pacienteId", as: "paciente" })

    await sequelize.sync()
    console.log("Base de datos sincronizada correctamente.")
  } catch (error) {
    console.error("Error conectando a la base de datos:", error)
  }
}

module.exports = { sequelize, connectDB }

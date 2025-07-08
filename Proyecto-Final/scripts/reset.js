const { sequelize } = require("../models/index.js")

async function resetAndSeed() {
  try {
    console.log(" Reiniciando base de datos...")
    await sequelize.sync({ force: true })
    console.log(" Tablas recreadas")
    console.log("\n Ejecutando seeders...")
    require("./run-seeders")
  } catch (error) {
    console.error("Error:", error)
    process.exit(1)
  }
}

resetAndSeed()
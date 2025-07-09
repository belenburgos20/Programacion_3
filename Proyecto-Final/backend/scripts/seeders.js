const { sequelize } =require ("./backend/models/index.js")
const path = require("path")
const fs = require("fs")

async function runSeeders() {
  try {
    console.log("Iniciando seeders...")
    const seedersPath = path.join(__dirname, "./backend/seeders")
    const seederFiles = fs
      .readdirSync(seedersPath)
      .filter((file) => file.endsWith(".js"))
      .sort()

    console.log(` Encontrados ${seederFiles.length} seeders:`)
    seederFiles.forEach((file) => console.log(`   - ${file}`))
    for (const file of seederFiles) {
      console.log(`\n Ejecutando: ${file}`)
      const seeder = require(path.join(seedersPath, file))
      await seeder.up(sequelize.getQueryInterface(), sequelize.Sequelize)
    }

    console.log("\n Todos los seeders ejecutados exitosamente!")
    const { Usuario } = require("./backend/models/usuario.js")
    const userCount = await Usuario.count()
    console.log(`\n Total usuarios creados: ${userCount}`)

    process.exit(0)
  } catch (error) {
    console.error("Error ejecutando seeders:", error)
    process.exit(1)
  }
}

runSeeders()
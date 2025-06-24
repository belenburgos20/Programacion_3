const express = require("express")
const router = express.Router()

const homeRoutes = require("./home.route")
const categoriasRoutes = require("./categorias.route")
const movimientosRoutes = require("./movimientos.route")

router.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    message: "API funcionando correctamente",
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || "development",
  })
})

router.get("/test", (req, res) => {
  res.json({
    message: "Endpoint de prueba",
    data: {
      backend: "Express",
      database: "PostgreSQL",
      orm: "Sequelize",
    },
  })
})

router.use("/", homeRoutes)
router.use("/categorias", categoriasRoutes)
router.use("/movimientos", movimientosRoutes)

module.exports = router

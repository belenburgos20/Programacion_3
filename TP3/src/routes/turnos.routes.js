const { Router } = require("express")
const turnosController = require("../controllers/API/turnosSQlite.controller.js")
const { verifyTokenMiddleware } = require("../middlewares/verifyToken.middleware.js")

const rutaTurnos = Router()

rutaTurnos.get("/", verifyTokenMiddleware, turnosController.list)
rutaTurnos.post("/", verifyTokenMiddleware, turnosController.create)
rutaTurnos.put("/:id", verifyTokenMiddleware, turnosController.update)
rutaTurnos.delete("/:id", verifyTokenMiddleware, turnosController.delete)
rutaTurnos.get("/:id", verifyTokenMiddleware, turnosController.getTurnoPorId)
rutaTurnos.get("/paciente/:pacienteId", verifyTokenMiddleware, turnosController.getTurnosPorPaciente)

module.exports = rutaTurnos
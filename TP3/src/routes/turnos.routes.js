const { Router } = require("express")
const turnosController = require("../controllers/API/turnos.controller.js")
const { verifyTokenMiddleware } = require("../middlewares/verifyToken.middleware.js")

const rutaTurnos = Router()

rutaTurnos.get("/", turnosController.list)
rutaTurnos.get("/:id", verifyTokenMiddleware, turnosController.getTurnoById)
rutaTurnos.get("/paciente/:id", verifyTokenMiddleware, turnosController.listByPaciente)
rutaTurnos.post("/", verifyTokenMiddleware, turnosController.create)
rutaTurnos.put("/:id", verifyTokenMiddleware, turnosController.update)
rutaTurnos.delete("/:id", verifyTokenMiddleware, turnosController.cancel)


module.exports = rutaTurnos
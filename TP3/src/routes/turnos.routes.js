const {Router} = require('express');
const turnosController = require('../controllers/API/turnos.controller.js');
const  {verifyTokenMiddleware}  = require('../middlewares/verifyToken.middleware.js');

const rutaTurnos = Router();

rutaTurnos.get("/:idPaciente", turnosController.getTurnosByPaciente)
rutaTurnos.delete("/:idTurno", verifyTokenMiddleware, turnosController.cancelTurno)
rutaTurnos.post("/", verifyTokenMiddleware, turnosController.createTurno)
rutaTurnos.get("/", turnosController.list)


module.exports = rutaTurnos;
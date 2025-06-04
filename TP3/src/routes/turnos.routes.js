const {Router} = require('express');
const turnosController = require('../controllers/API/turnos.controller.js');
const  {verifyTokenMiddleware}  = require('../middlewares/verifyToken.middleware.js');

const rutaTurnos = Router();

rutaTurnos.get("/:idPaciente", turnosController.getTurnosByPaciente)
rutaTurnos.delete("/:idTurno", turnosController.cancelTurno)
rutaTurnos.post("/", verifyTokenMiddleware, turnosController.createTurno)
rutaTurnos.get("/", turnosController.list)


module.exports = rutaTurnos;

const express = require('express');
const router = express.Router();
const turnosController = require('../controllers/API/turnos.controller');
const AuthController = require('../controllers/API/auth.controller.js');
const verifyToken = require('../middlewares/verifyToken.middleware.js');
const TurnosController = require('../controllers/API/turnos.controller.js');

const turnosController = new TurnosController();

//login pai
router.post('/v1/login', AuthController.login);

//endpoints de los turnos
router.get('/v1/turnos/pacientes/:id', turnosController.listByPaciente);
router.post('/v1/turnos', verifyToken, turnosController.create);
router.delete('/v1/turnos/:id', turnosController.delete);

module.exports = router;
const express = require('express');
const rutaPacientes = express.Router();

const pacientesControllerAPI = require('../controllers/API/pacientesSQLite.controller.js');
const pacientesControllerHome = require('../controllers/home/pacientes.controller.js');
const { verifyTokenMiddleware } = require('../middlewares/verifyToken.middleware.js');

rutaPacientes.get('/', pacientesControllerHome.mostrarPaciente);


rutaPacientes.get('/list', verifyTokenMiddleware, pacientesControllerAPI.list);
rutaPacientes.get('/:id', verifyTokenMiddleware, pacientesControllerAPI.getPacientePorId);
rutaPacientes.post('/', verifyTokenMiddleware, pacientesControllerAPI.create);
rutaPacientes.put('/:id', verifyTokenMiddleware, pacientesControllerAPI.update);
rutaPacientes.delete('/:id', verifyTokenMiddleware, pacientesControllerAPI.delete);
rutaPacientes.post('/login', pacientesControllerAPI.login);

module.exports = rutaPacientes;
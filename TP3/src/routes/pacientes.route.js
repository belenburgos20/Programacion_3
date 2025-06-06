const {Router} = require('express');
const pacientesController = require('../controllers/API/pacientesSQLite.controller.js');
const  {verifyTokenMiddleware}  = require('../middlewares/verifyToken.middleware.js');

const rutaPacientes = Router();

rutaPacientes.get('/', verifyTokenMiddleware, pacientesController.list);
rutaPacientes.get('/:id', verifyTokenMiddleware, pacientesController.getPacientePorId);
rutaPacientes.post('/', verifyTokenMiddleware, pacientesController.create);
rutaPacientes.put('/:id', verifyTokenMiddleware, pacientesController.update);
rutaPacientes.delete('/:id', verifyTokenMiddleware, pacientesController.delete);
rutaPacientes.post('/login', pacientesController.login);


module.exports = rutaPacientes;
const express = require('express');
const rutaMovimientos = express.Router();
const movimientosController = require('../controllers/API/movimientos.controller.js');
const { verifyTokenMiddleware } = require('../middleware/verifyToken.middleware.js');

rutaMovimientos.use(verifyTokenMiddleware);

rutaMovimientos.get('/', movimientosController.listarMovimientos);
rutaMovimientos.post('/', movimientosController.crearMovimiento);
rutaMovimientos.put('/:id', movimientosController.actualizarMovimiento);
rutaMovimientos.delete('/:id', movimientosController.eliminarMovimiento);
rutaMovimientos.get('/:id', movimientosController.obtenerMovimientoPorId);
rutaMovimientos.get('/fecha/:fecha', movimientosController.obtenerMovimientosPorFecha);
rutaMovimientos.get('/categoria/:id_categoria', movimientosController.obtenerMovimientosPorCategoria);
rutaMovimientos.get('/total/:total', movimientosController.obtenerMovimientoPorTotal);

module.exports = rutaMovimientos;


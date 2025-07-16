const express = require('express');
const categoriaController = require('../controllers/API/categorias.controller.js');
const { verifyTokenMiddleware } = require('../middleware/verifyToken.middleware.js');
const rutaCategorias = express.Router();

rutaCategorias.use(verifyTokenMiddleware);

rutaCategorias.get('/', categoriaController.listarCategorias);
rutaCategorias.post('/', categoriaController.crearCategoria);
rutaCategorias.put('/:id', categoriaController.actualizarCategoria);
rutaCategorias.delete('/:id', categoriaController.eliminarCategoria);
rutaCategorias.get('/:id', categoriaController.obtenerCategoriaPorId);
rutaCategorias.get('/nombre/:nombre', categoriaController.obtenerCategoriasPorNombre);

module.exports = rutaCategorias;
const categoriaModel = require('../../models/categorias.model.js');
const jwt = require('jsonwebtoken');
const Config = require('../../config.js');

class CategoriasController {
    async listarCategorias(req, res) {
        try {
            const categorias = await categoriaModel.listarCategorias();
            res.json(categorias);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error al listar las categorías' });
        }
    }

    async crearCategoria(req, res) {
        try {
            const { nombre, descripcion } = req.body;
            const categoria = await categoriaModel.crearCategoria(nombre, descripcion);
            res.json(categoria);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error al crear la categoría' });
        }
    }

    async actualizarCategoria(req, res) {
        try {
            const { id } = req.params;
            const { nombre, descripcion } = req.body;
            const categoria = await categoriaModel.actualizarCategoria(id, nombre, descripcion);
            res.json(categoria);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error al actualizar la categoría' });
        }
    }

    async eliminarCategoria(req, res) {
        try {
            const { id } = req.params;
            await categoriaModel.eliminarCategoria(id);
            res.json({ message: 'Categoría eliminada correctamente' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error al eliminar la categoría' });
        }
    }

    async obtenerCategoriaPorId(req, res) {
        try {
            const { id } = req.params;
            const categoria = await categoriaModel.obtenerCategoriaPorId(id);
            res.json(categoria);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error al obtener la categoría' });
        }
    }

    async obtenerCategoriasPorNombre(req, res) {
        try {
            const { nombre } = req.query;
            const categorias = await categoriaModel.obtenerCategoriasPorNombre(nombre);
            res.json(categorias);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error al obtener las categorías por nombre' });
        }
    }
}

module.exports = new CategoriasController();
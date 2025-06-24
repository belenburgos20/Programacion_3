const movimientoModel = require('../../models/movimientos.model.js');

class MovimientoController {

    async listarMovimientos(req, res) {
        try {
            const movimientos = await movimientoModel.list();
            res.json(movimientos);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error al listar los movimientos' });
        }
    }

    async crearMovimiento(req, res) {
        try {
            const { tipo, fecha, id_categoria, descripcion, total } = req.body;
            const movimiento = await movimientoModel.create(tipo, fecha, id_categoria, descripcion, total);
            res.json(movimiento);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error al crear el movimiento' });
        }
    }

    async actualizarMovimiento(req, res) {
        try {
            const { id } = req.params;
            const { tipo, fecha, id_categoria, descripcion, total } = req.body;
            const movimiento = await movimientoModel.update(id, tipo, fecha, id_categoria, descripcion, total);
            res.json(movimiento);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error al actualizar el movimiento' });
        }
    }

    async eliminarMovimiento(req, res) {
        try {
            const { id } = req.params;
            await movimientoModel.remove(id);
            res.json({ message: 'Movimiento eliminado exitosamente' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error al eliminar el movimiento' });
        }
    }

    async obtenerMovimientoPorId(req, res) {
        try {
            const { id } = req.params;
            const movimiento = await movimientoModel.getMovimientoPorId(id);
            res.json(movimiento);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error al obtener el movimiento' });
        }
    }

    async obtenerMovimientosPorFecha(req, res) {
        try {
            const { fecha } = req.params;
            const movimientos = await movimientoModel.getMovimientoPorFecha(fecha);
            res.json(movimientos);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error al obtener los movimientos' });
        }
    }

    async obtenerMovimientosPorCategoria(req, res) {
        try {
            const { id_categoria } = req.params;
            const movimientos = await movimientoModel.getMovimientoPorCategoria(id_categoria);
            res.json(movimientos);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error al obtener los movimientos' });
        }
    }

    async obtenerMovimientoPorTotal(req, res) {
        try {
            const { total } = req.params;
            const movimientos = await movimientoModel.getMovimientoPorTotal(total);
            res.json(movimientos);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error al obtener los movimientos' });
        }
    }
}

module.exports = new MovimientoController();

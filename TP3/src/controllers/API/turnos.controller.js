const turnosmodel = require('./../../models/mock/turnos.models.js');
const Turno = require('../../models/entities/turno.entity');

class TurnosController {
    async list(req, res) {

        res.status(200).json(await turnosmodel.list());

    }

    async create(req, res) {

        const { fecha, hora, pacienteId } = req.body;
        const nuevoTurno = new Turno(fecha, hora, pacienteId);
        const info = await turnosmodel.create(nuevoTurno);
        res.status(200).json(info);

    }

    async delete(req, res) {

        const id = req.params.id;
        const turnoBorrado = await turnosmodel.delete(id);
        turnoBorrado.then(turno => {
            res.status(200).json(turno);
        }).catch(error => {
            res.status(404).json({ message: `no existe el turno`, error });
        });

    }

    async update(req, res) {

        const id = req.params.id;
        const { fecha, hora, pacienteId } = req.body;
        const nuevoTurno = new Turno(fecha, hora, pacienteId);
        turnosmodel.update(id, nuevoTurno);
        res.status(200).json({ message: "actualizado" });

    }

    async listByPaciente(req, res) {

        const pacienteId = req.params.id;
        const turnos = await turnosmodel.listByPaciente(pacienteId);
        res.status(200).json(turnos);

    }
}

module.exports = TurnosController;

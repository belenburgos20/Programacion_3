const usuarioModel = require('../../models/usuarios.model.js');
const jwt = require('jsonwebtoken');
const Config = require('../../config/config.js');

class UsuarioController {

    async crearUsuario(req, res) {
        try {
            const { nombre, email, password } = req.body;
            const usuario = await usuarioModel.createUsuario(nombre, email, password);
            res.json(usuario);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error al crear el usuario' });
        }
    }

    async login(req, res) {
        try {
            const { email, password } = req.body;
            const usuario = await usuarioModel.login(email, password);
            const token = jwt.sign({ id: usuario.id }, Config.secretWord, { expiresIn: '1h' });
            res.json({ token });
        } catch (error) {
            console.error(error);
            res.status(401).json({ error: 'Credenciales inválidas' });
        }
    }
}

module.exports = new UsuarioController();
